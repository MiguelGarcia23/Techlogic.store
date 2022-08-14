const path = require('path');
const { body } = require('express-validator');

let validations = [ // Validación de registro
	body('name')
		.notEmpty().withMessage('Tienes que escribir un nombre').bail() // Validación de nombre 
		.isLength({min: 2}).withMessage('El nombre debe tener al menos 2 caracteres'), // Extensión del nombre
	body('lastName')
		.notEmpty().withMessage('Tienes que escribir un apellido').bail() // Validación de apellido 
		.isLength({min: 2}).withMessage('El apellido debe tener al menos 2 caracteres'), // Extensión del apellido
	body('email')
		.notEmpty().withMessage('Tienes que escribir un correo electrónico').bail() // Validación de email (no vacío) y si hay error, no seguir con las validaciones de la siguiente función
		.isEmail().withMessage('Debes escribir un formato de correo válido'), // Validación de email válido (isEmail)
	body('password')
		.notEmpty().withMessage('Tienes que escribir una contraseña').bail() // Validación de contraseña 
		.isLength({min: 8}).withMessage('La contraseña debe tener al menos 8 caracteres'), // Extensión de la contraseña
	body('termsConditions').notEmpty().withMessage('Tienes que aceptar los términos y condiciones'), // Validación de términos y condiciones
	body('image').custom((value, { req }) => { // Validación de imagen 
		let file = req.file; // obtener el archivo de la imagen
		let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif']; 

		if (!file) {	// si no se subió ninguna imagen  
			throw new Error('Tienes que subir una imagen'); // lanzar un error
		} else { // Si se sube una imagen
			let fileExtension = path.extname(file.originalname); // obtener la extensión del archivo
			if (!acceptedExtensions.includes(fileExtension)) { // si la extensión no es válida
				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`); // Muestra las extensiones permitidas
			}
		}

		return true; // Si todo es correcto, devuelve true
	})
]

module.exports = validations;