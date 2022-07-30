/* let errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.render("users/register", {
        errors: errors.mapped(),
        oldData: req.body,
        oldImage: req.file ? req.file.filename : false,
      });
    } */

    /* let promiseUserInDB = db.Users.findOne({ 
      where: {
        email: req.body.email
      }
    });

    let promiseNewUser = db.Users.create({
      ...req.body,
      lastName: "soy el apellido",
      password: bcrypt.hashSync(req.body.password, 10),
      image: req.file.filename,
      rol: req.body.rol,
    });

    Promise.all([promiseUserInDB, promiseNewUser])
      .then(([userInDB, newUser]) => {
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
          
        }
      }) */

      /* db.Users.findOne({ 
        where: {
          email: req.body.email
        }
      })
        .then(user => {
          res.send(user)
        })
        .catch(e => {
          res.send(e)
        }) */

        db.Users.findAll(/* {
            where: {
              email: req.body.email,
            },
          } */)
          .then((users) => {
            res.send(users);
          }
          )
          .catch((error) => {
            res.send(error);
          });
  
          /* db.Users.findAll
            .then(() => {
              res.redirect('/')
            })
            .catch(e => {
              res.send(e)
            }) */
  
         
          /* .then(user => {
            if(user) {
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
                lastName: "soy el apellido",
                password: bcrypt.hashSync(req.body.password, 10),
                image: req.file.filename,
                rol: req.body.rol,
              });
            }
          })
          .then(() => {
            res.redirect("/users/login");
          })
          .catch(e => {
            res.send(e)
          }) */
          /* .then(user => {
            res.send(user)
          }) */
      /* let userInDB = User.getByEmail(req.body.email); */
  
      /* if (userInDB) {
        res.render("users/register", {
          errors: {
            email: {
              msg: "Este email ya está registrado",
            },
          },
          oldData: req.body,
        });
      } */
  
      /* let newUser = {
        ...req.body,
        password: bcrypt.hashSync(req.body.password, 10),
        image: req.file.filename,
        rol: req.body.rol,
      };
  
      let userCreated = User.create(newUser);
  
      res.redirect("/users/login"); */
  
      /* db.Users.create({
        ...req.body,
        password: bcrypt.hashSync(req.body.password, 10),
        image: req.file.filename,
        rolId: req.body.rol,
      })
        .then(() => {
          res.redirect('/users/login')
        })
        .catch(e => {
          res.send(e)
        }) */