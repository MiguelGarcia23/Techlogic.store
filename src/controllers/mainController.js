/* Creamos un array que contenga los productos que se mostrarán en la sección best sellers */
const bestSellers = [
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

/* Creamos un array que contenga las colecciones que se mostrarán en la sección collections */
const collections = [
  {
    name: 'Modern',
    classCollection: 'modern-collection'
  },

  {
    name: 'Classic',
    classCollection: 'classic-collection'
  },

  {
    name: 'Colorful',
    classCollection: 'colorful-collection'
  },

  {
    name: 'Black & White',
    classCollection: 'black-white-collection'
  }
]


/* Configuramos el controlador */
const mainController = {

    index: (req, res) => {
        res.render('./main/index', {bestSellers: bestSellers, collections: collections})
    }
}

/* Exportamos el controlador */
module.exports = mainController;