/* Configuramos el controlador */
const productsController = {

    index: (req, res) => {
        res.render('./products/listProducts')
    },

    section: (req, res) => {
        res.render('./products/sectionProducts')
    },

    productDetail: (req, res) => {
        res.render('./products/productDetail')
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
        res.render('./products/productCart')
    }
}

/* Exportamos el controlador */
module.exports = productsController;