/* Importando el módulo Express */
const express = require('express');

/* Ejecutamos la función Router de Express */
const router = express.Router();

/* Importamos el controlador admin */
const adminController = require ('../controllers/adminController');

/* Configuramos el envío a la home de admin */
router.get ('/', adminController.index);

/* Configuramos el envío a la sección de creación de productos de admin */
router.get ('/create', adminController.create);

/* Configuramos el envío a la sección de edición de productos de admin */
router.get ('/edit', adminController.edit);

/* Exportamos la variable router */
module.exports = router;