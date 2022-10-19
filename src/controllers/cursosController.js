// const { json } = require('express');
// const fs = require('fs');
// const path = require('path');

// const cursosFilePath = path.join(__dirname, '../database/cursosData.json');
// const cursos = JSON.parse(fs.readFileSync(cursosFilePath, 'utf-8'));
const db = require('../database/models');
const sequelize = db.sequelize;

const Cursos = db.Curso;



const controller = {
    listaCursos: (req, res) => {
        res.render('products/listaCursos', { Cursos });
    },
    createCurso: (req, res) => {
        res.render('products/crearCurso');
    },
    newCurso: (req, res) => {
        const cursosClone = Cursos;
        const newCurso = {
            id: cursosClone.length,
            titulo: req.body.titulo,
            descripcionClase: req.body.descripcionClase,
            descripcionDocentes: req.body.descripcionDocentes,
            concierto: req.body.concierto,
            precio: req.body.precio,
            img: req.file.filename
        };
        cursosClone.push(newCurso);
        fs.writeFileSync(cursosFilePath, JSON.stringify(cursosClone, null, '  '));
        res.redirect('/products/');
    },
    detalleCursos: (req, res) => {
        const curso = Cursos.find(curso => curso.id == req.params.id);
        res.render('products/detalleCursos', { curso });
    },
    editCurso: (req, res) => {
        const curso = Cursos.find(curso => curso.id == req.params.id);
        res.render('products/editarCurso', { curso });
    },
    deleteCurso: (req, res) => {
        const allCursos = Cursos.filter(curso => curso.id != req.params.id);
        fs.writeFileSync(cursosFilePath, JSON.stringify(allCursos, null, '  '));
        res.redirect('products/deleteCurso');
    }
}

module.exports = controller;