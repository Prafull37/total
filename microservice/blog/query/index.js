const express= require('express');
const bodyParser = require('body-parser');
const cors =require('cors');
const axios = require('axios');
const app = express();

app.use(bodyParser.json());

app.use(cors());

const posts={}
//query=4002
app.get("/posts",(req,res)=>{
    res.send(posts)
});

const handleEvent=(type,data)=>{
    if(type==="PostCreated"){
        const {id,title} = data;
         posts[id]= {id,title,comments:[]}
    }
    // console.log("working...")
    if(type==="CommentCreated"){
        const {postId,id,content,status}= data;
        
        // console.log("posts",posts);

        posts[postId].comments.push({id,content,status})
    }

    if(type==="CommentUpdated"){
        
        const {postId,id,status,content} =data;

        const commentIndex = posts[postId].comments.findIndex((comment)=>comment.id===id);
        posts[postId].comments=[
            ...posts[postId].comments.slice(0,commentIndex),
            {id,status,content},
            ...posts[postId].comments.slice(commentIndex+1)
        ]
    }
}

app.post('/events',(req,res)=>{
    const {type,data}= req.body;
    console.log("Event Recieved :- ",{type,data});

    handleEvent(type,data)

    res.send({})
})

app.listen(4002 ,async ()=>{
    try{

        const res = await  axios.get("http://localhost:4005/events");
        for(let event of res.data){
            handleEvent(event.type,event.data)
        }
    }catch(e){
        
    }

    console.log('Server is running at 4002');
})