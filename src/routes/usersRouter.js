const express = require('express');
const multer = require('multer');
const { body } = require('express-validator')
const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    },
});

const upload = multer({ storage });

const logMiddleWare = require('../middleWares/logDBMiddleWare')

const usersController = require('../controllers/usersController');

router.get('/', usersController.login);
router.post('/', logMiddleWare, usersController.logged);
router.get('/register', usersController.registro);
router.post('/register', usersController.createUser);


module.exports = router;

