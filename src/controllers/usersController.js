const User = require("../model/User");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const path = require("path");
const fs = require("fs");

const fileUsers = path.join(__dirname, "../data/users.json");

/* Configuramos el controlador */
const usersController = {
  login: (req, res) => {
    res.render("./users/login");
  },

  processLogin: (req, res) => {
    
    const usersFile =  JSON.parse(fs.readFileSync(fileUsers, "utf-8"))
   
    let userToLogin = usersFile.find((user) => user.email == req.body.email);
    
    if (userToLogin) {
      
      let passwordIsOk = bcrypt.compareSync(req.body.password, userToLogin.password);
      if (passwordIsOk) {

        delete userToLogin.password;
        req.session.userLogged = userToLogin;
        console.log(req.session.userLogged);

        if (req.body.remember_user) {
            res.cookie("email", req.body.email, { maxAge: (1000 * 60) * 60 });
        }

        res.redirect("./userProfile");
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

    let userInDB = User.getByEmail(req.body.email);

    if (userInDB) {
      res.render("users/register", {
        errors: {
          email: {
            msg: "Este email ya está registrado",
          },
        },
        oldData: req.body,
      });
    }

    let newUser = {
      ...req.body,
      password: bcrypt.hashSync(req.body.password, 10),
      image: req.file.filename,
      rol: req.body.rol,
    };

    let userCreated = User.create(newUser);

    res.redirect("/users/login");
  },

  profile: (req, res) => {
    res.render("./users/userProfile", { user: req.session.userLogged });
  },

  purchases: (req, res) => {
    res.render("./users/userPurchases");
  },
  logout: (req, res) => {

    req.session.destroy();
    res.clearCookie('email');
   /*  res.clearCookie('connect.sid'); */
    return res.redirect("/");
  }
};

/* Exportamos el controlador */
module.exports = usersController;
