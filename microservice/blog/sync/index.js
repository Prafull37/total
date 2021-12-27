const express=require("express");
// const { appendFile } = require("fs");
// const http=require("http");
const bodyParser = require("body-parser");
const fetch = require('node-fetch');


const app= express();

app.use(bodyParser.json());
app.get("/",(req,res)=>{
    res.send("Hello world")
});

app.get("/sync/v1/posts",async (req,res)=>{
    console.log("invoked")
    const response = await fetch("http://localhost:4000/posts");
    const data = await response.json()
    const posts= Object.values(data);
    const postWithComment =[]
    for(let i=0;i<posts.length;i++){
        const post=posts[i];
        const commentResponse = await  fetch(`http://localhost:4001/post/${post.id}/comments`);
        const commentData= await commentResponse.json();
       
        postWithComment.push( {id:post.id,title:post.title,comments:commentData} )
    }
    console.log(postWithComment)
    res.status(200).send(postWithComment);
})


app.listen(4009,()=>{
    console.log(`Server is running at 4009`)
})
