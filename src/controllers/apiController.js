const db = require("../database/models");
const Op = db.Sequelize.Op;
const path = require("path");

const imageFilePath = path.join(__dirname, "../../public/img/products/");

const apiController = {
  allProducts: (req, res) => {
    /* db.Products.findAll({
      include: [{association: 'sections'}]
    }).then((products) => {
      res.status(200).json({
        total: products.length,
        products: products,
        status: 200,
      });
    }); */

    db.Products.findAll({
      include: [{association: 'sections'}, {association: 'collections'}, {association: 'brands'}]
    }).then((products) => {

      const listProducts = [];
      
      for (const product of products) {

        let finalProduct = {
          id: product.id,
          name: product.name,
          description: product.description,
          price: product.price,
          discount: product.discount,
          inCart: product.inCart,
          deleted: product.deleted,
          section: [product.sections.sectionName],
          collection: [product.collections.collectionName],
          brand: [product.brands.brandName],
          image: imageFilePath + product.image,
          detail: 'http://localhost:3000/api/products/' + product.id
        }

        listProducts.push(finalProduct)
      }

      const productsBySection = {};

      for (const product of listProducts) {
        
        if(productsBySection[product.section[0]] === undefined) {
          productsBySection[product.section[0]] = 1;
        } else {
          productsBySection[product.section[0]] += 1;
        }
      };

      const productsByCollection = {};

      for (const product of listProducts) {
        
        if(productsByCollection[product.collection[0]] === undefined) {
          productsByCollection[product.collection[0]] = 1;
        } else {
          productsByCollection[product.collection[0]] += 1;
        }
      }
      const productsByBrand = {};

      for (const product of listProducts) {
        
        if(productsByBrand[product.brand[0]] === undefined) {
          productsByBrand[product.brand[0]] = 1;
        } else {
          productsByBrand[product.brand[0]] += 1;
        }
      }

      res.status(200).json({
        total: listProducts.length,
        productsBySection,
        productsByCollection,
        productsByBrand,
        products: listProducts,
        status: 200,
      });
    })
    .catch((e) => {
      res.send(e)
    })
  },

  searchProductsId: (req, res) => {
    /* db.Products.findByPk(req.params.id).then((product) => {
      res.status(200).json({
        product: product,
        status: 200,
      })
    })
    .catch((e) => {
      res.send(e)
    }) */

    db.Products.findByPk(req.params.id, {
      include: [{association: 'sections'}, {association: 'collections'}, {association: 'brands'}]
    }).then((product) => {

      const finalProduct = {
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        discount: product.discount,
        inCart: product.inCart,
        deleted: product.deleted,
        section: [product.sections.sectionName],
        collection: [product.collections.collectionName],
        brand: [product.brands.brandName],
        image: '/public/img/products/' + product.image
      }

      res.status(200).json({
        product: finalProduct,
        status: 200,
      })
    })
    .catch((e) => {
      res.send(e)
    })
  },

  searchProductsKey: (req, res) => {

    /* db.Products.findAll({
      where: {
        name: { [Op.like]: "%" + req.query.keyword + "%" },
      },
    }).then((products) => {
      res.status(200).json({
        products: products,
      })
    })
    .catch((e) => {
      res.send(e)
    }) */

    db.Products.findAll({
      where: {
        name: { [Op.like]: "%" + req.query.keyword + "%" },
      },
    }, {
      include: [{association: 'sections'}, {association: 'collections'}, {association: 'brands'}]
    }).then((products) => {

      const listProducts = [];
      
      for (const product of products) {

        let finalProduct = {
          id: product.id,
          name: product.name,
          description: product.description,
          price: product.price,
          discount: product.discount,
          inCart: product.inCart,
          deleted: product.deleted,
          section: [product.sections.sectionName],
          collection: [product.collections.collectionName],
          brand: [product.brands.brandName],
          image: '/public/img/products/' + product.image,
          detail: 'http://localhost:3000/api/products/' + product.id
        }

        listProducts.push(finalProduct)
      }

      res.status(200).json({
        total: listProducts.length,
        products: listProducts,
      })
    })
    .catch((e) => {
      res.send(e)
    })
  },

  allSections: (req, res) => {
    db.Sections.findAll()
    .then((sections) => {
      res.status(200).json({
        total: sections.length,
        sections: sections,
        status: 200
      })
    })
    .catch((e) => {
      res.send(e)
    })
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
    .catch((e) => {
      res.send(e)
    })
  },

  allBrands: (req, res) => {
    db.Brands.findAll()
    .then((brands) => {
      res.status(200).json({
        total: brands.length,
        brands: brands,
        status: 200
      })
    })
    .catch((e) => {
      res.send(e)
    })
  },

  allUsers: (req, res) => {

    /* db.Users.findAll({raw: true}).then((users) => {


      for (let i = 0; i < users.length; i++) {

        delete users[i]['password'];

      }
      res.status(200).json({
        total: users.length,
        users: users,
        status: 200,
      });
      
    })
    .catch((e) => {
      res.send(e)
    }) */

    db.Users.findAll({
      include: [{association: 'rols'}]
    }, {raw: true}).then((users) => {

      const listUsers = [];

      for (const user of users) {
        
        let finalUser = {
          id: user.id,
          name: user.name,
          lastName: user.lastName,
          email: user.email,
          rol: user.rols.rolName,
          image: "C:/Users/Facu/Desktop/grupo_1_techlogic.store/public/img/users/" + user.image,
          detail: 'http://localhost:3000/api/users/' + user.id
        }

        listUsers.push(finalUser);
      }

      res.status(200).json({
        total: listUsers.length,
        users: listUsers,
        status: 200,
      });
      
    })
    .catch((e) => {
      res.send(e)
    })
  },

  userId: (req, res) => {
    /* db.Users.findByPk(req.params.id, {raw: true})
    .then((user) => {
      
      delete user.password
      res.status(200).json({
        user: user
      })
    })
    .catch((e) => {
      res.send(e)
    })
  } */

  db.Users.findByPk(req.params.id, {raw: true})
    .then((user) => {
      
      const finalUser = {
        id: user.id,
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        image: '/public/img/users' + user.image
      }
      
      res.status(200).json({
        user: finalUser
      })
    })
    .catch((e) => {
      res.send(e)
    })
  }
};

/* Exportamos el controlador */
module.exports = apiController;
