const express = require('express');
const router = express.Router();

const CartService = require('../controllers/cart');
const auth = require('../middleware/auth');

router.post('/', auth, CartService.createCart);
router.put('/:id', auth, CartService.modifyCart);
router.delete('/:id', auth, CartService.deleteCart);
router.get('/:id', auth, CartService.getOneReceipt);
router.get('/', auth, CartService.getAllCarts);

module.exports = router;