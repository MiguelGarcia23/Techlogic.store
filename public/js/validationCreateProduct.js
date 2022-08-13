window.onload = function() {
    let formulario = document.querySelector('#createProduct-form');
    let inputName = document.querySelector('#name');
    let selectSection = document.querySelector('#section');
    let selectCollection = document.querySelector('#collection');
    let selectBrand = document.querySelector('#brand');
    let inputPrice = document.querySelector('#price');
    let inputDiscount = document.querySelector('#discount');
    let textareaDescription = document.querySelector('#description');
    let inputImage = document.querySelector('#image');

    let errors = [];

    formulario.addEventListener('submit', (e) => {

        /* Validar si el input name está vacío y si el nombre tiene al menos 5 caracteres */
        if(inputName.value == '') {
            errors.push('El campo nombre está vacío')
            inputName.classList.add('is-invalid')
        } else if (inputName.value.length <= 5) {
            errors.push('El nombre debe tener al menos 5 caracteres')
            inputName.classList.add('is-invalid')
        } else {
            inputName.classList.remove('is-invalid')
            selectSection.focus();
        }

        /* Validar si se seleccionó una sección */
        if(!selectSection.value) {
            errors.push('Debe elegirse una sección')
            selectSection.classList.add('is-invalid')
        } else {
            selectSection.classList.remove('is-invalid')
            selectCollection.focus();
        }

        /* Validar si se seleccionó una colección */
        if(!selectCollection.value) {
            errors.push('Debe elegirse una colección')
            selectCollection.classList.add('is-invalid')
        } else {
            selectCollection.classList.remove('is-invalid')
            selectBrand.focus();
        }

        /* Validar si se seleccionó una marca */
        if(!selectBrand.value) {
            errors.push('Debe elegirse una marca')
            selectBrand.classList.add('is-invalid')
        } else {
            selectBrand.classList.remove('is-invalid')
            inputPrice.focus();
        }

        /* Validar si el input price está vacío */
        if(inputPrice.value == '') {
            errors.push('El campo precio está vacío')
            inputPrice.classList.add('is-invalid')
        } else {
            inputPrice.classList.remove('is-invalid')
            inputDiscount.focus();
        }

        /* Validar si el textarea description está vacío */
        if(textareaDescription.value == '') {
            errors.push('El campo descripción está vacío')
            textareaDescription.classList.add('is-invalid')
        } else if (textareaDescription.value.length <= 20) {
            errors.push('La descripción debe tener al menos 20 caracteres')
            textareaDescription.classList.add('is-invalid')
        } else {
            textareaDescription.classList.remove('is-invalid')
            inputImage.focus();
        }

        /* Extensiones válidas al subir una imagen */
        let acceptedExtensions = ['.jpg', '.jpeg' ,'.png', '.gif'];

        /* Validar si la imagen subida no tiene una de las extensiones */
        if(!new RegExp('(' + acceptedExtensions.join('|').replace(/\./g, '\\.') + ')$').test(inputImage.value)) {
            errors.push(`Debes subir una imagen con alguna de las extensiones permitidas: ${acceptedExtensions.join(', ')}`);
            inputImage.classList.add('is-invalid');
        } else {
            inputImage.classList.remove('is-invalid');
            inputName.focus();
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