const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, ('./public/images/users'))
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname + '-' + Date.now())
      }
});
const multerUserMiddleware = multer({storage});

module.exports = multerUserMiddleware;