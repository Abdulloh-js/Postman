
// import http from "http;"

// const server1 =http.createServer((req, res) =>{
// res.statusCode = 200;
// res.setHeader("Content-Type", "text/plain");
// res.end("Bismillah");
// });

// server.listen(8080, () =>{
// console.log("Server Run!");

// });

import express from "express";

const server = express();

server.get("/", (req, res) => {
    res.status(200).json({sucsess: true});
});

server.listen(8080, () =>{
 console.log("Server Run!");
});
