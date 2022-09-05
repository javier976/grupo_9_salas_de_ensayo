const express = require('express');

const router = express.Router();

const salasController = require('../controllers/salasController');

router.get('/productCart', salasController.productCart);
router.get('/', salasController.listaSalas);
router.get('/detalle/:id/', salasController.detalleSalas);

module.exports = router;