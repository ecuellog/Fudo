var express = require("express");
var router = express.Router();

module.exports = function(passport){
	router.get("/", function(req, res, next){
	  res.render("index");
	});

	router.post("/login", passport.authenticate("login", { 
			successRedirect: "/",
			failureFlash: true 
		})
	);

	router.post("/register", passport.authenticate("register", {
			successRedirect: "/",
			failureFlash: true
		})
	);

	router.get("/logout", function(req, res, next){
		req.logout();
		res.redirect("/");
	});
	return router;
}