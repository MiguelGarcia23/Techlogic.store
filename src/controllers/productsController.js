const fs = require("fs");
const path = require("path");
const db = require('../database/models');
const Op = db.Sequelize.Op

const productsFilePath = path.join(__dirname, "../data/products.json");

/* Configuramos el controlador */
const productsController = {
  index: (req, res) => {

    db.Products.findAll()
      .then(products => {
        res.render("./products/listProducts", { products, user: req.session.userLogged})
      })
      .catch(e => {
        res.send(e)
      })
  },

  section: (req, res) => {
    res.render("./products/sectionProducts");
  },

  productDetail: (req, res) => {

    let promiseProducts = db.Products.findByPk(req.params.id, {include:[{association: 'sections'}]});
    let promiseSales = db.Products.findAll({
      where: {
        discount: {[Op.gt]: 0}
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
    res.render("./products/collections");
  },

  bestSellers: (req, res) => {
    res.render("./products/bestSellers");
  },

  sales: (req, res) => {
    res.render("./products/sales");
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
        inCart: true
      },
      include:[{association: 'sections'}]
    });
    let promiseSales = db.Products.findAll({
      where: {
        discount: {[Op.gt]: 0}
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

    let promiseProductToEdit = db.Products.findByPk(req.params.id);
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

    db.Products.update({
      id: req.params.id,
      ...req.body,
      image: req.file.filename,
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
      .then(() => {
        res.redirect("/products");
      })
      .catch(e => {
        res.send(e)
      })
  },

  delete: (req, res) => {
    /* Leyendo el JSON y convirtiéndolo en un array */
    let products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

    /* Encontrando el producto seleccionado por el usuario */
    let productToDelete = products.find((product) => product.id == req.params.id);

    /* Eliminando el producto cambiando la propiedad deleted a true */
    productToDelete.deleted = true;

    /* Encontrando el index del producto eliminado para no tener que reescribir todo el JSON, sólo el producto eliminado */
    let indexProductEdited = products.findIndex(
      (product) => product.id == req.params.id
    );

    /* Cambiando el valor de la propiedad deleted */
    products[indexProductEdited] = productToDelete;

    /* Convirtiendo el array a un JSON y reescribiendo el JSON con el cambio en el producto eliminado */
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));

    /* Redirigiendo a la lista de productos luego de enviar el formulario */
    res.redirect("/products");
  }
};

/* Exportamos el controlador */
module.exports = productsController;
