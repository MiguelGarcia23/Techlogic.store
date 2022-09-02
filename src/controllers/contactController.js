/* Configuramos el controlador */
const contactController = {

    aboutUs: (req, res) => {
        res.render('./contact/aboutUs')
    },

    payment: (req, res) => {
        /* res.render('./contact/payment') */
        res.render('./404-page')
    },

    questions: (req, res) => {
        /* res.render('./contact/questions') */
        res.render('./contact/questions')
    },

    info: (req, res) => {
        /* res.render('./contact/infoContact') */
        res.render('./contact/infoContact')
    }
}

/* Exportamos el controlador */
module.exports = contactController;