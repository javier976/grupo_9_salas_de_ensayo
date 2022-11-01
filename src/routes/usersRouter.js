const express = require('express');
const usersController = require('../controllers/usersController');

//Middlewares
const authMiddleware = require('../middleWares/authMiddleware');
const guestMiddleware = require('../middleWares/guestMiddleware');
const multerUserMiddleware = require('../middleWares/multerUserMiddleware');
const userValidationsMiddleware = require('../middleWares/userValidationsMiddleware');
// const logDBMiddleware = require('../middleWares/logDBMiddleware'); //Ruta de middleWares para DB


const router = express.Router();

//LOGIN
router.get('/login', guestMiddleware, usersController.login);

router.post('/login', usersController.processLogin);

//REGISTER
router.get('/register', guestMiddleware, usersController.registro);

router.post('/register', multerUserMiddleware.single('imageUser'), userValidationsMiddleware, usersController.processRegister);

//PERFIL
router.get('/profile', authMiddleware, usersController.profile && usersController.allUsers);

//EDIT
router.get('/edit/:id', usersController.edit);
router.put('/edit/:id', multerUserMiddleware.single('imageUser'), userValidationsMiddleware, usersController.update);

//LOGOUT
router.get('/logout/', usersController.logout);


module.exports = router;

