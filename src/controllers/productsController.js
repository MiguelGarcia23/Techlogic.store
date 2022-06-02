/* Creamos un array que contenga los productos */
const products = [
    {
      id: 1,
      name: 'iPhone 13',
      price: '$234.500,00',
      img: 'iphone13.png',
      collection: 'Modern'
    },
  
    {
      id: 2,
      name: 'Mouse Logitech G603',
      price: '$6.435,00',
      img: 'mouse-logi.png',
      collection: 'Classic'
    },
  
    {
      id: 3,
      name: 'Macbook Pro',
      price: '$320.000,00',
      img: 'macbook-pro.png',
      collection: 'Modern'
    },
  
    {
      id: 4,
      name: 'Audífonos Beats Pro',
      price: '$48.000,00',
      img: 'audifonos-beats-pro.png',
      collection: 'Modern'
    },
  
    {
      id: 5,
      name: 'iPad Air',
      price: '$79.230,00',
      img: 'ipad-air.png',
      collection: 'Modern'
    },
  
    {
      id: 6,
      name: 'Playstation 5',
      price: '$61.700,00',
      img: 'playstation-5.png',
      collection: 'Modern'
    },
  
    {
      id: 7,
      name: 'Teclado Logitech G213',
      price: '$5.800,00',
      img: 'teclado-logitech-g213.png',
      collection: 'Colorful'
    },
  
    {
      id: 8,
      name: 'Router TP-Link TL-MR6400',
      price: '$8.020,00',
      img: 'router-tplink-mr6400.png',
      collection: 'Classic'
    },
  ];

/* Creamos un array que contenga los productos del carrito */
const cartProducts = [
  {
    name: 'Mouse Logitech G603',
    price: '$6.435,00',
    img: 'mouse-logi.png'
  },
  {
    name: 'iPhone 13',
    price: '$234.500,00',
    img: 'iphone13.png'
  },

  {
    name: 'Macbook Pro',
    price: '$320.000,00',
    img: 'macbook-pro.png'
  }
];

/* Creamos un array que contenga los productos que también le pueden interesar al usuario */
const similarProducts = [
  {
    name: 'Audífonos Beats Pro',
    price: '$48.000,00',
    img: 'audifonos-beats-pro.png'
  },

  {
    name: 'iPad Air',
    price: '$79.230,00',
    img: 'ipad-air.png'
  },

  {
    name: 'Playstation 5',
    price: '$61.700,00',
    img: 'playstation-5.png'
  }
];

/* Configuramos el controlador */
const productsController = {

    index: (req, res) => {
      res.render('./products/listProducts', {products: products})
    },

    section: (req, res) => {
      res.render('./products/sectionProducts')
    },

    productDetail: (req, res) => {

      let detailedProduct = products.find(product => product.id == req.params.id);

      res.render('./products/productDetail', {similarProducts: similarProducts, product: detailedProduct})
    },

    collections: (req, res) => {
      res.render('./products/collections')
    },

    bestSellers: (req, res) => {
      res.render('./products/bestSellers')
    },

    sales: (req, res) => {
      res.render('./products/sales')
    },

    productCart: (req, res) => {
      res.render('./products/productCart', {products: cartProducts, similarProducts: similarProducts})
    }
}

/* Exportamos el controlador */
module.exports = productsController;