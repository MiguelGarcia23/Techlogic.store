const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/products.json");

/* Configuramos el controlador */
const productsController = {
  index: (req, res) => {
    const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    let productInStock = products.filter((product) => product.state !== "cart" ) // filtramos los productos que están en stock
    res.render("./products/listProducts", { products: productInStock }); // renderizamos la página con los productos
  },


  section: (req, res) => {
    res.render("./products/sectionProducts");
  },

  productDetail: (req, res) => {
    const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    let productInOfert = products.filter((product) => product.state == "ofert" )
    let detailedProduct = products.find(
      (product) => product.id == req.params.id
    ); // buscamos el producto en el array de productos

    res.render("./products/productDetail", {
      similarProducts: productInOfert,
      product: detailedProduct,
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
    let productInOfert = products.filter((product) => product.state == "ofert" )
    res.render("./products/productCart", {
      products: productToView,
      similarProducts: productInOfert,
    }); // MANDO LOS PRODUCTOS CON ESTADO 'CART' A LA VISTA
  },

  editProduct: (req, res) => {
    const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    let productToEdit = products.filter((product) => req.params.id == product.id); // Buscamos el producto en el array de productos

    res.render("admin/editProduct", {product: productToEdit});
  }
};

/* Exportamos el controlador */
module.exports = productsController;
