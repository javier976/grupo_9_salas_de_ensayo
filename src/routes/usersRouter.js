const express = require('express');
const usersController = require('../controllers/usersController');

//Middlewares
const validationsMiddleWare = require('../middlewares/validationsMiddleWare');
const guestMiddleWare = require('../middlewares/guestMiddleWare');
const logDBMiddleWare = require('../middlewares/logDBMiddleWare'); //Ruta de middleWares para DB


const router = express.Router();

router.get('/login', usersController.login);

router.post('/login', validationsMiddleWare, usersController.processLogin);

router.get('/register', usersController.registro);

router.post('/register', validationsMiddleWare, usersController.processRegister);


module.exports = router;

