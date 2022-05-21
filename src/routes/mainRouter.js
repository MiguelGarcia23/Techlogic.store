/* Importando el módulo Express */
const express = require('express');

/* Ejecutamos la función Router de Express */
const router = express.Router();

/* Importamos el controlador principal */
const mainController = require ('../controllers/mainController');

/* Configuramos el envío a la home */
router.get ('/', mainController.index);

/* Exportamos la variable router */
module.exports = router;