var db = require('./setup');

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	var recipeSchema = mongoose.Schema({
		id: String,
		name: String,
		description: String,
		ingredients: [{name: String, amount: String}],
		instructions: String,
		rating: Number,
		voters: Number
	});

	var Recipe = mongoose.model('Recipe', recipeSchema);

	module.exports = User;
});