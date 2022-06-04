const fs = require("fs");
const path = require("path");

const productsCartFilePath = path.join(__dirname, "../data/productsCart.json");
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
    const products = JSON.parse(
      fs.readFileSync(productsFilePath, "utf-8")
    );
    res.render("./products/listProducts", { products: products });
  },

  section: (req, res) => {
    res.render("./products/sectionProducts");
  },

  productDetail: (req, res) => {
    const products = JSON.parse(
      fs.readFileSync(productsFilePath, "utf-8")
    );
    let detailedProduct = products.find(
      (product) => product.id == req.params.id
    );

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

  deleteProduct: (req, res) => {
    const productsOnCart = JSON.parse(
      fs.readFileSync(productsCartFilePath, "utf-8")
    );
		let productToEdit = productsOnCart.find(product => req.params.id == product.id);
		let editedProduct = {
      id: productToEdit.id,
      name: productToEdit.name,
      description: productToEdit.description,
      price: productToEdit.price,
      image: productToEdit.image,
      category: productToEdit.category,
      state: "deleted"
		}

		let indice = productsOnCart.findIndex((product) => product.id == req.params.id);
		productsOnCart[indice] = editedProduct;

		fs.writeFileSync(productsCartFilePath, JSON.stringify(productsOnCart, null, " "));
		res.redirect("/products/productCart");
  },

  addToCart: (req, res) => {
    const products = JSON.parse(
      fs.readFileSync(productsFilePath, "utf-8")
    );
    const productsOnCart = JSON.parse(
      fs.readFileSync(productsCartFilePath, "utf-8")
    );
    let productToAdd = products.find(product => req.params.id == product.id);
    let productAdded = {
      id: productsOnCart[productsOnCart.length -1].id + 1,
      name: productToAdd.name,
      description: productToAdd.description,
      price: productToAdd.price,
      image: productToAdd.image,
      category: productToAdd.category,
      state: "cart"
    }
    productsOnCart.push(productAdded);
    fs.writeFileSync(productsCartFilePath, JSON.stringify(productsOnCart, null, " "));
    res.redirect("/products/");

},

  productCart: (req, res) => {
    const productsOnCart = JSON.parse(
      fs.readFileSync(productsCartFilePath, "utf-8")
    );
    let productToView = productsOnCart.filter(product => product.state == "cart");
    res.render("./products/productCart", { products: productToView, similarProducts: similarProducts});
  },
};

/* Exportamos el controlador */
module.exports = productsController;
