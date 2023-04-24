const CartModel = require('../models/CartModel');

exports.createCart = (req, res, next) => {
    const cartObject = JSON.parse(req.body.cart);
    const cart = new CartModel({ ...cartObject });
    cart.save().then(() => {
        res.status(201).json({ message: 'Objet enregistré' });
    })
    .catch((error) => {
        res.status(400).json({ error });
    });
};

exports.modifyCart = (req, res, next) => {
    const cartObject =  JSON.parse(req.body.cart);
    CartModel.updateOne({ _id: req.params.id }, { ...cartObject, _id: req.params.id })
    .then(() => {
        res.status(200).json({ message: 'Objet modifié' })
    })
    .catch((error) => {
        res.status(400).json({ error });
    });
};

exports.deleteCart = (req, res, next) => {
    CartModel.deleteOne({ _id: req.params.id })
    .then(() => {
        res.status(200).json({ message: "Objet supprimé" });
    })
    .catch((error) => {
        res.status(400).json({ error });
    }); 
};

exports.getOneCart = (req, res, next) => {
    CartModel.findOne({ _id: req.params.id })
    .then((cart) => {
        res.status(200).json(cart);
    })
    .catch(error => {
        res.status(404).json({ error });
    });
};

exports.getAllCarts = (req, res, next) => {
    CartModel.find()
    .then((cart) => {
        res.status(200).json(cart);
    })
    .catch((error) => {
        res.status(400).json({ error });
    });
};