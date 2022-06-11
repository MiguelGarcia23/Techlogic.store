/* Importando el módulo Express */
const express = require('express');

/* Ejecutamos la función Router de Express */
const router = express.Router();

/* Importamos el controlador admin */
const adminController = require ('../controllers/adminController');

/* Importamos el middleware Multer */
const multerMiddleware = require('../middlewares/uploadProductImage');

/* Configuramos el envío a la home de admin */
router.get ('/', adminController.index);

/* Configuramos el envío a la sección de creación de productos de admin */
router.get ('/create', adminController.create);

/* Configuramos la ruta de envío del formulario de creación de un producto una vez completo */
router.post ('/create', multerMiddleware.single('image') , adminController.store);

/* Configuramos el envío a la sección de edición de productos de admin */
router.get ('/edit/:id', adminController.edit);

/* Configuramos la ruta de envío del formulario de edición de un producto una vez completo */
router.put ('/edit/:id', multerMiddleware.single('image') , adminController.update);

/* Configuramos la ruta para eliminar un producto */
router.delete ('/delete/:id', adminController.delete);

/* Exportamos la variable router */
module.exports = router;