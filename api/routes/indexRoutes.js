var express = require("express");
var router = express.Router();

module.exports = function(passport){
	router.get("/", function(req, res, next){
	  res.render("index", { message: req.flash("loginMessage")});
	});

	router.post("/login", function(req, res, next){
		console.log("heyy")
		passport.authenticate("login", function(err, user, info){
			if(!user){
				return res.send(JSON.stringify({flashMessage: "Invalid username or password."}))
			}
			return res.redirect("/");
		})(req, res, next);
	});

	router.get("/logout", function(req, res, next){
		req.logout();
		res.redirect("/");
	});
	
	return router;
}