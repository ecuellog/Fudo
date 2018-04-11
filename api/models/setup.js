var mongoose = require('mongoose');
var url = 'mongodb://localhost:27017/fudodb';

// set up the MongoDB connection
console.log("Starting Mongo: at " + url);

//mongoose.Promise = global.Promise;

mongoose.connect(url, {
  useMongoClient:true
});

module.exports = mongoose;