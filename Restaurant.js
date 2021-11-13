const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const reviewSchema = require('./reviewSchema');

const restaurantSchema = new Schema({
	name: String,
	location: String,
	reviews: [reviewSchema],
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
