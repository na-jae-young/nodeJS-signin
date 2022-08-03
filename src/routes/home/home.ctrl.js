"use strict"

const { setDefaultResultOrder } = require("dns")
const UserStorage = require("../../Models/UserStorage")
const User = require('../../Models/User')
//UserStorage 의 user 를 static 으로 설정하면 바로 class 에서 불러 사용할수 있다.
//static 아닐시  const 변수 = UserStorage    , UserStorage.user 로 변수에 넣어서 사용 

const output = {
    home : (req, res) => {
        res.render("home/index")
    },
    login : (req, res) => {
        res.render("home/login")
    },
    register: (req, res) => {   
        res.render("home/register")
    }
}

const process = { 
    login : async (req, res) => {

        
        const user = new User(req.body)
        const response = await user.login();
        return res.json(response);     
    },
    register: async (req, res) => {

        const user = new User(req.body)
        const response = await user.register();
        return res.json(response); 
    }
}

module.exports = {
    output,
    process
}


// const User = require('../../Models/User')
// const user = new User(req.body)
// const response = user.login();
// return res.json(response);


