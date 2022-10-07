const express = require('express');

const router = express.Router();

const cursosController = require('../controllers/cursosController');



router.get('/', cursosController.listaCursos);
router.get('/:id/', cursosController.detalleCursos);
router.delete('/delete', cursosController.delete);

module.exports = router;