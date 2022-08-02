"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get('/', ctrl.output.home)   //get 접속했을때 
router.get('/login', ctrl.output.login)
router.post('/login',ctrl.process.login)  
//post 데이터 들어왔을때 req를 받아서 process.login 실행해서 res 반환


module.exports = router
