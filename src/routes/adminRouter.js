/* Importando el módulo Express */
const express = require('express');

/* Ejecutamos la función Router de Express */
const router = express.Router();

/* Importamos el controlador admin */
const adminController = require ('../controllers/adminController');

/* Importamos el middleware Multer */
const multerMiddleware = require('../middlewares/multerMiddleware');

/* Configuramos el envío a la home de admin */
router.get ('/', adminController.index);

/* Configuramos el envío a la sección de creación de productos de admin */
router.get ('/create', adminController.create);

/* Configuramos la ruta de envío del formulario de creación de un producto una vez completo */
router.post ('/create', multerMiddleware.single('image') , adminController.processCreation);

/* Configuramos el envío a la sección de edición de productos de admin */
router.get ('/edit/:id', adminController.edit);

/* Exportamos la variable router */
module.exports = router;