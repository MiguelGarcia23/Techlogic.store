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
      })
      .catch((e) => {
        res.send(e)
      })
    });
  },
  searchProductsId: (req, res) => {
    db.Products.findByPk(req.params.id).then((product) => {
      res.status(200).json({
        product: product,
        status: 200,
      })
      .catch((e) => {
        res.send(e)
      })
    });
  },
  allCollections: (req, res) => {
    db.Collections.findAll()
    .then((collections) => {
      res.status(200).json({
        total: collections.length,
        collections: collections,
        status: 200
      })

    })
  },
  allBrands: (req, res) => {
    db.Brands.findAll()
    .then((brands) => {
      res.status(200).json({
        total: brands.length,
        collections: brands,
        status: 200
      })

    })
  },
  allSections: (req, res) => {
    db.Sections.findAll()
    .then((sections) => {
      res.status(200).json({
        total: sections.length,
        collections: sections,
        status: 200
      })

    })
  },
  allUsers: (req, res) => {

    db.Users.findAll({raw: true}).then((users) => {


      for (let i = 0; i < users.length; i++) {

        delete users[i]['password'];

      }
      res.status(200).json({
        total: users.length,
        users: users,
        status: 200,
      });
      
    });
  },

  userId: (req, res) => {
    db.Users.findByPk(req.params.id, {raw: true})
    .then((user) => {
      
      delete user.password
      res.status(200).json({
        user: user
      })
    })
    .catch((e) => {
      res.send(e)
    })
  }
};

/* Exportamos el controlador */
module.exports = apiController;
