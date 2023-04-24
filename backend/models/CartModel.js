const mongoose = require('mongoose');

const receiptShema = mongoose.Schema({
    _Id: { type: String, required: true },
    seller_Id: { type: String, required: true },
    customer_Id: { type: String, required: true },
    product_Id: { type: String, required: true },
    product_title: { type: String, required: true },
    quatity: { type: Number, required: true },
    sum: { type: Number, required: true },
    date: { type: Number || Date, required: true }
});

module.exports = mongoose.model('Receipt', receiptShema);