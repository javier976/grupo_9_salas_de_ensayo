const express = require('express');
const { body } = require('express-validator');

const cursosController = require('../controllers/cursosController');
const uploadFile = require('../middlewares/multerMiddleware');

const router = express.Router();

router.get('/', cursosController.listaCursos);

// Muestra vista del create
router.get('/crearCurso', cursosController.createCurso);

// Carga los datos del nuevo curso
router.post('/crearCurso', uploadFile.single('img'), cursosController.newCurso);

// Detalle del curso
router.get('/:id/', cursosController.detalleCursos);

// Muestra la vista de edición del curso
router.get('/editarCurso/:id/', cursosController.editCurso);

router.delete('/deleteCurso/:id', cursosController.deleteCurso);




module.exports = router;