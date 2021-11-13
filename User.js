const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	email: String,
	firstName: String,
	lastName: String,
});

module.exports = mongoose.model('User', userSchema);
