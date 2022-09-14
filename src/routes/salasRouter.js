const express = require('express');

const router = express.Router();

const salasController = require('../controllers/salasController');


router.get('/', salasController.listaSalas);
router.get('/detalleSalas/:id', salasController.detalleSalas);
router.delete('/delete/:id', salasController.delete);

module.exports = router;