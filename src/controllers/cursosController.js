const { json } = require('express');
const fs = require('fs');
const path = require('path');

const cursosFilePath = path.join(__dirname, '../database/cursosData.json');
const cursos = JSON.parse(fs.readFileSync(cursosFilePath, 'utf-8'));

const controller = {
    listaCursos: (req, res) => {
        res.render('products/listaCursos', { cursos });
    },
    detalleCursos: (req, res) => {
        const curso = cursos.find(curso => curso.id == req.params.id);
        res.render('products/detalleCursos', { curso });
    },
    delete: (req, res) => {
        const allCursos = cursos.filter(curso => curso.id != req.params.id);
        fs.writeFileSync(cursosFilePath, JSON.stringify(allCursos, null, '  '));
        res.redirect('/products/');
    },
    productCart: (req, res) => {
        res.render('products/productCart');
    }
}

module.exports = controller;