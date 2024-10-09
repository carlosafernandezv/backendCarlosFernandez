import express from "express";
import "dotenv/config.js"

const server = express()

const PORT = process.env.PORT

const ready = ()=> console.log("server ready in port: "+PORT);

server.listen(PORT,ready)

console.log(process.env.PORT);
