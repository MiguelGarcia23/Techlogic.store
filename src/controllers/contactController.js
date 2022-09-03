
/* Configuramos el controlador */
const contactController = {

    aboutUs: (req, res) => {
        /* res.render('./contact/aboutUs') */
        res.render('./contact/aboutUs2')
    },

    payment: (req, res) => {
        res.render('./contact/payment')
    },

    questions: (req, res) => {
        res.render('./contact/questions')
    },

    info: (req, res) => {
        /* res.render('./contact/infoContact') */
        res.render('./contact/infoContact')
    }
}

/* Exportamos el controlador */
module.exports = contactController;