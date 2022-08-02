"use strict"

const { setDefaultResultOrder } = require("dns")
const UserStorage = require("../../Models/UserStorage")

//UserStorage 의 user 를 static 으로 설정하면 바로 class 에서 불러 사용할수 있다.
//static 아닐시  const 변수 = UserStorage    , UserStorage.user 로 변수에 넣어서 사용 

const output = {
    home : (req, res) => {
        res.render("home/index")
    },
    login : (req, res) => {
        res.render("home/login")
    },
}

const process = { 
    login : (req, res) => {

        const User = require('../../Models/User')
        const user = new User(req.body)
        const response = user.login();
        return res.json(response);

        
        // console.log(req.body)
        // const id = req.body.id;
        // const psword = req.body.psword;
        // const response = {};
        // const users = UserStorage.getUser('id', 'psword','name'); // 모델에서 id,psword 갖어옴 
        // console.log(users)

        // if(users.id.includes(id)){   
        //     const idx = users.id.indexOf(id);
        //     if(users.psword[idx] === psword) {
        //         response.success = true;
        //         return res.json(response);
        //     }
        //     response.success = false;
        //     response.message = 'Login failed : password error'
        //     return res.json(response);      
        // }
        // response.success = false;
        // response.message = 'Login failed : id error'
        // return res.json(response);
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


