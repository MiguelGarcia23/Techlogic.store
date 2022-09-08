const db = require("../database/models");
const Op = db.Sequelize.Op;
const path = require("path");

const imageFilePath = path.join(__dirname, "../../public/img/products/");

const apiController = {
  allProducts: (req, res) => {

    db.Products.findAll({
      include: [{association: 'sections'}, {association: 'collections'}, {association: 'brands'}]
    }).then((products) => {

      const listProducts = [];
      
      for (const product of products) {

        let finalProduct = {
          id: product.id,
          name: product.name,
          description: product.description,
          price: product.price,
          discount: product.discount,
          inCart: product.inCart,
          deleted: product.deleted,
          section: [product.sections.sectionName],
          collection: [product.collections.collectionName],
          brand: [product.brands.brandName],
          image: product.image,
          detail: 'http://localhost:3000/api/products/' + product.id
        }

        listProducts.push(finalProduct)
      }

      const productsBySection = {};

      for (const product of listProducts) {
        
        if(productsBySection[product.section[0]] === undefined) {
          productsBySection[product.section[0]] = 1;
        } else {
          productsBySection[product.section[0]] += 1;
        }
      };

      const productsByCollection = {};

      for (const product of listProducts) {
        
        if(productsByCollection[product.collection[0]] === undefined) {
          productsByCollection[product.collection[0]] = 1;
        } else {
          productsByCollection[product.collection[0]] += 1;
        }
      }
      const productsByBrand = {};

      for (const product of listProducts) {
        
        if(productsByBrand[product.brand[0]] === undefined) {
          productsByBrand[product.brand[0]] = 1;
        } else {
          productsByBrand[product.brand[0]] += 1;
        }
      }

      res.status(200).json({
        total: listProducts.length,
        productsBySection,
        productsByCollection,
        productsByBrand,
        products: listProducts,
        status: 200,
      });
    })
    .catch((e) => {
      res.send(e)
    })
  },

  searchProductsId: (req, res) => {
    
    db.Products.findByPk(req.params.id, {
      include: [{association: 'sections'}, {association: 'collections'}, {association: 'brands'}]
    }).then((product) => {

      const finalProduct = {
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        discount: product.discount,
        inCart: product.inCart,
        deleted: product.deleted,
        section: product.sections.sectionName,
        collection: product.collections.collectionName,
        brand: product.brands.brandName,
        image: product.image
      }

      res.status(200).json({
        product: finalProduct,
        status: 200,
      })
    })
    .catch((e) => {
      res.send(e)
    })
  },

  searchProductsKey: (req, res) => {

    db.Products.findAll({
      where: {
        name: { [Op.like]: "%" + req.query.keyword + "%" },
      },
    }, {
      include: [{association: 'sections'}, {association: 'collections'}, {association: 'brands'}]
    }).then((products) => {

      const listProducts = [];
      
      for (const product of products) {

        let finalProduct = {
          id: product.id,
          name: product.name,
          description: product.description,
          price: product.price,
          discount: product.discount,
          inCart: product.inCart,
          deleted: product.deleted,
          section: [product.sections.sectionName],
          collection: [product.collections.collectionName],
          brand: [product.brands.brandName],
          image: product.image,
          detail: 'http://localhost:3000/api/products/' + product.id
        }

        listProducts.push(finalProduct)
      }

      res.status(200).json({
        total: listProducts.length,
        products: listProducts,
      })
    })
    .catch((e) => {
      res.send(e)
    })
  },

  allSections: (req, res) => {
    db.Sections.findAll()
    .then((sections) => {
      res.status(200).json({
        total: sections.length,
        sections: sections,
        status: 200
      })
    })
    .catch((e) => {
      res.send(e)
    })
  },

  allCollections: (req, res) => {
    db.Collections.findAll()
    .then((collections) => {
      res.status(200).json({
        total: collections.length,
        collections: collections,
        status: 200
      })
    })
    .catch((e) => {
      res.send(e)
    })
  },

  allBrands: (req, res) => {
    db.Brands.findAll()
    .then((brands) => {
      res.status(200).json({
        total: brands.length,
        brands: brands,
        status: 200
      })
    })
    .catch((e) => {
      res.send(e)
    })
  },

  allUsers: (req, res) => {

    db.Users.findAll({
      include: [{association: 'rols'}]
    }, {raw: true}).then((users) => {

      const listUsers = [];

      for (const user of users) {
        
        let finalUser = {
          id: user.id,
          name: user.name,
          lastName: user.lastName,
          email: user.email,
          rol: user.rols.rolName,
          image: user.image,
          detail: 'http://localhost:3000/api/users/' + user.id
        }

        listUsers.push(finalUser);
      }

      res.status(200).json({
        total: listUsers.length,
        users: listUsers,
        status: 200,
      });
      
    })
    .catch((e) => {
      res.send(e)
    })
  },

  userId: (req, res) => {

    db.Users.findByPk(req.params.id, {raw: true})
      .then((user) => {
        
        const finalUser = {
          id: user.id,
          name: user.name,
          lastName: user.lastName,
          email: user.email,
          image: user.image
        }
        
        res.status(200).json({
          user: finalUser
        })
      })
      .catch((e) => {
        res.send(e)
      })
  },
  createProduct: (req, res) => {

    db.Products.create({
      ...req.body,
      image: 'producto-predeterminado-dashboard.png',
      sectionId: req.body.section,
      collectionId: req.body.collection,
      brandId: req.body.brand,
      inCart: false,
      deleted: false
    })
      .then(() => {
        res.redirect("/products");
      })
      .catch(e => {
        res.send(e)
      })
  },
  editProduct: (req, res) => {

    db.Products.findOne({
      where: {
        id: req.params.id,
        deleted: false
      }
    })
      .then(product => {
        db.Products.update({
          id: req.params.id,
          ...req.body,
          image: req.file? req.file.filename : product.image,
          sectionId: req.body.section,
          collectionId: req.body.collection,
          brandId: req.body.brand,
          inCart: false,
          deleted: false
        },{
          where: {
            id: req.params.id
          }
        })
      })
        .then(() => {
          res.redirect("/products");
        })
        .catch(e => {
          res.send(e)
        })
  },
  deleteProduct: (req, res) => {
    db.Products.update({
      deleted: true
    },
    {
      where: {
        id: req.params.id
      }
    })
      .then(() => {
        res.redirect('/products')
      })
      .catch(e => {
        res.send(e)
      })
  },
  processLogin: (req, res) => {
    db.Users.findOne({
      where: {
        email: req.body.email,
      },
    })
      .then((user) => {
        if (user) {
          if (bcrypt.compareSync(req.body.password, user.password)) {
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
  }
};

/* Exportamos el controlador */
module.exports = apiController;
