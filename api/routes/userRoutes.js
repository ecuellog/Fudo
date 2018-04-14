var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var bcrypt = require("bcrypt");
var User = require("../models/user.js")

mongoose.Promise = Promise;

router.post("/register", function(req, res, next){
	console.log(req.body);
	User.findOne({email: req.body.email})
		.exec()
		.then(user => {
			if(user){
				return res.status(409).json({
					message: "Email exists"
				})
			} else {
				var user = new User({
					name: req.body.name,
					email: req.body.email,
					passwordHash: bcrypt.hashSync(req.body.password, 10)
				});
				user
					.save()
					.then(result => {
						console.log(result);
						res.status(201).json({
							message: "Registration successful"
						});
					})
					.catch(err => {
						console.log(err);
						res.status(500).json({
							error: err
						});
					})
			}
		});
});

router.post("/login", function(req,res,next){
	User.findOne({email: req.body.email})
		.exec()
		.then(user => {
			if(!user){
				return res.status(401).json({
					message: "Wrong email or password"
				});
			} else {
				bcrypt.compare(req.body.password, user.password, (err, result) => {
					if(err){
						return res.status(401).json({
							message: "Wrong email or password"
						});
					}
					if(result){
						return res.status(200).json({
							message: "Wrong email or password"
						});
					}
					res.status(401).json({
						message: "Wrong email or password"
					})
				});
			}
		})
		.catch(err => {
			console.log(err);
			return res.status(500).json({
				error: err
			});
		});
});

module.exports = router;