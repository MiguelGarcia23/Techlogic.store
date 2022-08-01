const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const path = require("path");
const fs = require("fs");
const db = require("../database/models");
const Op = db.Sequelize.Op;

/* Configuramos el controlador */
const usersController = {
  login: (req, res) => {
    res.render("./users/login");
  },

  processLogin: (req, res) => {

    db.Users.findOne({
      where: {
        email: req.body.email
      },
    })
      .then(user => {
        if (user) {
          if (bcrypt.compareSync(req.body.password, user.password)) {
            delete user.password;
            req.session.userLogged = user;
            if (req.body.remember_user) {
              res.cookie("email", req.body.email, { maxAge: (1000 * 60) * 60 });
            }
            res.redirect("/users/userProfile");
          } else {
            res.render("./users/login", {
              errors: {
                email: {
                  msg: "El usuario o la contraseña son incorrectos",
                },
              },
            });
          }
        } else {
          res.render("./users/login", {
            errors: {
              email: {
                msg: "El usuario no se encuentra registrado",
              },
            },
          });
        }
      })
    .catch((e) => {
        res.send(e);
      });
  },

  register: (req, res) => {
    res.render("./users/register");
  },

  processRegister: (req, res) => {
    let errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.render("users/register", {
        errors: errors.mapped(),
        oldData: req.body,
        oldImage: req.file ? req.file.filename : false,
      });
    }

    /* db.Users.findOne({
      where: {
        email: req.body.email,
      },
    })
      .then(userInDB => {
        if(userInDB) {
          res.render("users/register", {
            errors: {
              email: {
                msg: "Este email ya está registrado",
              },
            },
              oldData: req.body,
          });
        } else {
          db.Users.create({
            ...req.body,
            password: bcrypt.hashSync(req.body.password, 10),
            image: req.file.filename,
            rolId: 2,
          })
        }
      })
        .then(newUser => {
          res.send(newUser)
        })
        .catch(e => {
          res.send(e)
        })
  }, */

    let promiseUserInDB = db.Users.findOne({
      where: {
        email: req.body.email,
      },
    });

    let promiseNewUser = db.Users.create({
      ...req.body,
      password: bcrypt.hashSync(req.body.password, 10),
      image: req.file.filename,
      rolId: 2,
    });

    Promise.all([promiseUserInDB, promiseNewUser]).then(
      ([userInDB, newUser]) => {
        if (userInDB) {
          res.render("users/register", {
            errors: {
              email: {
                msg: "Este email ya está registrado",
              },
            },
            oldData: req.body,
          });
        } else {
          res.redirect("/users/login");
        }
      }
    );
  },

  profile: (req, res) => {
    res.render("./users/userProfile", { user: req.session.userLogged });
  },

  editUser: (req, res) => {
    res.render("./users/editUser", {user: req.session.userLogged});
    /* res.send(req.session.userLogged) */
  },

  processEditUser: (req, res) => {

    let user = req.session.userLogged;
    
    db.Users.update({
      id: user.id,
      name: req.body.name,
      lastName: req.body.lastName,
      email: user.email,
      password: req.body.password,
      image: req.file ? req.file.filename : user.image,
      rolId: user.rolId
    },{
      where: {
        email: user.email
      }
    })
      .then(userEdited => {
        /* res.redirect('/users/userProfile') */
        res.send(userEdited)
      })
      .catch(e => {
        res.send(e)
      })
  },

  logout: (req, res) => {
    req.session.destroy();
    res.clearCookie("email");
    return res.redirect("/");
  },
};

/* Exportamos el controlador */
module.exports = usersController;
