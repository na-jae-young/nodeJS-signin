"use strict"

//await  는 항상 promise를 반환하는 애 앞에 , async(비동기) 함수 안에서 사용된다. 
const UserStorage = require("./UserStorage")
class User {
    constructor(body){
        this.body = body
        this.user = new UserStorage(body)

    }
    async login(){
        const body = this.body
        const {id,psword} = await UserStorage.getUserInfo(body.id)
        if(id){
            if(id === body.id && psword === body.psword){
                return {success: true}
            }
            return {success: false , message: 'Login failed : password error'};
        }
        return {success: false,message: 'Login failed : id error'};
    }

    async register(){
        const client = this.body
        try{
            const response = await UserStorage.save(client);
            return response;
        }catch(err){
            return {success: false,message: err}
        }
     }
}
module.exports = User