const express = require('express');
const { body } = require('express-validator');

const salasController = require('../controllers/salasController');

const router = express.Router();

const authMiddleware = require('../middleWares/authMiddleware');
const multerCursosMiddleware = require('../middleWares/multerCursosMiddleware');
const updatedSalasValidationsMiddleware = require('../middleWares/updatedSalasValidationsMiddleware');
const salasValidationsMiddleware = require('../middleWares/salasValidationsMiddleware');


router.get('/', salasController.listaSalas);

router.get('/crearSala', authMiddleware, salasController.createSala);

router.post('/crearSala', salasValidationsMiddleware, multerCursosMiddleware.single('img'), salasController.newSala);

router.get('/editarSala/:id', authMiddleware, salasController.editSala);

router.post('/editarSala/:id', updatedSalasValidationsMiddleware, multerCursosMiddleware.single('img'), salasController.updatedSala);

router.delete('/deleteSala/:id', authMiddleware, salasController.deleteSala);

router.get('/:id', salasController.detalleSalas);

module.exports = router;