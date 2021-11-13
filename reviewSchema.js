const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
	title: String,
	content: String,
	author: { type: Schema.Types.ObjectId, ref: 'User' },
});

module.exports = reviewSchema;
