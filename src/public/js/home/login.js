"use strict"


const id = document.querySelector('#id')
const psword = document.querySelector('#psword')
const loginBtn = document.querySelector('#button')


loginBtn.addEventListener("click",login);

 function login() { 
    if(!id.value) return alert('Please enter your ID')
    if(!psword.value) return alert('Please enter    your password')

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
                if(res.err) return alert('error 관리자에 문의 : 1')
                alert(res.message);
            }
        }
        )
    .catch(err => {
        console.error("error");
    });

            
}

