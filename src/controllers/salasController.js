const { json } = require('express');
const fs = require('fs');
const path = require('path');

const salasFilePath = path.join(__dirname, '../database/salasData.json');
const salas = JSON.parse(fs.readFileSync(salasFilePath, 'utf-8'));

const controller = {
    listaSalas: (req, res) => {
        res.render('products/salaDetalle', { salas });
    },
    detalleSalas: (req, res) => {
        const salaIndex = salas.find(sala => sala.id == req.params.id);
        res.render('products/salaDetalle', { salaIndex });
    },
    productCart: (req, res) => {
        res.render('products/productCart');
    }
}

module.exports = controller;