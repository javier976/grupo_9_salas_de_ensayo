const { json } = require('express');
const fs = require('fs');
const path = require('path');

const cursosFilePath = path.join(__dirname, '../database/cursosData.json');
const cursos = JSON.parse(fs.readFileSync(cursosFilePath, 'utf-8'));

const controller = {
    listaCursos: (req, res) => {
        res.render('products/cursoDetalle', { cursos });
    },
    detalleCursos: (req, res) => {
        const cursoIndex = cursos.find(curso => curso.id == req.params.id);
        res.render('products/cursoDetalle', { cursoIndex });
    },
    productCart: (req, res) => {
        res.render('products/productCart');
    }
}

module.exports = controller;