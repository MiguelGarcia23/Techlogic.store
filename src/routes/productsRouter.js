/* Importando el módulo Express */
const express = require('express');

/* Ejecutamos la función Router de Express */
const router = express.Router();

/* Importamos el controlador de productos */
const productsController = require ('../controllers/productsController');

/* Importamos el middleware Multer */
const multerMiddleware = require('../middlewares/uploadProductImage');

/* Importamos los middleware */
const guestMiddleware = require('../middlewares/guestMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware')

/* Configuramos el envío a la página principal de productos */
router.get ('/', productsController.index);

/* Configuramos el envío a una sección de productos */
router.get ('/sectionProducts/:nameSection', productsController.section);

/* Configuramos el envío al detalle de un producto */
router.get ('/productDetail/:id', productsController.productDetail);

/* Configuramos el envío a las colecciones */
router.get ('/collections/:nameCollection?', productsController.collections);

/* Configuramos el envío a los best sellers */
router.get ('/bestSellers', productsController.bestSellers);

/* Configuramos el envío a las ofertas */
router.get ('/sales', productsController.sales);

/* Configuramos el envío al carrito de compras */
router.get ('/productCart', productsController.productCart);

/* Configuramos la ruta del boton 'eliminar' del carrito */
router.post ('/productCart/:id', productsController.deleteProductToCart);

/* Configuramos la ruta de los botones 'Añadir al carrito' de la lista de productos y del detalle */
router.post ('/addProduct/:id', productsController.addToCart);

/* Configuramos el envío a la sección de creación de productos de admin */
router.get ('/create', guestMiddleware, adminMiddleware, productsController.create);

/* Configuramos la ruta de envío del formulario de creación de un producto una vez completo */
router.post ('/create', multerMiddleware.single('image') , productsController.store);

/* Configuramos el envío a la sección de edición de productos de admin */
router.get ('/edit/:id', guestMiddleware, adminMiddleware, productsController.edit);

/* Configuramos la ruta de envío del formulario de edición de un producto una vez completo */
router.put ('/edit/:id', multerMiddleware.single('image') , productsController.update);

/* Configuramos la ruta para eliminar un producto */
router.delete ('/delete/:id', productsController.delete);


/* Exportamos la variable router */
module.exports = router;