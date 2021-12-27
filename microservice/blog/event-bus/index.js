const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();

const events=[];

app.use(bodyParser.json());

app.post("/events",  (req,res)=>{
    const event = req.body;
    events.push(event);
    console.log("Event Recieved :- ",event);
    try{

         axios.post("http://localhost:4000/events",event).catch(err=>console.log("err in post "));  //post
         axios.post("http://localhost:4001/events",event).catch(err=>console.log("err in comment"));  //comment
         axios.post("http://localhost:4002/events",event).catch(err=>console.log("err in query"));  //query
         axios.post("http://localhost:4003/events",event).catch(err=>console.log("err in moderation"));   //moderation
    } catch(e){
        console.log(e)
    }
    res.send({status:'Ok'})
});

app.get('/events',(req,res)=>{
    res.send(events);
})


app.listen(4005,()=>{
    console.log('Server is running at 4005')
})