"use strict"


const id = document.querySelector('#id')
const psword = document.querySelector('#psword')
const loginBtn = document.querySelector('#loginBtn')
console.log('hello world',loginBtn)

loginBtn.addEventListener("click",login);

 function login() {  
    const req ={
        id: id.value,
        psword: psword.value
        };

    fetch("/login",{
        method: "POST",
        headers: {  
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
    .then(res => res.json())
    .then(res => {
        if(res.success) {
            location.href = "/";
            } else {
                console.log(res.message);
                alert(res.message);
            }
        }
        )
    .catch(err => {
        console.error("error");
    });

            
}

