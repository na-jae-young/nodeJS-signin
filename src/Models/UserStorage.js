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
    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); // => [id,psword,name]
        const userInfo = usersKeys.reduce((newUser,info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        return userInfo
    }
}

module.exports = UserStorage;
