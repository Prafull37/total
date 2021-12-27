/**
 * Primary File for API
 * 
 * 
 */

const http = require("http");

const server = http.createServer(function(req,res){

    res.end("Hello World ");
});

server.listen(3000,()=>{
    console.log(`Server is running at localhost:3000`)
});