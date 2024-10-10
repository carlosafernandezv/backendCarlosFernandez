import express from "express";
import "dotenv/config.js"

const server = express()

const PORT = process.env.PORT

const ready = ()=> console.log("server ready in port: "+PORT);

server.listen(PORT,ready)   

server.get('/',(request,response) =>{
    response.send('Hola mundo en Express')
})

server.get('/mensaje',(request,response) =>{
    response.send('Hola Express')
})

console.log(process.env.PORT);
