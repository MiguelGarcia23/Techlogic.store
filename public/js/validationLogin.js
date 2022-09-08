window.onload = function() {
    let formulario = document.querySelector('#login-form');
    let inputEmail = document.querySelector('#email');
    let inputPassword = document.querySelector('#password');

    let errors = [];

    formulario.addEventListener('submit', (e) => {

        /* Validar si el input email está vacío y si el email es válido */
        let regEmail = /\S+@\S+\.\S+/;

        if(inputEmail.value == '') {
            errors.push('El campo email está vacío')
            inputEmail.classList.add('is-invalid')
        } else if (!regEmail.test(email.value)) {
            errors.push("Debe ingresar un email válido");
            email.classList.add("is-invalid");
        } else {
            errors.pop()
            inputEmail.classList.remove('is-invalid')
            inputPassword.focus();
        }

        /* Validar si el input password está vacío y si la contraseña tiene al menos 8 caracteres */
        if(inputPassword.value == '') {
            errors.push('El campo contraseña está vacío')
            inputPassword.classList.add('is-invalid')
        } else {
            errors.pop()
            inputPassword.classList.remove('is-invalid')
        }

        /* Controlamos si hay errores */
        if (errors.length > 0) {
            e.preventDefault();
            let ulErrors = document.querySelector('.errors-frontEnd');
            ulErrors.classList.add('alert-warning');
            ulErrors.innerHTML = '';

            for (let i = 0; i < errors.length; i++) {
                ulErrors.innerHTML += '<li>' + errors[i] + '</li>'   
            }
        } else {
            formulario.submit();
        }
    })
}