const mongoose = require('mongoose');

const uniqueValidator = require('mongoose-unique-validator');

const sellerSchema = mongoose.Schema({
    _id: { type: String, required: true },
    s_imageUrl: { type: String || File, requred: true },
    s_fname: { type: String, required: true },
    s_lname: { type: String, required: true },
    s_phone: { type: Number || String, required: true, unique: true },
    s_email: { type: String, required: true, unique: true },
    s_password: { type: String, required: true }
});

sellerSchema.plugin(uniqueValidator);

module.exports = mongoose.model('SellerModel', sellerSchema);