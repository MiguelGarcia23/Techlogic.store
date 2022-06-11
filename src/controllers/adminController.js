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

    processCreation: (req, res, next) => {
        const productsFile = fs.readFileSync(productsFilePath, "utf-8");

        let products;

        if (products == '') {

            products = [];

        } else {

            products = JSON.parse(productsFile);

        }

        let newProduct = {
            id: products[products.length - 1].id + 1,
            ...req.body,
            description: req.body.description,
            price: req.body.price,
            state: 'stock'
        };

        /* Preguntado si el usuario subió una imagen. Si no lo hizo, aparece un error  */
		if (!req.file) {

			const error = new Error ('Por favor seleccione un archivo');
			error.httpStatusCode = 400;
			return next(error)

		} else {
			newProduct.image = req.file.filename;
		}

        products.push(newProduct);

        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));

        res.redirect('../products')
    },

    edit: (req, res) => {
        const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
        let productToEdit = products.find((product) => req.params.id == product.id);
    
        res.render("admin/editProduct", {product: productToEdit});
      }
    }


/* Exportamos el controlador */
module.exports = adminController;