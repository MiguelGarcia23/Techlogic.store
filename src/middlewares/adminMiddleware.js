function adminMiddleware(req, res, next) {

    let userLoggedAdmin = req.session.userLogged;

	if(userLoggedAdmin.rol == 'admin') {
		next()	

}	else {
		res.redirect('/users/login')
	}
}


module.exports = adminMiddleware;