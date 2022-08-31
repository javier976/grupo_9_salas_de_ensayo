const express = require('express');

const router = express.Router();

const salasController = require('../controllers/salasController');

router.get('/productCart', salasController.productCart);
router.get('/', salasController.listaSalas);
router.get('/:id/', salasController.detalleSalas);

module.exports = router;