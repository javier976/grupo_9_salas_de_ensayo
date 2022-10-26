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
        Cursos.findAll()
            .then(function (cursos) {
                res.render('products/listaCursos', { cursos });
            })
    },
    detalleCursos: (req, res) => {
        Cursos.findByPk(req.params.id)
            .then(function (curso) {
                res.render('products/detalleCursos', { curso });
            })
    },
    createCurso: (req, res) => {
        const cursos = Cursos.findAll();
        res.render('admin/crearCurso', { cursos });
    },
    newCurso: (req, res) => {
        Cursos.create({
            titulo: req.body.titulo,
            duracion: req.body.duracion,
            precio: req.body.precio,
            imagen: req.body.imagen 
        });
        res.redirect('/products/listaCursos');
    },
    editCurso: (req, res) => {
        Cursos.findByPk(req.params.id)
        .then (function([curso]){
            res.render('admin/editarCurso', {curso})
        })
    },
    updatedCurso: (req, res) => {
        Cursos.update({
            titulo: req.body.titulo,
            duracion: req.body.duracion,
            precio: req.body.precio,
            imagen: req.body.imagen 
        }, {
            where: {
                id: req.params.id
            }
        });
        res.redirect('/products/listaCursos' + req.params.id);
    },
    deleteCurso: (req, res) => {
        Cursos.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect('/products/listaCursos');
    }
}

module.exports = controller;