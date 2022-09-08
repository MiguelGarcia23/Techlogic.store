window.onload = function() {
    let formulario = document.querySelector('#register-form');
    let inputImage = document.querySelector('#image');
    let inputName = document.querySelector('#name');
    let inputLastName = document.querySelector('#lastName');
    let inputEmail = document.querySelector('#email');
    let inputPassword = document.querySelector('#password');
    let checkboxTermsConditions = document.querySelector('#terms-conditions');

    let errors = [];

    formulario.addEventListener('submit', (e) => {

        /* Extensiones válidas al subir una imagen */
        let acceptedExtensions = ['.jpg', '.jpeg' ,'.png', '.gif'];

        /* Validar si la imagen subida no tiene una de las extensiones */
        if(!new RegExp('(' + acceptedExtensions.join('|').replace(/\./g, '\\.') + ')$').test(inputImage.value)) {
            errors.push(`Debes subir una imagen con alguna de las extensiones permitidas: ${acceptedExtensions.join(', ')}`);
            inputImage.classList.add('is-invalid');
        } else {
            errors.pop()
            inputImage.classList.remove('is-invalid');
            inputName.focus();
        }

        /* Validar si el input name está vacío y si el nombre tiene al menos 2 caracteres */
        if(inputName.value == '') {
            errors.push('El campo nombre está vacío')
            inputName.classList.add('is-invalid')
        } else if (inputName.value.length <= 2) {
            errors.push('El nombre debe tener al menos 2 caracteres')
            inputName.classList.add('is-invalid')
        } else {
            errors.pop()
            inputName.classList.remove('is-invalid')
            inputLastName.focus();
        }

        /* Validar si el input lastName está vacío y si el apellido tiene al menos 2 caracteres */
        if(inputLastName.value == '') {
            errors.push('El campo apellido está vacío')
            inputLastName.classList.add('is-invalid')
        } else if (inputLastName.value.length <= 2) {
            errors.push('El apellido debe tener al menos 2 caracteres')
            inputLastName.classList.add('is-invalid')
        } else {
            errors.pop()
            inputLastName.classList.remove('is-invalid')
            inputEmail.focus();
        }

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
        } else if (inputPassword.value.length <= 6) {
            errors.push('La contraseña debe tener al menos 6 caracteres')
            inputPassword.classList.add('is-invalid')
        } else {
            errors.pop()
            inputPassword.classList.remove('is-invalid')
            checkboxTermsConditions.focus();
        }

        /* Validar si los términos y condiciones fueron aceptados */
        if(!checkboxTermsConditions.checked) {
            errors.push('Los términos y condiciones deben ser aceptados')
        }

        /* Controlamos si hay errores */
        if (errors.length > 0) {
            e.preventDefault();
            let ulErrors = document.querySelector('.errors-frontEnd');
            ulErrors.classList.add('alert-warning');
            ulErrors.innerHTML = ""
            for (let i = 0; i < errors.length; i++) {
                ulErrors.innerHTML += '<li>' + errors[i] + '</li>'   
            }
        } else {
            formulario.submit();
        }
    })
}

