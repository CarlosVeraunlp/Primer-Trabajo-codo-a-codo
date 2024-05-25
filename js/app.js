/* menu hamburguesa */
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir-menu");
const cerrar = document.querySelector("#cerrar-menu");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible")
})





/* 
    Código para que cambie el color del navbar cuando se haga scroll
*/
document.addEventListener('scroll' , () => { 
    const header=document.querySelector('.navbar_bg');
    if (window.scrollY > 80) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// document.addEventListener('scroll' , () => c 
//     const header=document.querySelector('.sidebar');
//     if (window.scrollY > 80) {
//         header.classList.add('scrolled');
//     } else {
//         header.classList.remove('scrolled');
//     });

/* Inicio de Sesion - Registro */

let btnSend = document.querySelector("#btn-send");

btnSend.addEventListener('click',function(){ 
    let username = document.querySelector("#user-name");
    let password = document.querySelector("#password");
    let repeatpassword = document.querySelector("#repeatpassword");
    
    if(username.value =='') {
        document.querySelector("#error-user-name").innerHTML="Debes completar el campo Nombre de Usuario";
    }
    if(password.value =='') {
        document.querySelector("#error-password").innerHTML="Debes completar el campo Contaseña";
    }
    if(repeatpassword.value =='') {
        document.querySelector("#error-repeatpassword").innerHTML="Debes completar el campo Repita Contaseña";
    }

});




