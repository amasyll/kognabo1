const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const CatalogueRoutes = require('./routes/catalogue');
const MenuRoutes = require('./routes/menu');
const ReceiptRoutes = require('./routes/receipt');
const CartRoutes = require('./routes/cart');
const SellerRoutes = require('./routes/seller');
const CustomerRoutes = require('./routes/customer');

var url = "mongodb://localhost:27017/test";
mongoose.connect(
  url,
  //"mongodb+srv:connectioncode", //Add your connection string from MongoDB
  { useNewUrlParser: true, 
    useUnifiedTopology: true })
    .then(() => console.log('Connection à MongoDB réussie'))
    .catch(() => console.log('Connection à MongoDB échouée'));

const app = express();    

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
app.use(bodyParser.text({ type: 'text/html' }));

app.use('/fake_db/images', express.static(path.join(__dirname, 'images')));

app.use('/catalogue/', CatalogueRoutes);
app.use('/receipt/', ReceiptRoutes);
app.use('/cart/', CartRoutes);
app.use('/menu/', MenuRoutes);
app.use('/seller/', SellerRoutes);
app.use('/customer/', CustomerRoutes);

module.exports = app;