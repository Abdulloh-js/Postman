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
import { PORT } from "./utilis/secrets.js";
import {Routes} from `./routes/index.js`


const server = express();
server.use(express.json());
server.use(express.urlencoded({ extendent: true}));


Routes.forEach((item) => {
    server.use(item.path, item.router);
});















server.listen(PORT, () =>{
 console.log(`Server Run ${PORT}!`);
});

