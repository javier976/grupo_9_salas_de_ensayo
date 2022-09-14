const fs = require('fs');
const path = require('path');

const salasFilePath = path.join(__dirname, '../database/salasData.json');
const salas = JSON.parse(fs.readFileSync(salasFilePath, 'utf-8'));

const cursosFilePath = path.join(__dirname, '../database/cursosData.json');
const cursos = JSON.parse(fs.readFileSync(cursosFilePath, 'utf-8'));

const about = {
    titulo: '1771 Studios, un espacio',
    descripcion: 'creado por y para músicos',
}


const mainController = {
    index: (req, res) => {
        res.render('index', { about: about, cursos: cursos, salas: salas});
    },
    register: (req, res) => {
        res.render('register');
    },
    productCart: (req, res) => {
        res.render('products/productCart');
    }
}

module.exports = mainController;