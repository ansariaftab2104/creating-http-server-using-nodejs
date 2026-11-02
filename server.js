// console.log("Bismillah");

// Create http 
const http = require("http")

// Create server 
const server = http.createServer((req, res)=>{
    res.end("Response Sended ....")
})

server.listen(3000, ()=>{
    console.log("Server is Running on port 3000");
    
})

// here we create server with node 