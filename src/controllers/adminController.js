const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/products.json");


/* Configuramos el controlador */
const adminController = {

    index: (req, res) => {
        res.render('./admin/adminPage')
    },

    create: (req, res) => {
        res.render('./admin/createProduct')
    },

    edit: (req, res) => {
        const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
        let productToEdit = products.find((product) => req.params.id == product.id);
    
        res.render("admin/editProduct", {product: productToEdit});
      }
    }


/* Exportamos el controlador */
module.exports = adminController;