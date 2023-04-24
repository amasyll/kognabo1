const mongoose = require('mongoose');

const catalogueSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String || File, required: true },
  seller_Id: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true},
  date: { type: Number || Date, required: true }
});

module.exports = mongoose.model('CatalogueModel', catalogueSchema);