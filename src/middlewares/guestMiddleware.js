function guestMiddleware(req, res, next) {
	if(req.session.userLogged) {
		next()	
	} else {
		res.redirect('/users/login')
	}
}


module.exports = guestMiddleware;