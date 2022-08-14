const path = require('path');
const { body } = require('express-validator');

let validations = [ // Validación de registro
	body('name')
		.notEmpty().withMessage('Tienes que escribir un nombre').bail() // Validación de nombre 
		.isLength({min: 5}).withMessage('El nombre debe tener al menos 5 caracteres'), // Extensión del nombre
	body('section')
		.notEmpty().withMessage('Tienes que elegir una sección'), // Validación de sección 
	body('collection')
		.notEmpty().withMessage('Tienes que elegir una colección'), // Validación de colección 
	body('brand')
		.notEmpty().withMessage('Tienes que elegir una marca'), // Validación de marca 
	body('price')
		.notEmpty().withMessage('Tienes que escribir un precio'), // Validación de precio 
	body('description')
		.notEmpty().withMessage('Tienes que escribir una descripción').bail() // Validación de descripción 
		.isLength({min: 20}).withMessage('La descripción debe tener al menos 20 caracteres'), // Extensión del nombre
	body('image').custom((value, { req }) => { // Validación de imagen 
		let file = req.file; // obtener el archivo de la imagen
		let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif']; 

		if (file) { // Si se sube una imagen
			let fileExtension = path.extname(file.originalname); // obtener la extensión del archivo
			if (!acceptedExtensions.includes(fileExtension)) { // si la extensión no es válida
				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`); // Muestra las extensiones permitidas
			}
		}

		return true; // Si todo es correcto, devuelve true
	})
]

module.exports = validations;