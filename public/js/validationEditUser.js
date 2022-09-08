window.onload = function() {
    let formulario = document.querySelector('#editUser-form');
    let inputImage = document.querySelector('#image');
    let inputName = document.querySelector('#name');
    let inputLastName = document.querySelector('#lastName');
    let inputPassword = document.querySelector('#password');

    let errors = [];

    formulario.addEventListener('submit', (e) => {

        /* Validar si se sube una imagen nueva y si es asi, si la imagen subida no tiene una de las extensiones */
        if(inputImage.value) {
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

        /* Validar si el input password está vacío y si la contraseña tiene al menos 8 caracteres */
        if(inputPassword.value == '') {
            errors.push('El campo contraseña está vacío')
            inputPassword.classList.add('is-invalid')
        } else if (inputPassword.value.length <= 8) {
            errors.push('La contraseña debe tener al menos 8 caracteres')
            inputPassword.classList.add('is-invalid')
        } else {
            errors.pop()
            inputPassword.classList.remove('is-invalid')
            checkboxTermsConditions.focus();
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