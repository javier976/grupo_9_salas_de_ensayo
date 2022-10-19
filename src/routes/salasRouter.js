const express = require('express');
const { body } = require('express-validator');

const salasController = require('../controllers/salasController');
const uploadFile = require('../middlewares/multerMiddleware');

const router = express.Router();

router.get('/', salasController.listaSalas);

router.get('/crearSala', salasController.createSala);

router.post('/crearSala', uploadFile.single('img', salasController.newSala));

router.get('/detalleSalas/:id', salasController.detalleSalas);

router.get('/editarSala/:id', salasController.editSala);

router.delete('/deleteSala', salasController.deleteSala);

module.exports = router;