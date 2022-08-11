"use strict"
//statict - UserStorage.user 로 바로 사용가능하게 해준다.
// #user  private 로 은닉화 해줄수 있다.
const fs = require('fs').promises;  
const { rejects } = require('assert');
const { resolve } = require('path');
const { isReadable } = require('stream');
const { json } = require('stream/consumers');
//.promises는 fs를 promise 로 반환하게 해준다. 


const db = require("../config/db");

class UserStorage{

    
    static getUser(){

    }
    static async getUserInfo(id){
        return new Promise((resolve,reject)=>{
                    const sql = "select id,psword from users where id = ? ;";
                    db.query(sql,[id],(err,data)=>{
                        if(err) reject(`${err}`);
                        else if(data.length === 0) resolve({id:""});
                        else resolve(data[0])

                });
            }) ;
        }

    static async save(userInfo){
        const {id} = await this.getUserInfo(userInfo.id)
        if(id){
            return new Promise((resolve,reject) => { 
                    resolve({success:false, message:`존재하는 아이디 입니다.`})
            })
        }
        return new Promise((resolve,reject)=>{
            const sql = "insert into users(id, name, psword) values(?,?,?);";
            db.query(sql,[userInfo.id,userInfo.name,userInfo.psword],(err)=>{
                if(err) reject(`${err}`);
                else resolve({success:true, message:'save success'});
        });

    }) ;
    }

//////////////////////////////////////////////////////////////////////////FSDB 구현 
    // static #getUser(data,isAll,fields){
    //     const users = JSON.parse(data)
    //     if(isAll){
    //         return users
    //     }
    //     const newUsers = fields.reduce((newUsers,field)=>{
    //         if(users.hasOwnProperty(field)){   
    //             newUsers[field] = users[field] ;
    //         }
    //         return newUsers;
    //     },{});
    //     return newUsers; 
    // }
    // static getUser(isAll,...fields){
    //     return fs
    //         .readFile("./database/users.json")
    //         .then(data=>{
    //             return this.#getUser(data,isAll,fields);
    //         })
    //         .catch(console.error)
    // }
    // static getUserInfo(id){
    //     //readfile 은 promise 반환 
    //     return fs
    //         .readFile("./database/users.json")
    //         .then((data)=>this.#getUserInfo(id,data))
    //         .catch(console.error);
    // }
    // static #getUserInfo(id,data){
    //     const users = JSON.parse(data)
    //     const idx = users.id.indexOf(id);
    //     const usersKeys = Object.keys(users); // => [id,psword,name]
    //     const userInfo = usersKeys.reduce((newUser,info) => {
    //         newUser[info] = users[info][idx];
    //         return newUser;
    //     }, {});
    //     return userInfo 
    // }
    // static async save(userInfo){
    //     const users = await this.getUser(true);
    //     console.log(users,'register')
    //     if(users.id.includes(userInfo.id)){ // ERROR  User => TRY{}CATCH{}
    //         throw "이미 존재하는 아이디 입니다."
    //     }
    //     users.id.push(userInfo.id);
    //     users.psword.push(userInfo.psword); 
    //     users.name.push(userInfo.name);
    //     fs.writeFile("./database/users.json",JSON.stringify(users));
    //     return {success: true}
    // }
}

module.exports = UserStorage;
