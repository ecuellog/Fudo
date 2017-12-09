var db = require('./setup');

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	var userSchema = mongoose.Schema({
		id: String,
		email: String,
		passwordHash: String,
		ownRecipes: [id: String],
		favRecipes: [id: String],
		prevRecipes: [id: String]
	});

	var User = mongoose.model('User', userSchema);

	module.exports = User;
});