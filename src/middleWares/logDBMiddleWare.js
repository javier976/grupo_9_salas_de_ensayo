const fs = require('fs');
const path = require('path')

const logFilePath = path.join(__dirname, "../logs/logDB.txt" );

function logDBMiddleWare  (req, res, next) {

    fs.appendFileSync(logFilePath, 'Se creó un registro' + req.url + '\n' );

    next();
}

module.exports = logDBMiddleWare;