var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var User = require("../models/user");
var sha256 = require("sha256");

passport.serializeUser(function(user, done){
	done(null, user.id)
});

passport.deserializeUser(function(id, done){
	User.findById(id, function(err, user){
		done(err, user)
	});
});

passport.use("login", new LocalStrategy(
	(username, password, done) => {
		console.log("IN LOGIN STRATEGY");
		User.findOne({ username: username }, function(err, user){
			if(err){
				return done(err);
			}
			if(!user){
				return done(null, false);
			}
			if(!user.validPassword(password)){
				return done(null, false);
			}

			return done(null, user);
		});
	}
));

passport.use("register", new LocalStrategy({
		passReqToCallback: true
	},
	(req, username, password, done) => {
		User.findOne({ username: username }, function(err, user){
			if(err){
				return done(err);
			}
			if(user){
				return done(null, false, {flashMessage: "Username taken"});
			} else {
				var newUser = new User();

				newUser.username = username;
				newUser.passwordHash = sha256(password);
				newUser.email = req.param("email");
				newUser.save(function(err){
					if(err){
						console.log("Error saving user: " + err);
						throw err;
					}
					return done(null, newUser);
				});
			}
		});
	}
));

module.exports = passport;