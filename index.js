// const os = require("os");

// console.log(os.cpus());

// import http from"http";

// const server =http.createServer((req, res) =>{
// res.statusCode = 200;
// res.setHeader("Content-Type", "text/plain");
// res.end("Bismillah");
// });

import express from "express";
import {v4} from "uuid"

const server = express();
server.use(express.json());

const todo = [];



server.get("/", (req, res) => {
    res.status(200).json({success: true});
});

server.post('/todo/add', (req, res) => {
    const { title, desc }=(req.body);
    todo.push({ id: v4(), title, desc });
    res.status(200).json({success: true});
});

server.put("/todo/edit/:id", (req, res =>{
    const { title, desc} = req.body;
    const {id} = req.params;

    const index = todo.findIndex((val) => val.id ===id);

    todo.splice(index, 1, { id, title, desc});

    res.status(200).json({success: true, todo});
}));

server.get("/todo/get/:id", (req, res) => {
    const { id} = req.params;

    const data =todo.find((val) => val.id === id);
    res.status(200).json({success: true});
});

server.get("/todo/get-all", (req, res) => {
    const {search} = req.query;

    const data = todo.includes(search);

console.log(data)

    res.status(200).json({success: true});
});










server.listen(8080, () =>{
 console.log("Server Run!");
});

