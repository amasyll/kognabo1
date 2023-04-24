const mongoose = require('mongoose');

const menuSchema = mongoose.Schema({
	_Id: { type: String },
	title: { type: String, required: true },
	description: { type: String, required: true },
	imageUrl: { type: String || File, required: true },
	seller_Id: { type: String, required: true },
	price: { type: Number, required: true },
	quantity: { type: Number, required: true},
	date: { type: Date || Number, required: true}
});

module.exports = mongoose.model('MenuModel', menuSchema);