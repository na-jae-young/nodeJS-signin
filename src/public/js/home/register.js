"use strict"


const id = document.querySelector('#id')
const psword = document.querySelector('#psword')
const confirmPsword = document.querySelector('#confirm-psword')
const name = document.querySelector('#name')
const reisterBtn = document.querySelector('#button')
console.log('hello world',reisterBtn)

reisterBtn.addEventListener("click",register);

 function register() {  
    const req ={
        id: id.value,
        psword: psword.value,
        confirmPsword: confirmPsword.value,
        name: name.value,
    };

    fetch("/register",{
        method: "POST",
        headers: {  
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
    .then(res => res.json())
    .then(res => {
        if(res.success) {
            location.href = "/login";
            } else {
                alert(res.message);
            }
        }
        )
    .catch(err => {
        console.error("error");
    });

            
}
s
d
s
s



//ctrl + D 같은 것들 선택  Change all occurences

