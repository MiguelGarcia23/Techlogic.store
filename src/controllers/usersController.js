/* Configuramos el controlador */
const usersController = {

    login: (req, res) => {
        res.render('./users/login')
    },

    register: (req, res) => {
        res.render('./users/register')
    },

    profile: (req, res) => {
        res.render('./users/userProfile')
    },

    purchases: (req, res) => {
        res.render('./users/userPurchases')
    }
}

/* Exportamos el controlador */
module.exports = usersController;