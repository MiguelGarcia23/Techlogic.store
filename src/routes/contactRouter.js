/* Importando el módulo Express */
const express = require('express');

/* Ejecutamos la función Router de Express */
const router = express.Router();

/* Importamos el controlador de contacto */
const contactController = require ('../controllers/contactController');

/* Configuramos el envío a la sección acerca de nosotros */
router.get ('/aboutUs', contactController.aboutUs);

/* Configuramos el envío a la sección de métodos de pago */
router.get ('/payment', contactController.payment);

/* Configuramos el envío a la sección de preguntas frecuentes */
router.get ('/questions', contactController.questions);

/* Configuramos el envío a la sección de soporte al cliente */
router.get ('/info', contactController.info);

/* Exportamos la variable router */
module.exports = router;