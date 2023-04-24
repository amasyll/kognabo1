const express = require('express');
const router = express.Router();

const userService = require('../controllers/user');
const multer = require('../middleware/multer-config')

router.post('/Oauth/signup', multer, userService.signup);
router.post('/Oauth/login', userService.login);
router.get('/user/:id', userService.getUserById);
router.get('/users', userService.getAllUsers);

module.exports = router;