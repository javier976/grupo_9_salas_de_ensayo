const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, ('./public/images'))
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
      }
});
const multerCursosMiddleware = multer({storage});

module.exports = multerCursosMiddleware;