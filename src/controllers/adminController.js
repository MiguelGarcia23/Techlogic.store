const User = require("../model/User");
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

    store: (req, res, next) => {

        /* Leyendo el JSON */
        const productsFile = fs.readFileSync(productsFilePath, "utf-8");

        /* Estableciendo una variable que será el array de todos los productos los productos */	
        let products;

        /* Preguntar si hay algun producto. Si no lo hay, que cree un array que los almacene, si sí hay productos, que transforme el JSON a un array */
        if (products == '') {

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

        /* Agregando el nuevo producto al array de productos */
        products.push(newProduct);

        /* Convirtiendo el array a un JSON y reescribiendo el JSON con los nuevos productos */
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));

        /* Redirigiendo a la lista de productos luego de enviar el formulario */
        res.redirect('/products/')
    },

    edit: (req, res) => {
        const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
        let productToEdit = products.find((product) => req.params.id == product.id);
    
        res.render("admin/editProduct", {product: productToEdit, user: req.session.userLogged});
    },

    update: (req, res) => {

        /* Leyendo el JSON y convirtiéndolo en un array */
        const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
        
		/* Encontrando el producto seleccionado por el usuario */
        let productToEdit = products.find(product => product.id == req.params.id);

		/* Configurando la nueva info del producto luego de los cambios del usuario */
		productToEdit.id = req.params.id
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
		let indexProductEdited = products.findIndex(product => product.id == req.params.id);

		/* Cambiando la info del producto anterior por la nueva agregada por el usuario */
		products[indexProductEdited] = productToEdit;

		/* Convirtiendo el array a un JSON y reescribiendo el JSON con los nuevos productos */
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));

		/* Redirigiendo a la lista de productos luego de enviar el formulario */
		res.redirect('/products/', {user: req.session.userLogged})
    },

    delete: (req, res) => {
        
        /* Leyendo el JSON y convirtiéndolo en un array */
        let products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

        /* Estableciendo una nueva variable con el listado de productos después de eliminar el seleccionado por el usuario */
        let finalProducts = products.filter(product => product.id != req.params.id);

        /* Cambiando el listado de productos viejo por el nuevo listado luego de eliminar el producto seleccionado */
        products = finalProducts;

        /* Convirtiendo el array a un JSON y reescribiendo el JSON con los productos que quedaron */
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));

        /* Redirigiendo a la lista de productos luego de enviar el formulario */
        res.redirect('/products/');
    }
}

/* Exportamos el controlador */
module.exports = adminController;