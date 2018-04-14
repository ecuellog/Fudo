var mongoose = require("./setup.js");
var bcrypt = require("bcrypt")

var userSchema = new mongoose.Schema({
	name: String,
	email: {
		type: String,
		required: true,
		unique: true
	},
	passwordHash: String,
	ownRecipes: [{id: String}],
	favRecipes: [{id: String}],
	prevRecipes: [{id: String}]
});

var User = mongoose.model("User", userSchema);
module.exports = User;