const mongoose = require('mongoose');

const uniqueValidator = require('mongoose-unique-validator');

const customerSchema = mongoose.Schema({
    _id: { type: String, required: true },
    c_imageUrl: { type: String || File, requred: true },
    c_country: { type: String, required: true },
    c_fname: { type: String, required: true },
    c_lname: { type: String, required: true },
    c_companyname: { type: String, required: false },
    c_address: { type: String, required: true },
    c_state_country: { type: String, required: true },
    c_postal_zip: { type: String, required: true },
    c_email_address: { type: String, required: true, unique: true },
    c_phone: { type: String, required: true, unique: true },
    c_account_password: { type: String, required: true }
});

customerSchema.plugin(uniqueValidator);

module.exports = mongoose.model('CustmerModel', customerSchema);