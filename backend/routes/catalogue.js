const express = require('express');
const router = express.Router();

const catalogueService = require('../controllers/catalogue');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.post('/', auth, multer, catalogueService.createCatalogue);
router.put('/:id', auth, multer, catalogueService.modifyCatalogue);
router.delete('/:id', auth, catalogueService.deleteCatalogue);
router.get('/:id', auth, catalogueService.getOneCatalogue);
router.get('/', auth, catalogueService.getAllCatalogues);

module.exports = router;