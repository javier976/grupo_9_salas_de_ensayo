const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, "../logs/logDB.txt" );

function logDBMiddleware  (req, res, next) {

    fs.appendFileSync(logFilePath, 'Se creó un registro' + req.url + '\n' );

    next();
}

module.exports = logDBMiddleware;