const CatalogueModel = require('../models/CatalogueModel');
const fs = require('fs');

exports.createCatalogue = (req, res, next) => {
    const catalogueObject = JSON.parse(req.body.catalogue);
    const catalogue = new CatalogueModel({
        ...catalogueObject,
        imageUrl: `${req.protocol}://${req.get('host')}/images/items/${req.file.filename}`
    });
    catalogue.save()
    .then(() => {
        res.status(201).json({ message: 'Objet enregistré' });
    })
    .catch((error) => {
        res.status(400).json({ error });
    });
};

exports.modifyCatalogue = (req, res, next) => {
    const catalogueObject = req.file ? 
        {
            ...JSON.parse(req.body.catalogue),
            imageUrl: `${req.protocol}://${req.get("host")}/images/items/${req.file.filename}`,
        }
        : { ...req.body };
    CatalogueModel.updateOne({ _id: req.params.id }, { ...catalogueObject, _id: req.params.id })
    .then(() => {
        res.status(200).json({ message: 'Objet modifié' })
    })
    .catch((error) => {
        res.status(400).json({ error });
    });
};

exports.deleteCatalogue = (req, res, next) => {
    CatalogueModel.findOne({ _id: req.params.id })
    .then(catalogue => {
        const filename = catalogue.imageUrl.split('/images/items/')[1];
        fs.rmdir(`images/${filename}`, () => {
            CatalogueModel.deleteOne({ _id: req.params.id })
            .then(() => {
                res.status(200).json({ message: "Objet supprimé" });
            })
            .catch((error) => {
                res.status(400).json({ error });
            });
        });
    }).catch((error) => {
        res.status(500).json({ error });
    });    
};

exports.getOneCatalogue = (req, res, next) => {
    CatalogueModel.findOne({ _id: req.params.id })
    .then((catalogue) => {
        res.status(200).json(catalogue);
    })
    .catch(error => {
        res.status(404).json({ error });
    });
};

exports.getAllCatalogues = (req, res, next) => {
    CatalogueModel.find()
    .then((catalogues) => {
        res.status(200).json(catalogues);
    })
    .catch((error) => {
        res.status(400).json({ error });
    });
};