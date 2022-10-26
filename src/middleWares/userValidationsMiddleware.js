const path = require('path');
const { body } = require('express-validator');

module.exports = [
	body('nombre').notEmpty().withMessage('Tienes que escribir un nombre'),
	
	body('apellido').notEmpty().withMessage('Tienes que escribir un apellido'),	

	body('email').notEmpty().withMessage('Tienes que escribir un correo electrónico').bail().isEmail().withMessage('Debes escribir un formato de correo válido'),
	
	body('direccion').notEmpty().withMessage('Completar'),
	
	body('ciudad').notEmpty().withMessage('Completar'),
	
	body('estado').notEmpty().withMessage('Completar'),
	
	body('pais').notEmpty().withMessage('Completar'),
	
	body('codigo_postal').notEmpty().withMessage('Completar'),
	
	body('telefono').notEmpty().withMessage('Completar').bail()
	.isLength({max: 12}).withMessage('Superaste el límite de caracteres'),
	
	body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
	
	body('imageUser').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.gif'];
        
        if (!file) {
            throw new Error('Debe subir una imagen de perfil.')
        } else {
            let fileExtension = path.extname(file.originalname);
        if (!acceptedExtensions.includes(fileExtension)){
            throw new Error (`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}.`);
            }
        }  

        return true;
    })
]