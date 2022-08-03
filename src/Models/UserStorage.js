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

    static #getUser(data,isAll,fields){
        const users = JSON.parse(data)
        if(isAll){
            return users
        }
        const newUsers = fields.reduce((newUsers,field)=>{
            if(users.hasOwnProperty(field)){   
                newUsers[field] = users[field] ;
            }
            return newUsers;
        },{});
        return newUsers; 
    }
    static getUser(isAll,...fields){
        return fs
            .readFile("./database/users.json")
            .then(data=>{
                return this.#getUser(data,isAll,fields);
            })
            .catch(console.error)
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
        return userInfo 
    }


    static async save(userInfo){
        const users = await this.getUser(true);
        console.log(users,'register')
        if(users.id.includes(userInfo.id)){ // ERROR  User => TRY{}CATCH{}
            throw "이미 존재하는 아이디 입니다."
        }
        users.id.push(userInfo.id);
        users.psword.push(userInfo.psword); 
        users.name.push(userInfo.name);
        fs.writeFile("./database/users.json",JSON.stringify(users));
        return {success: true}
    }
}

module.exports = UserStorage;
