const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const CustomerModel = require('../models/CustomerModel');
const fs = require('fs');

exports.signup = (req, res) => {
    const customerInfos = JSON.parse(req.body.formData);
    bcrypt.hash(userInfos.password, 10)
    .then((hash) => {
        const customer = new CustomerModel({
            ...customerInfos,
            imageUrl: `${req.protocol}://${req.get('host')}/images/users/${req.file.filename}`,
            password: hash
        })
        customer.save()
        .then(() => {
            res.status(201).json({ message: 'Utilisateur créé'});
        })
        .catch((error) => {
            res.status(400).json({ error });
        })
        console.log(user)
    }).catch((error) => { 
        res.status(500).json({error: error || 'Une erreur s\'est produit'})
    })
};

exports.login = (req, res) => {
    CustomerModel.findOne({ email: req.body.email})
    .then(customer => {
        if(!customer) {
            return res.status(401).json({ error: 'Utilisateur non trouvé'});
        }
        bcrypt.compare(req.body.password, customer.password)
        .then(valid => {
            if(!valid) {
                return res.status(401).json({ error: 'Mot de passe incorrect'})
            }
            res.status(200).json({
                customerId: customer._id,
                token: jwt.sign(
                    { customerId: customer._id },
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

exports.getUserById = (req, res) => {
    CustomerModel.findOne({ _id: req.params.id })
        .then((customer) => {
            res.status(200).json(customer);
        })
        .catch((error) => {
            res.status(404).json({ error });
        }
    );
};

exports.getAllCustomers = (req, res) => {
    CustomerModel.find()
        .then((customer) => {
            res.status(200).json(customer);
        })
        .catch((error) => {
            res.status(404).json({ error });
        }
    );
}