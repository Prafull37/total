const express = require("express");
const bodyParser = require("body-parser");
const {randomBytes} = require("crypto");
const cors=require("cors");
const axios= require("axios");

const app=express();

app.use(bodyParser.json())
app.use(cors());

const post={}
app.get("/posts",(req,res)=>{
    console.log("req recieved",post)
    res.status(200).send(post);
})


app.post("/posts", async (req,res)=>{
    try{

        const id=randomBytes(4).toString('hex');
        const {title}=req.body;
        post[id]={id,title};
        console.log("post in ost",post);
        await axios.post("http://localhost:4005/events",{type:"PostCreated",data:{id,title}});
        
        res.status(201).send(post[id]);
    }catch(e){
        console.error(e)
    }
});

app.post("/events",async (req,res)=>{
    console.log("Event Received : ",req.body.type);
    res.send({});
})

app.listen(4000,()=>{
    console.log("Server is running at 4000");
})