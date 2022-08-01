const db = require('../database/models');
const Op = db.Sequelize.Op

/* Configuramos el controlador */
const productsController = {
  index: (req, res) => {

    db.Products.findAll({
      where: {
        deleted: false
      }
    })
      .then(products => {
        res.render("./products/listProducts", {products, user: req.session.userLogged})
      })
      .catch(e => {
        res.send(e)
      })
  },

  section: (req, res) => {

    db.Sections.findAll()
      .then(sections => {
        res.render("./products/sections", {sections});
      })
      .catch(e => {
        res.send(e)
      })
  },

  productDetail: (req, res) => {

    let promiseProducts = db.Products.findByPk(req.params.id, {
      where: {
        deleted: false
      },
      include:[{association: 'sections'}]
    });
    let promiseSales = db.Products.findAll({
      where: {
        discount: {[Op.gt]: 0},
        deleted: false
      },
      limit: 3
    });

    Promise.all([promiseProducts, promiseSales])
      .then(([product, sales]) => {
        res.render("./products/productDetail", {
          product: product,
          similarProducts: sales,
          user: req.session.userLogged,
        })
      })
      .catch(e => {
        res.send(e)
      })
  },

  collections: (req, res) => {

    db.Collections.findAll()
      .then(collections => {
        res.render("./products/collections", {collections});
      })
      .catch(e => {
        res.send(e)
      })
  },

  bestSellers: (req, res) => {
    /* res.render("./products/bestSellers"); */
    res.render('./404-page')
  },

  sales: (req, res) => {
    /* res.render("./products/sales"); */
    res.render('./404-page')
  },

  /* ELIMINAMOS EL PRODUCTO DE LA LISTA DEL CARRITO Y LO DEVUELVE A LA LISTA DE PRUCTOS */
  deleteProductToCart: (req, res) => {

    db.Products.update({
      inCart: false,
    }, {
      where: { id: req.params.id }
    })
      .then(() => {
        res.redirect('/products/productCart')
      })
      .catch(e => {
        res.send(e)
      })
  },

  /* AÑADIMOS EL PRODUCTO A LA LISTA DEL CARRITO */
  addToCart: (req, res) => {

    db.Products.update({
      inCart: true,
    }, {
      where: { id: req.params.id }
    })
      .then(() => {
        res.redirect('/products/productCart')
      })
      .catch(e => {
        res.send(e)
      })
  },

  productCart: (req, res) => {

    let promiseProducts = db.Products.findAll({
      where: {
        inCart: true,
        deleted: false
      },
      include:[{association: 'sections'}]
    });
    let promiseSales = db.Products.findAll({
      where: {
        discount: {[Op.gt]: 0},
        deleted: false
      },
      limit: 3
    });

    Promise.all([promiseProducts, promiseSales])
      .then(([products, sales]) => {
        res.render("./products/productCart", {
          products,
          similarProducts: sales
        })
      })
      .catch(e => {
        res.send(e)
      })
  },

  create: (req, res) => {

    let promiseSections = db.Sections.findAll();
    let promiseCollections = db.Collections.findAll();
    let promiseBrands = db.Brands.findAll();

    Promise.all([promiseSections, promiseCollections, promiseBrands])
      .then(([sections, collections, brands]) => {
        res.render("./admin/createProduct", {
          sections,
          collections,
          brands,
          user: req.session.userLogged,
        });
      })
      .catch(e => {
        res.send(e)
      })
  },

  store: (req, res, next) => {
    
    /* Preguntado si el usuario subió una imagen. Si no lo hizo, aparece un error  */
    if (!req.file) {
      const error = new Error("Por favor seleccione un archivo");
      error.httpStatusCode = 400;
      return next(error);
    }

    db.Products.create({
      ...req.body,
      image: req.file.filename,
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

  edit: (req, res) => {

    let promiseProductToEdit = db.Products.findByPk(req.params.id, {
      where: {
        deleted: false
      }
    });
    let promiseSections = db.Sections.findAll();
    let promiseCollections = db.Collections.findAll();
    let promiseBrands = db.Brands.findAll();

    Promise.all([promiseProductToEdit, promiseSections, promiseCollections, promiseBrands])
      .then(([product, sections, collections, brands]) => {
        res.render("./admin/editProduct", {
          product,
          sections,
          collections,
          brands,
          user: req.session.userLogged,
        });
      })
      .catch(e => {
        res.send(e)
      })
  },

  update: (req, res) => {

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

  delete: (req, res) => {

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
  }
};

/* Exportamos el controlador */
module.exports = productsController;
