const User = require("../models/User");
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

/* Configuramos el controlador */
const usersController = {
    
    login: (req, res) => {
        res.render('./users/login')
    },

    processLogin: (req, res) => {
        res.render('/users/userProfile')
    },
    
    register: (req, res) => {
        res.render('./users/register')
    },

    processRegister: (req, res) => {

        let errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.render('users/register', {
                errors: errors.mapped(),
                oldData: req.body,
                oldImage: req.file ? req.file.filename : false
            })
        }

        let userInDB = User.getByEmail(req.body.email);

        if (userInDB) {
            res.render('users/register', {
                errors: {
                    email: {
                        msg: 'Este email ya está registrado'
                    }
                },
                oldData: req.body
            })
        }

        let newUser = {
            ...req.body,
            password: bcrypt.hashSync(req.body.password, 10),
            image: req.file.filename,
            rol: req.body.rol
        }

        let userCreated = User.create(newUser);

        res.redirect('/users/login')
    },

    profile: (req, res) => {
        res.render('./users/userProfile')
    },

    purchases: (req, res) => {
        res.render('./users/userPurchases')
    }
}

/* Exportamos el controlador */
module.exports = usersController;