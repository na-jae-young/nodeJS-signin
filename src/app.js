/////////////////////express
const express = require('express');
const app = express();

app.set('views', "../src/views")
app.set("view engine", "ejs");

const home = require('./routes/home');
app.use('/',home)

module.exports = app;







// const http = require('http');
// const app = http.createServer((req , res)=>{
//     res.writeHead(200,{ "Content-Type":"text/html; charset=utf-8" });
//     if(req.url === '/'){
//         res.end("여기는 루트");
//     }else if(req.url === "/login"){
//         res.end("여기는 로그인 화면 입니다.");
//     }
// });
// app.listen(3001,()=>{
//     console.log("Http 로 가동한 서버");
// })
