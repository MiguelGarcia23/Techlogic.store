const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/products.json");
const collectionsFilePath = path.join(__dirname, "../data/collections.json")

/* Configuramos el controlador */
const mainController = {

    index: (req, res) => {
      const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
      const collections = JSON.parse(fs.readFileSync(collectionsFilePath, "utf-8"))

      let productInOfert = products.filter((product) => product.state == "bestSeller" )
      res.render('./main/index', {bestSellers: productInOfert, collections: collections})
    }
}

/* Exportamos el controlador */
module.exports = mainController;