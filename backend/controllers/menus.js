const MenuModel = require('../models/MenuModel');
const fs = require('fs');

exports.createMenu = (req, res, next) => {
    const menuObject = JSON.parse(req.body.menu);
    const menu = new MenuModel({
        ...menuObject,
        imageUrl: `${req.protocol}://${req.get('host')}/images/items/${req.file.filename}`
    });
    menu.save()
    .then(() => {
        res.status(201).json({ message: 'Objet enregistré' });
    })
    .catch((error) => {
        res.status(400).json({ error });
    });
};

exports.modifyMenu = (req, res, next) => {
    const menuObject = req.file ? 
        {
          ...JSON.parse(req.body.menu),
          imageUrl: `${req.protocol}://${req.get("host")}/images/items/${req.file.filename}`,
        }
        : { ...req.body };
    MenuModel.updateOne({ _id: req.params.id }, { ...menuObject, _id: req.params.id })
    .then(() => {
        res.status(200).json({ message: 'Objet modifié' })
    })
    .catch((error) => {
        res.status(400).json({ error });
    });
};

exports.deleteMenu = (req, res, next) => {
    MenuModel.findOne({ _id: req.params.id })
    .then(catalogue => {
        const filename = menu.imageUrl.split('/images/items/')[1];
        fs.rmdir(`images/items/${filename}`, () => {
            MenuModel.deleteOne({ _id: req.params.id })
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

exports.getOneMenu = (req, res, next) => {
    MenuModel.findOne({ _id: req.params.id })
    .then((catalogue) => {
        res.status(200).json(catalogue);
    })
    .catch(error => {
        res.status(404).json({ error });
    });
};

exports.getAllMenus = (req, res, next) => {
    MenuModel.find()
    .then((menus) => {
        res.status(200).json(menus);
    })
    .catch((error) => {
        res.status(400).json({ error });
    });
};