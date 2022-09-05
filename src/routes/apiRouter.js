/* Importando el módulo Express */
const express = require('express');

/* Ejecutamos la función Router de Express */
const router = express.Router();

/* Importamos el controlador de contacto */
const apiController = require ('../controllers/apiController');

/* Rutas GET para busqueda de productos */
router.get ('/products', apiController.allProducts);
router.get ('/products/:id', apiController.searchProductsId);
router.get ('/products/search', apiController.searchProductsKey);

/* Rutas POST para crear, editar y eliminar productos */
router.post ('/products/create', apiController.createProduct);
router.post ('/products/edit/:id', apiController.editProduct);
router.delete ('/products/delete/:id', apiController.deleteProduct);

/* Rutas GET para busqueda de sections */
router.get ('/sections', apiController.allSections);

/* Rutas GET para busqueda de colecciones */
router.get ('/collections', apiController.allCollections);

/* Rutas GET para busqueda de brands */
router.get ('/brands', apiController.allBrands);

/* Rutas GET para busqueda de usuarios */
router.get ('/users', apiController.allUsers);
router.get ('/users/:id', apiController.userId);

/* Ruta POST para loguearse  */
router.post ('/login', apiController.processLogin);

module.exports = router;