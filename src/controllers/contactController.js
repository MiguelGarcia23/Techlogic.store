const fs = require('fs')
const path = require('path')


const filepath =  path.join(__dirname, '../data/faq.json')
const faq = JSON.parse(fs.readFileSync(filepath, 'utf-8'))

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
        res.render('./contact/questions', {faq: faq})
    },

    info: (req, res) => {
        /* res.render('./contact/infoContact') */
        res.render('./contact/infoContact')
    }
}

/* Exportamos el controlador */
module.exports = contactController;