const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/products.json");

/* Configuramos el controlador */
const productsController = {
  index: (req, res) => {
    const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    let productInStock = products.filter((product) => product.state !== "cart" && product.deleted == false) // filtramos los productos que están en stock
    res.render("./products/listProducts", { products: productInStock, user: req.session.userLogged}); // renderizamos la página con los productos
  },


  section: (req, res) => {
    res.render("./products/sectionProducts");
  },

  productDetail: (req, res) => {
    const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    let productInOfert = products.filter((product) => product.state == "ofert" && product.deleted == false)
    let detailedProduct = products.find(
      (product) => product.id == req.params.id
    ); // buscamos el producto en el array de productos

    res.render("./products/productDetail", {
      similarProducts: productInOfert,
      product: detailedProduct,
      user: req.session.userLogged,
    });
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
    const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    let productToEdit = products.find((product) => req.params.id == product.id);

    let productDeleted = {
      ... productToEdit,
      state: "stock",
    };

    let indexRestored = products.findIndex(
      (product) => product.id == req.params.id
    );
    products[indexRestored] = productDeleted;

    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
    res.redirect("/products/productCart");
  },

  /* AÑADIMOS EL PRODUCTO A LA LISTA DEL CARRITO */
  addToCart: (req, res) => {
    const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    let productToAdd = products.find((product) => req.params.id == product.id); // Buscamos el producto en el array de productos

    /* CAMBIO EL ESTADO DEL PRODUCTO A 'CART' */
    let productAdded = {
     ... productToAdd,
      state: "cart",
    };
    
    /* REEMPLAZO EL PRODUCTO*/
    let productInStock = products.findIndex(
      (product) => product.id == req.params.id
    );
    products[productInStock] = productAdded;

    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " ")); // GUARDO EL ARRAY DE PRODUCTOS CON ESTADO 'CART' EN ARCHIVO JSON
    res.redirect("/products/"); // REDIRECCIONO AL LISTADO DE PRODUCTOS
  },

  productCart: (req, res) => {
    const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    let productToView = products.filter((product) => product.state == "cart"); // FILTRO LOS PRODUCTOS CON ESTADO 'CART'
    let productInOfert = products.filter((product) => product.state == "ofert" && product.deleted == false)
    res.render("./products/productCart", {
      products: productToView,
      similarProducts: productInOfert,
    }); // MANDO LOS PRODUCTOS CON ESTADO 'CART' A LA VISTA
  },

  create: (req, res) => {
    let userLoggedAdmin = req.session.userLogged;

    if (userLoggedAdmin && userLoggedAdmin.rol == "admin") {
      // si el usuario está logueado y es admin
      res.render("./admin/createProduct", {
        // renderizamos la página de creación de productos
        user: req.session.userLogged,
      });
    } else {
      res.redirect("/users/login"); // si no está logueado, redirigimos al login
    }
  },

  store: (req, res, next) => {
    /* Leyendo el JSON */
    const productsFile = fs.readFileSync(productsFilePath, "utf-8");

    /* Estableciendo una variable que será el array de todos los productos los productos */
    let products;

    /* Preguntar si hay algun producto. Si no lo hay, que cree un array que los almacene, si sí hay productos, que transforme el JSON a un array */
    if (products == "") {
      products = [];
    } else {
      products = JSON.parse(productsFile);
    }

    /* Configurando la información del nuevo producto con lo que llenó la persona en el formulario */
    let newProduct = {
      id: products[products.length - 1].id + 1,
      ...req.body,
      description: req.body.description,
      price: req.body.price,
      discount: req.body.discount,
      state: "stock",
    };

    /* Preguntado si el usuario subió una imagen. Si no lo hizo, aparece un error  */
    if (!req.file) {
      const error = new Error("Por favor seleccione un archivo");
      error.httpStatusCode = 400;
      return next(error);
    } else {
      newProduct.image = req.file.filename;
    }

    /* Agregando el nuevo producto al array de productos */
    products.push(newProduct);

    /* Convirtiendo el array a un JSON y reescribiendo el JSON con los nuevos productos */
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));

    /* Redirigiendo a la lista de productos luego de enviar el formulario */
    res.redirect("/products/");
  },

  edit: (req, res) => {

    let userLoggedAdmin = req.session.userLogged;

    if (userLoggedAdmin && userLoggedAdmin.rol == "admin") {// Si el usuario está logueado y es admin

      const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
      let productToEdit = products.find((product) => req.params.id == product.id );

      res.render("admin/editProduct", { // Renderiza la vista de editar producto
        product: productToEdit,
        user: req.session.userLogged,
      });
    } else {
      res.redirect("/users/login"); // Si no, redirige a la página de login
    }
  },

  update: (req, res) => {
    /* Leyendo el JSON y convirtiéndolo en un array */
    const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

    /* Encontrando el producto seleccionado por el usuario */
    let productToEdit = products.find((product) => product.id == req.params.id);

    /* Configurando la nueva info del producto luego de los cambios del usuario */
    productToEdit.id = req.params.id;
    productToEdit.name = req.body.name;
    productToEdit.section = req.body.section;
    productToEdit.collection = req.body.collection;
    productToEdit.brand = req.body.brand;
    productToEdit.state = req.body.state;
    productToEdit.description = req.body.description;
    productToEdit.price = req.body.price;
    productToEdit.discount = req.body.discount;
    productToEdit.image = req.file ? req.file.filename : productToEdit.image;

    /* Encontrando el index del producto editado para no tener que reescribir todo el JSON, sólo el producto editado */
    let indexProductEdited = products.findIndex(
      (product) => product.id == req.params.id
    );

    /* Cambiando la info del producto anterior por la nueva agregada por el usuario */
    products[indexProductEdited] = productToEdit;

    /* Convirtiendo el array a un JSON y reescribiendo el JSON con los nuevos productos */
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));

    /* Redirigiendo a la lista de productos luego de enviar el formulario */
    res.redirect("/products/", { user: req.session.userLogged });
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
