/* Importando el módulo express */
const express = require("express");

/* Guardando en la variable app la ejecución de la función express */
const app = express();

/* Importado el módulo nativo path en la variable path */
const path = require("path");

/* Estableciendo los archivos estáticos */
app.use(express.static("public"));

/* Levantando el servidor */
app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000/");
});

/* Indicando cuando me mostrará el home de la página */
app.get("/", (req, res) => {
  let htmlPath = path.resolve(__dirname, "./views/index.html");
  res.sendFile(htmlPath);
});

/* Indicando cuando me mostrará el detalle del producto en la página */
app.get("/productDetail", (req, res) => {
  let htmlPath = path.resolve(__dirname, "./views/productDetail.html");
  res.sendFile(htmlPath);
});

/* Indicando cuando me mostrará el carrito de compras en la página */
app.get("/productCart", (req, res) => {
  let htmlPath = path.resolve(__dirname, "./views/productCart.html");
  res.sendFile(htmlPath);
});

/* Indicando cuando me mostrará el login de la página */
app.get("/login", (req, res) => {
  let htmlPath = path.resolve(__dirname, "./views/login.html");
  res.sendFile(htmlPath);
});

/* Indicando cuando me mostrará el register de la página */
app.get("/register", (req, res) => {
  let htmlPath = path.resolve(__dirname, "./views/register.html");
  res.sendFile(htmlPath);
});

/* Redireccionando todos los botones al home de la página */
app.post("/", (req,res) => {
  let htmlPath = path.resolve(__dirname, "./views/index.html");
  res.sendFile(htmlPath);
})