const email = document.getElementById('floatingInput')
const password = document.getElementById('floatingPassword')
const button = document.getElementsByClassName('boton')

boton.addEventListener('click', submitCheck);

/**
 * If the password and email fields are not empty, then redirect to main.html.
 */
function submitCheck() {
    if ((password.value.length > 0) && (email.value.length > 0)) {
        window.location.href ='main.html'
    } else {
        alert('fail');
    }

   /* Saving the email and password in local storage. */
    let usuario = { // creando un array usuario que contenga, el valor de input del mail y del password
        mail: document.getElementById("floatingInput").value,
        passw: document.getElementById("floatingPassword").value
    }
    
    //setea un item de nombre logueado de valor true, y verifica si estamos logueados
    // localStorage.setItem("Logueado", true);
    //estamos seteando los valores del array usuario, en JSON
    localStorage.setItem("correo", JSON.stringify(usuario));
    // return true;

}

// function redirige() {

//     window.location.href = 'main.html';
// }

// const Login = document.getElementById('formLogin')
// button.addEventListener('submit', checkForm)

// function checkForm(e){
//     let input = document.querySelectorAll('input')
//     input.forEach (i => {
//         if(i.value == ''){
//             i.classList.add('is-invalid')
//         }else{
//             i.classList.remove('is-invalid')
//         }
//     }
// )};
// window.location.href = 'main.html';  // redirige al index.html


// for(let i of input){
//     if(i.value == '')
//     return false
// }

