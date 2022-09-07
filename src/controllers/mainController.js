const db = require("../database/models");
const Op = db.Sequelize.Op;

/* Configuramos el controlador */
const mainController = {

    index: (req, res) => {

      let promiseProducts = db.Products.findAll({
        limit: 5
      })
      let promiseCollections = db.Collections.findAll();

      Promise.all([promiseProducts, promiseCollections])
        .then(([products, collections]) => {
          res.render('./main/index', {bestSellers: products, collections, user: req.session.userLogged})
        })
        .catch(e => {
          res.send(e)
        })
    },
    search: (req,res)=>{
      let productoABuscar = req.body.search
      db.Products.findAll({
        where: {
          name: {[Op.like]: '%' + productoABuscar + '%'},
          deleted: false
        }
      })
        .then(products => {
          res.render('./main/search', {products, palabraBuscada: productoABuscar, user: req.session.userLogged})
        })
        .catch(e => {
          res.send(e)
        })
    }
}

/* Exportamos el controlador */
module.exports = mainController;