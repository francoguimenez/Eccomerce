const email = document.getElementById('floatingInput')
const password = document.getElementById('floatingPassword')
const button = document.getElementsByClassName('boton')

boton.addEventListener('click', submitCheck);

function submitCheck() {
    if ((password.value.length > 0) && (email.value.length > 0)) {
        redirige()
    } else {
        alert('fail');
    }
    
}
function redirige() {
    window.location.href = 'main.html';
}

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

