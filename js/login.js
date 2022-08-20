const email = document.getElementById('floatingInput')
const password = document.getElementById('floatingPassword')
const button = document.getElementsByClassName('boton')

/* Adding an event listener to the button. */
boton.addEventListener('click', submitCheck);

/**
 * If the password and email fields are not empty, then redirect to main.html.
 */
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

