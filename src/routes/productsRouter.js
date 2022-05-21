/* Importando el módulo Express */
const express = require('express');

/* Ejecutamos la función Router de Express */
const router = express.Router();

/* Importamos el controlador de productos */
const productsController = require ('../controllers/productsController');

/* Configuramos el envío a la página principal de productos */
router.get ('/', productsController.index);

/* Configuramos el envío a una sección de productos */
router.get ('/sectionProducts/:idSection', productsController.section);

/* Configuramos el envío al detalle de un producto */
/* ESTA ES LA FORMA EN LA QUE IRÁ FINALMENTE PERO DE MOMENTO USEMOS LA OTRA */
/* router.get ('/sectionProducts/:idSection/productDetail/:idProduct', productsController.productDetail); */
router.get ('/productDetail/:idProduct?', productsController.productDetail);

/* Configuramos el envío a las colecciones */
router.get ('/collections', productsController.collections);

/* Configuramos el envío a los best sellers */
router.get ('/bestSellers', productsController.bestSellers);

/* Configuramos el envío a las ofertas */
router.get ('/sales', productsController.sales);

/* Configuramos el envío al carrito de compras */
router.get ('/productCart', productsController.productCart);

/* Exportamos la variable router */
module.exports = router;