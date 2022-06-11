const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({// Configuración de Multer
	destination: (req, file, cb) => { 
		cb(null, './public/img/users'); 
	},
	filename: (req, file, cb) => {
		let fileName = `user-${Date.now()}${path.extname(file.originalname)}`; // nombre del archivo
		cb(null, fileName); // devuelve el nombre del archivo
	}
})

const uploadFile = multer({ storage }); // Inicialización de Multer

module.exports = uploadFile;