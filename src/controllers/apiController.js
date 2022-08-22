const db = require("../database/models");
const Op = db.Sequelize.Op;

const apiController = {
  allProducts: (req, res) => {
    db.Products.findAll().then((products) => {
      res.status(200).json({
        total: products.length,
        products: products,
        status: 200,
      });
    });
  },
  searchProductsKey: (req, res) => {
    db.Products.findAll({
      where: {
        name: { [Op.like]: "%" + req.query.keyword + "%" },
      },
    }).then((products) => {
      res.status(200).json({
        products: products,
      });
    });
  },
  searchProductsId: (req, res) => {
    db.Products.findByPk(req.params.id).then((product) => {
      res.status(200).json({
        product: product,
        status: 200,
      });
    });
  },
  allUsers: (req, res) => {
    db.Users.findAll().then((users) => {
      res.status(200).json({
        total: users.length,
        users: users,
        status: 200,
      });
    });
  },
};

/* Exportamos el controlador */
module.exports = apiController;
