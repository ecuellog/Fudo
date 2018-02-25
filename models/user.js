var mongoose = require("./setup.js");

var userSchema = new mongoose.Schema({
	id: String,
	username: String,
	email: String,
	passwordHash: String,
	ownRecipes: [{id: String}],
	favRecipes: [{id: String}],
	prevRecipes: [{id: String}]
});

userSchema.methods.validPassword = function(password){
	return bcrypt.compareSync(password, this.passwordHash);
};

userSchema.methods.generateHash = function(password){
	return hashSync(password, bcrypt.genSaltSync(8), null); //check bcrypt docs
};

var User = mongoose.model("User", userSchema);
module.exports = User;