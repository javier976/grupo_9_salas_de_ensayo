const { json } = require('express');
const fs = require('fs');
const path = require('path');

const salasFilePath = path.join(__dirname, '../database/salasData.json');
const salas = JSON.parse(fs.readFileSync(salasFilePath, 'utf-8'));

const controller = {
    listaSalas: (req, res) => {
        res.render('products/listaSalas', { salas });
    },
    detalleSalas: (req, res) => {
        const sala = salas.find(sala => sala.id == req.params.id);
        res.render('products/detalleSalas', { sala });
    },
    delete: (req, res) => {
        const allSalas = salas.filter(sala => sala.id != req.params.id);
        fs.writeFileSync(salasFilePath, JSON.stringify(allSalas, null, '  '));
        res.redirect('/products/');
    }
}

module.exports = controller;