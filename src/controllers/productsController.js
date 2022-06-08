const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/products.json");

/* linea para escribir archivo JSON  */
/* fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " ")); */

/* Creamos un array que contenga los productos */
/* const products = [
  {
    id: 1,
    name: "iPhone 13",
    price: "$234.500,00",
    img: "iphone13.png",
    collection: "Modern",
  },

  {
    id: 2,
    name: "Mouse Logitech G603",
    price: "$6.435,00",
    img: "mouse-logi.png",
    collection: "Classic",
  },

  {
    id: 3,
    name: "Macbook Pro",
    price: "$320.000,00",
    img: "macbook-pro.png",
    collection: "Modern",
  },

  {
    id: 4,
    name: "Audífonos Beats Pro",
    price: "$48.000,00",
    img: "audifonos-beats-pro.png",
    collection: "Modern",
  },

  {
    id: 5,
    name: "iPad Air",
    price: "$79.230,00",
    img: "ipad-air.png",
    collection: "Modern",
  },

  {
    id: 6,
    name: "Playstation 5",
    price: "$61.700,00",
    img: "playstation-5.png",
    collection: "Modern",
  },

  {
    id: 7,
    name: "Teclado Logitech G213",
    price: "$5.800,00",
    img: "teclado-logitech-g213.png",
    collection: "Colorful",
  },

  {
    id: 8,
    name: "Router TP-Link TL-MR6400",
    price: "$8.020,00",
    img: "router-tplink-mr6400.png",
    collection: "Classic",
  },
]; */

/* Creamos un array que contenga los productos del carrito */
/* const cartProducts = [
  {
    name: "Mouse Logitech G603",
    price: "$6.435,00",
    img: "mouse-logi.png",
  },
  {
    name: "iPhone 13",
    price: "$234.500,00",
    img: "iphone13.png",
  },

  {
    name: "Macbook Pro",
    price: "$320.000,00",
    img: "macbook-pro.png",
  },
]; */

/* Creamos un array que contenga los productos que también le pueden interesar al usuario */
const similarProducts = [
  {
    name: "Audífonos Beats Pro",
    price: "$48.000,00",
    img: "audifonos-beats-pro.png",
  },

  {
    name: "iPad Air",
    price: "$79.230,00",
    img: "ipad-air.png",
  },

  {
    name: "Playstation 5",
    price: "$61.700,00",
    img: "playstation-5.png",
  },
];

/* Configuramos el controlador */
const productsController = {
  index: (req, res) => {
    const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    let productInStock = products.filter((product) => product.state == "stock"); // filtramos los productos que están en stock
    res.render("./products/listProducts", { products: productInStock }); // renderizamos la página con los productos
  },

  section: (req, res) => {
    res.render("./products/sectionProducts");
  },

  productDetail: (req, res) => {
    const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    let detailedProduct = products.find(
      (product) => product.id == req.params.id
    ); // buscamos el producto en el array de productos

    res.render("./products/productDetail", {
      similarProducts: similarProducts,
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
  deleteProduct: (req, res) => {
    const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    let productToEdit = products.find((product) => req.params.id == product.id);

    let productDeleted = {
      id: productToEdit.id,
      name: productToEdit.name,
      description: productToEdit.description,
      price: productToEdit.price,
      discount: productToEdit.discount,
      image: productToEdit.image,
      section: productToEdit.section,
      colection: productToEdit.collection,
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
      id: productToAdd.id,
      name: productToAdd.name,
      description: productToAdd.description,
      price: productToAdd.price,
      discount: productToAdd.discount,
      image: productToAdd.image,
      section: productToAdd.section,
      colection: productToAdd.collection,
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
    res.render("./products/productCart", {
      products: productToView,
      similarProducts: similarProducts,
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
