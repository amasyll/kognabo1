const mongoose = require('mongoose');

const receiptShema = mongoose.Schema({
    _Id: { type: String, required: true },
    seller_Id: { type: String, required: true },
    customer_Id: { type: String, required: true },
    cart_Id: { type: String, required: true },
    isSolved: { type: Boolean, required: true },
    sum: { type: Number, required: true },
    date: { type: Number || Date, required: true }
});

module.exports = mongoose.model('Receipt', receiptShema);