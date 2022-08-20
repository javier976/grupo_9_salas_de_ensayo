const express = require('express');

const mainController = require('../controllers/mainController');

const router = express.Router();

router.get('/', mainController.index);
router.get('/productCart/:productoId/', mainController.carrito); // <-- DUDA
router.get('/detalle-sala/:productoId/', mainController.detalleSala); // <-- DUDA
router.get('/detalle-curso/:productoId/', mainController.detalleCurso);
router.get('/register', mainController.registro);

module.exports = router;