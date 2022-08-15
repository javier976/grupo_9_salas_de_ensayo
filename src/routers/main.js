const express = require('express');

const mainController = require('../controllers/mainController');

const router = express.Router();

router.get('/', mainController.index);
router.get('/productCart', mainController.carrito);
router.get('/productDetail', mainController.detalle);
router.get('/register', mainController.registro);

module.exports = router;