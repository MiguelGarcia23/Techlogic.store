/* Importando el módulo Express */
const express = require('express');

/* Ejecutamos la función Router de Express */
const router = express.Router();

/* Importamos el controlador de usuarios */
const usersController = require ('../controllers/usersController');
const validationResultUser = require('../middlewares/validationResult');
const uploadUserImage = require('../middlewares/uploadUserImage');
const authMiddleware = require('../middlewares/authMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');

/* Configuramos el envío al login */
router.get ('/login', guestMiddleware, usersController.login);

/* Configuramos el procesamiento del formulario de login */
router.post ('/login', usersController.processLogin);

/* Configuramos el envío al register */
router.get ('/register', guestMiddleware, usersController.register);

/* Configuramos el procesamiento del formulario de registro */
router.post ('/register',uploadUserImage.single('image'), validationResultUser, usersController.processRegister);

/* Configuramos el envío al perfil del usuario */
router.get ('/profile', authMiddleware, usersController.profile);

/* Configuramos el envío al historial de compras del usuario */
router.get ('/profile/purchases', usersController.purchases);

/* Exportamos la variable router */
module.exports = router;