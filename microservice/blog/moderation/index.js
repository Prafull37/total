const express= require('express');
const bodyParser = require('body-parser');
// const cors=require('cors');
const axios = require('axios');
const app= express();

app.use(bodyParser.json());
// app.use(cors());

const handleEvents= (event)=>{
    if(event.type==='CommentCreated'){
        const {id,content,postId} = event.data;
        let comment={id,content,postId}
        if(content.includes('orange')){
            comment['status']='rejected';
        }else{
            comment['status'] = 'approved';
        }

    axios.post('http://localhost:4001/events',{type:"CommentModerated",data:comment}).catch((err)=> console.log(err));
    }
}

//Moderation-4003
app.post('/events',(req,res)=>{
    const event = req.body;
    console.log("Event Recieved :- ",event);
    handleEvents(event)
    res.send({})
})

app.listen(4003,async ()=>{
    try{

        const res = await  axios.get("http://localhost:4005/events");
    
        for(let event of res.data){
            console.log("Event",event.type)
            handleEvents(event)
        }
    }
    catch(e){}

    console.log("Service is running at 4003")
})