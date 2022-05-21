/* Importando el módulo Express */
const express = require('express');

/* Ejecutamos la función Router de Express */
const router = express.Router();

/* Importamos el controlador de usuarios */
const usersController = require ('../controllers/usersController');

/* Configuramos el envío al login */
router.get ('/login', usersController.login);

/* Configuramos el envío al register */
router.get ('/register', usersController.register);

/* Configuramos el envío al perfil del usuario */
router.get ('/profile', usersController.profile);

/* Configuramos el envío al historial de compras del usuario */
router.get ('/profile/purchases', usersController.purchases);

/* Exportamos la variable router */
module.exports = router;