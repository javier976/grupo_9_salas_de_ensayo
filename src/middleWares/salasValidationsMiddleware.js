const path = require('path');
const { body } = require('express-validator');

module.exports = [
    body('titulo')
        .notEmpty()
        .withMessage('Campo Incompleto'),

    body('metros_cuadrados')
        .notEmpty()
        .withMessage('Campo Incompleto'),

    body('turno_sala')
        .notEmpty()
        .withMessage('Campo Incompleto'),

    body('precio')
        .notEmpty()
        .withMessage('Campo Incompleto'),

    body('imagenSala')
        .custom((value, { req }) => {
            let file = req.file;
            let acceptedExtensions = ['.jpg', '.jpge', '.png'];

            if (!file) {
                throw new Error('Debe subir una imagen')
            } else {
                let fileExtension = path.extname(file.originalname);
                if (!acceptedExtensions.includes(fileExtension)) {
                    throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}.`);
                }
            }
            return true;
        }),

    body('descripcion')
        .notEmpty()
        .withMessage('Campo Incompleto'),
]