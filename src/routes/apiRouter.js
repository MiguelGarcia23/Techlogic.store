/* Importando el módulo Express */
const express = require('express');

/* Ejecutamos la función Router de Express */
const router = express.Router();

/* Importamos el controlador de contacto */
const apiController = require ('../controllers/apiController');

/* Rutas GET para busqueda de productos */
router.get ('/products', apiController.allProducts);
router.get ('/products/search', apiController.searchProductsKey);
router.get ('/products/:id', apiController.searchProductsId);

/* Rutas GET para busqueda de colecciones */
router.get ('/collections', apiController.allCollections);

/* Rutas GET para busqueda de brands */
router.get ('/brands', apiController.allBrands);

/* Rutas GET para busqueda de sections */
router.get ('/sections', apiController.allSections);

/* Rutas GET para busqueda de usuarios */
router.get ('/users', apiController.allUsers);

module.exports = router;