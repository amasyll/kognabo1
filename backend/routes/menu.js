const express = require('express');
const router = express.Router();

const menuService = require('../controllers/menus');
const auth = require('../middleware/auth');
const multer = require('../middleware/items-multer-config');

router.post('/', auth, multer, menuService.createMenu);
router.put('/:id', auth, multer, menuService.modifyMenu);
router.delete('/:id', auth, menuService.deleteMenu);
router.get('/:id', menuService.getOneMenu);
router.get('/', menuService.getAllMenus);

module.exports = router;