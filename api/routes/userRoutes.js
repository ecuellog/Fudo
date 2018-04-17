var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
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
					message: "Wrong email or password: user does not exist CHANGE"
				});
			} else {
				bcrypt.compare(req.body.password, user.passwordHash, (err, result) => {
					if(err){
						return res.status(401).json({
							message: "Wrong email or password: wrong pass CHANGE"
						});
					}
					//Username and password correct
					if(result){
						var token = jwt.sign({
								userId: user._id,
								name: user.name,
								email: user.email
							},
							"secret123",
							{
								expiresIn: "12h"
								//add IP address of client later? To authenticate token for that ip address only
							}
						);
						return res.status(200).json({
							message: "Auth successful",
							token: token
						});
					}
					//password incorrect
					return res.status(401).json({
						message: "Wrong email or password"
					});
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