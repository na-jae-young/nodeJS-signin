/////////////////////express

//모듈
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const morgan = require('morgan');
const fs = require('fs');
dotenv.config();
const app = express();

//라우팅
const home = require('./src/routes/home');


//로그관리
//morgan
const accessLogStream = fs.createWriteStream(
    `${__dirname}/log/access_morgan.log`,
     { flags: 'a' }
     )
app.use(morgan("dev"))
app.use (morgan("common", {stream:accessLogStream })) // "dev" , "conbine", "tiny"
//app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

//로그관리
//winston
// const logger = require('./src/config/logger')
// logger.log('info','hihi')// 'info 레벨 로그 
// logger.info("hello") // info 레벨 로그 내용 hello  위에와 같은  기능 
// logger.error("bye")



//앱 세팅
app.set('views', "./src/views")
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`)); //정적경로 
app.use(bodyParser.json());
//url을 통해 전달되는 데이터에 한굴 공백 등과 같은 문자가 포함될 경우 제대로 인식되지않는 문제 해결 
app.use(bodyParser.urlencoded({extended: true}));
app.use('/',home) // use -> 미들웨어를 등록해주는 메서드 

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


//로그관리 미들웨어   morgan 