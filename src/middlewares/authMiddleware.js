function authMiddleware(req, res, next) {
    if (!req.session.userLogged) {
        next()
    } else {
        res.redirect('./userProfile')
    }
}

module.exports = authMiddleware;