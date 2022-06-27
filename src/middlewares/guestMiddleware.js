function guestMiddleware(req, res, next) {
	if(req.session.userLogged) {
		next()	

}	else {
		res.redirect('./login')
	}
}


module.exports = guestMiddleware;