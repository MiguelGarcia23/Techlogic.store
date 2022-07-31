function adminMiddleware(req, res, next) {

    let userLoggedAdmin = req.session.userLogged;

	if(userLoggedAdmin.rolId == 1) {
		next()	

	} else {
		res.redirect('/users/login')
	}
}


module.exports = adminMiddleware;