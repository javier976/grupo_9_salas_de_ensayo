const express = require('express');

const router = express.Router();

const usersController = require('../controllers/usersController');

router.get('/register', usersController.registro);
router.post('/register', usersController.createUser);

module.exports = router;

