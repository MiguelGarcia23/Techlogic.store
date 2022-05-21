/* Configuramos el controlador */
const adminController = {

    index: (req, res) => {
        res.render('./admin/adminPage')
    },

    create: (req, res) => {
        res.render('./admin/createProduct')
    },

    edit: (req, res) => {
        res.render('./admin/editProduct')
    }
}

/* Exportamos el controlador */
module.exports = adminController;