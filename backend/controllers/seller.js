const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const SellerModel = require('../models/SellerModel');
const fs = require('fs');

exports.signup = (req, res) => {
    const sellerInfos = JSON.parse(req.body.formData);
    bcrypt.hash(sellerInfos.password, 10)
    .then((hash) => {
        const seller = new SellerModel({
            ...sellerInfos,
            imageUrl: `${req.protocol}://${req.get('host')}/images/users/${req.file.filename}`,
            password: hash
        })
        seller.save()
        .then(() => {
            res.status(201).json({ message: 'Utilisateur créé'});
        })
        .catch((error) => {
            res.status(400).json({ error });
        })
        console.log(seller)
    }).catch((error) => { 
        res.status(500).json({error: error || 'Une erreur s\'est produit'})
    })
};

exports.login = (req, res) => {
    SellerModel.findOne({ email: req.body.email})
    .then(seller => {
        if(!seller) {
            return res.status(401).json({ error: 'Utilisateur non trouvé'});
        }
        bcrypt.compare(req.body.password, seller.password)
        .then(valid => {
            if(!valid) {
                return res.status(401).json({ error: 'Mot de passe incorrect'})
            }
            res.status(200).json({
                sellerId: seller._id,
                token: jwt.sign(
                    { sellerId: seller._id },
                    'RANDOM_TOKEN_SECRET',
                    { expiresIn: '24h'}
                )
            });
        })
        .catch((error) => {
            res.status(500).json({ error })
        });
    }).catch((error) => {
        res.status(500).json({ error })
    });
};

exports.getSellerById = (req, res) => {
    SellerModel.findOne({ _id: req.params.id })
        .then((seller) => {
            res.status(200).json(seller);
        })
        .catch((error) => {
            res.status(404).json({ error });
        }
    );
};

exports.getAllSellers = (req, res) => {
    SellerModel.find()
        .then((seller) => {
            res.status(200).json(seller);
        })
        .catch((error) => {
            res.status(404).json({ error });
        }
    );
}