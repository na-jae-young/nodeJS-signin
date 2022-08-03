"use strict"
//statict - UserStorage.user 로 바로 사용가능하게 해준다.
// #user  private 로 은닉화 해줄수 있다.
const fs = require('fs').promises;  
//.promises는 fs를 promise 로 반환하게 해준다. 

class UserStorage{

    

    // static #users = {
    //     id:[ 'we21','nah01','cjdruf'],
    //     psword:[ '1234', '123', '12345'],
    //     name:['js','ty','node']
    // }


    static getUser(...fields){
        //const users = this.#users
        const newUsers = fields.reduce((newUsers,field)=>{
            if(users.hasOwnProperty(field)){   
                newUsers[field] = users[field] ;
            }
            return newUsers;
        },{});
    return newUsers; 
    }


    static getUserInfo(id){
        //readfile 은 promise 반환 
        return fs
            .readFile("./database/users.json")
            .then((data)=>this.#getUserInfo(id,data))
            .catch(console.error);
    }

    static #getUserInfo(id,data){
        const users = JSON.parse(data)
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); // => [id,psword,name]
        const userInfo = usersKeys.reduce((newUser,info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        console.log(users,idx,usersKeys,userInfo);
        return userInfo 
    }


    static save(userInfo){
        //const users = this.#users;
        users.id.push(userInfo.id);
        users.psword.push(userInfo.psword); 
        users.name.push(userInfo.name);
        console.log(users);
        return {success: true}
    }
}

module.exports = UserStorage;
