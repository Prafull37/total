const express=require("express");
const bodyParser=require("body-parser");
const {randomBytes} = require("crypto");
const cors = require("cors");
const app = express();
const axios=require("axios");

app.use(bodyParser.json());
app.use(cors());


const commentByPosts={};


app.get("/post/:id/comments",(req,res)=>{
    const {id} = req.params;
    // console.log("req in comments", commentByPosts[id])
    res.status(200).send(commentByPosts[id] || []);
})

app.post("/post/:id/comments", (req,res)=>{
    try{
    const {id}=req.params;
    const {content} = req.body;
    console.log("comment",content)
    const commentId=randomBytes(4).toString("hex");
    // if(comments[id]!==undefined){
        const comments=commentByPosts[id] || [];
        comments.push({id:commentId,content,status:'pending'});

        commentByPosts[id]= comments;
        
   
     axios.post("http://localhost:4005/events",{type:"CommentCreated",
            data:{
                id:commentId,
                content:content,
                postId:id,
                status:'pending'
            }
        }) .catch(err=> console.log("Erorr occures"));
   
  
        console.log("errr ocured")
        res.status(201).send(comments);
    }catch(e){
        console.log(e);
    }
    // }
})


app.post("/events", (req,res)=>{
   const event= req.body;
    console.log("Event Recieved :- ",event);
   if(event.type==="CommentModerated"){
       const {id,content,postId,status} = event.data;

       const commentIndex = commentByPosts[postId].findIndex((comment)=>comment.id===id);
       const updatedComment = {id,content,status};
       commentByPosts[postId] = [
           ...commentByPosts[postId].slice(0,commentIndex),
           updatedComment,
           ...commentByPosts[postId].slice(commentIndex+1)
       ];
     axios.post("http://localhost:4005/events",{
         type:"CommentUpdated",
         data:{
            ...updatedComment,
            postId 
         }
     }).catch(err => console.log(err))
   }
   res.send({})
})

app.listen(4001,()=>{
    console.log("Server is running at 4001");
})
