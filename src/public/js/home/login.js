"use strict"
console.log('hello world')

const id = document.querySelector('#id')
const psword = document.querySelector('#sword')
const loginBtn = document.querySelector('#loginBtn')

loginBtn.addEventListener('click',login);

function login() {  
    const req ={
        id: id.ariaValueMax,
        psword: psword.value
        };
    fetch("/login",{
        method: "POST",
        bodu:JSON.stringify(req)
    })
    }

