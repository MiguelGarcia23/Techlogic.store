const path = require('path');
const { body } = require('express-validator');

let validations = [ // Validación de registro
	body('name')
		.notEmpty().withMessage('Tienes que escribir un nombre').bail() // Validación de nombre 
		.isLength({min: 2}).withMessage('El nombre debe tener al menos 2 caracteres'), // Extensión del nombre
	body('lastName')
		.notEmpty().withMessage('Tienes que escribir un apellido').bail() // Validación de apellido 
		.isLength({min: 2}).withMessage('El apellido debe tener al menos 2 caracteres'), // Extensión del apellido
	body('password')
		.notEmpty().withMessage('Tienes que escribir una contraseña').bail() // Validación de contraseña 
		.isLength({min: 8}).withMessage('La contraseña debe tener al menos 8 caracteres'), // Extensión de la contraseña
	body('image').custom((value, { req }) => { // Validación de imagen 
		let file = req.file; // obtener el archivo de la imagen
		let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif']; 

        if (file) {
			let fileExtension = path.extname(file.originalname); // obtener la extensión del archivo
			if (!acceptedExtensions.includes(fileExtension)) { // si la extensión no es válida
				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`); // Muestra las extensiones permitidas
			}
		}

		return true; // Si todo es correcto, devuelve true
	})
]

module.exports = validations;