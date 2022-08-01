const db = require('../database/models');
function userLoggedMiddleware(req, res, next) {
    
    res.locals.isLogged = false;
    let emailInCookie = req.cookies.email;
    if (emailInCookie) {
        db.Users.findOne({
            where: {
                email: emailInCookie
            }
        })
            .then(user => {
                if (user) {
                    req.session.userLogged = user;
                }
            
                if (req.session.userLogged) {
                    res.locals.isLogged = true;
                    res.locals.userLogged = req.session.userLogged;
                }

                next();
            })
            .catch(e => {
                res.send(e)
            })
    } else {
      next();  
    }    
}

module.exports = userLoggedMiddleware;