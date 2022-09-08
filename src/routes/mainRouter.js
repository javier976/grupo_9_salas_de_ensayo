const express = require('express');

const { body } = require('express-validator')

const router = express.Router();

const mainController = require('../controllers/mainController');

router.get('/', mainController.index);


module.exports = router;