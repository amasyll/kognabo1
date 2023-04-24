const ReceiptModel = require('../models/ReceiptModel');
const fs = require('fs');

exports.createReceipt = (req, res, next) => {
    const receiptObject = JSON.parse(req.body.receipt);
    const receipt = new ReceiptModel({ ...receiptObject });
    receipt.save().then(() => {
        res.status(201).json({ message: 'Objet enregistré' });
    })
    .catch((error) => {
        res.status(400).json({ error });
    });
};

exports.modifyReceipt = (req, res, next) => {
    const receiptObject = JSON.parse(req.body.receipt);
    MenuModel.updateOne({ _id: req.params.id }, { ...receiptObject, _id: req.params.id })
    .then(() => {
        res.status(200).json({ message: 'Objet modifié' })
    })
    .catch((error) => {
        res.status(400).json({ error });
    });
};

exports.deleteReceipt = (req, res, next) => {
    ReceiptModel.deleteOne({ _id: req.params.id })
    .then(() => {
        res.status(200).json({ message: "Objet supprimé" });
    })
    .catch((error) => {
        res.status(400).json({ error });
    });   
};

exports.getOneReceipt = (req, res, next) => {
    ReceiptModel.findOne({ _id: req.params.id })
    .then((receipt) => {
        res.status(200).json(receipt);
    })
    .catch(error => {
        res.status(404).json({ error });
    });
};

exports.getAllReceipts = (req, res, next) => {
    ReceiptModel.find()
    .then((receipt) => {
        res.status(200).json(receipt);
    })
    .catch((error) => {
        res.status(400).json({ error });
    });
};