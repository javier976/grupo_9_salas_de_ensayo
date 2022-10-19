const { json } = require('express');
const fs = require('fs');
const path = require('path');

const salasFilePath = path.join(__dirname, '../database/salasData.json');
const salas = JSON.parse(fs.readFileSync(salasFilePath, 'utf-8'));

const controller = {
    listaSalas: (req, res) => {
        res.render('products/listaSalas', { salas });
    },
    createSala: (req, res) => {
        res.render('products/crearSala');
    },
    newSala: (req, res) => {
        const salasClone = salas;
        const newSala = {
            id: salasClone.length,
            titulo: req.body.titulo,
            descripcionCorta: req.body.descripcionCorta,
            descripcionDetallada: req.body.descripcionDetallada,
            precio: req.body.precio,
            img: req.file.filename
        };
        salasClone.push(newSala);
        fs.writeFileSync(salasFilePath, JSON.stringify(salasClone, null, '  '));
        res.redirect('/products/');
    },
    detalleSalas: (req, res) => {
        const sala = salas.find(sala => sala.id == req.params.id);
        res.render('products/detalleSalas', { sala });
    },
    editSala: (req, res) => {
        const sala = salas.find(sala => sala.id == req.params.id);
        res.render('products/editarSala', { sala });
    },
    deleteSala: (req, res) => {
        const allSalas = salas.filter(sala => sala.id != req.params.id);
        fs.writeFileSync(salasFilePath, JSON.stringify(allSalas, null, '  '));
        res.redirect('products/deleteSala');
    }
}

module.exports = controller;