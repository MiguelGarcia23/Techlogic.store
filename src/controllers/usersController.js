const User = require("../model/User");
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

/* Configuramos el controlador */
const usersController = {
    
    login: (req, res) => {
        res.render('./users/login')
    },

    processLogin: (req, res) => {

        let userToLogin = User.getByEmail(req.body.email);

        if(userToLogin) {

            /* let passwordIsOkay = bcrypt.compareSync(req.body.password, userToLogin.password); */

            /* if (passwordIsOkay) { */
            if (req.body.password == userToLogin.password) {
                delete userToLogin.password;

                req.session.userLogged = userToLogin;

                if(req.body.remember_user) {
					res.cookie('userEmail', req.body.email, {maxAge: (1000 * 60) * 5})
				}

                res.redirect('/users/profile');
            }

            res.render('./users/login', {
                errors: {
                    email: {
                        msg: 'Las credenciales son inválidas'
                    }
                }
            })
            
        }

        res.render('./users/login', {
            errors: {
                email: {
                    msg: 'El usuario no está registrado en nuestra base de datos'
                }
            }
        })
        
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