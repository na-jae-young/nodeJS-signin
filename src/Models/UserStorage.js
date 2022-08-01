"use strict"
//statict - UserStorage.user 로 바로 사용가능하게 해준다.
// #user  private 로 은닉화 해줄수 있다.

class UserStorage{
    static #users = {
        id:[ 'we21','nah01','cjdruf'],
        psword:[ '1234', '123', '12345'],
        name:['js','ty','node']
    }
    static getUser(...fields){
        const users = this.#users
        const newUsers = fields.reduce((newUsers,field)=>{
            if(users.hasOwnProperty(field)){   
                newUsers[field] = users[field] ;
            }
            return newUsers;
        },{});
    return newUsers; 
    }
}

module.exports = UserStorage;
