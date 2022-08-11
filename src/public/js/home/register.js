"use strict"


const id = document.querySelector('#id')
const psword = document.querySelector('#psword')
const confirmPsword = document.querySelector('#confirm-psword')
const name = document.querySelector('#name')
const reisterBtn = document.querySelector('#button')


reisterBtn.addEventListener("click",register);

 function register() {  
    if(!id.value) return alert('id error id없음');
    if(psword.value !== confirmPsword.value) return alert('password error 비밀번호 확인');

    const req ={
        id: id.value,
        psword: psword.value,
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
                if(res.err)return alert(`error 관리자에게 문의 : 2 ${res.err}`)
                alert(res.message);
            }
        }
        )
    .catch(err => {
        console.error("error");
    });       
}




//ctrl + D 같은 것들 선택  Change all occurences

