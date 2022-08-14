/* Importando el módulo Express */
const express = require('express');

/* Ejecutamos la función Router de Express */
const router = express.Router();

/* Importamos el controlador de usuarios */
const usersController = require ('../controllers/usersController');
const validationRegister = require('../middlewares/validationRegister');
const validationEditUser = require('../middlewares/validationEditUser');
const uploadUserImage = require('../middlewares/uploadUserImage');
const authMiddleware = require('../middlewares/authMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');

/* Configuramos el envío al login */
router.get ('/login', authMiddleware, usersController.login);

/* Configuramos el procesamiento del formulario de login */
router.post ('/login', usersController.processLogin);

/* Configuramos el envío al register */
router.get ('/register', authMiddleware, usersController.register);

/* Configuramos el procesamiento del formulario de registro */
router.post ('/register', uploadUserImage.single('image'), validationRegister, usersController.processRegister);

/* Configuramos el envío al perfil del usuario */
router.get ('/userProfile', guestMiddleware, usersController.profile);

/* Configuramos el envío a la edición del usuario */
router.get ('/userProfile/edit/', usersController.editUser);

/* Configuramos el procesamiento del formulario para editar un usuario */
router.put ('/userProfile/edit/', uploadUserImage.single('image'), validationEditUser, usersController.processEditUser)

/* Configuramos el logout del usuario */
router.get ('/logout', guestMiddleware, usersController.logout);

/* Exportamos la variable router */
module.exports = router;