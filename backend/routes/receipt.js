const express = require('express');
const router = express.Router();

const receiptService = require('../controllers/receipt');
const auth = require('../middleware/auth');

router.post('/', auth, receiptService.createReceipt);
router.put('/:id', auth, receiptService.modifyReceipt);
router.delete('/:id', auth, receiptService.deleteReceipt);
router.get('/:id', auth, receiptService.getOneReceipt);
router.get('/', auth, receiptService.getAllReceipts);

module.exports = router;