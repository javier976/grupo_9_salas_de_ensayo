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
    detalleCursos: async (req, res) => {
        let curso = await Cursos.findOne({ where: { id: req.params.id } })
        res.render('products/detalleCursos', { curso });

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
    editCurso: async (req, res) => {
        let curso = await Cursos.findOne({ where: { id: req.params.id } })
        res.render('admin/editarCurso', { curso });
    },
    updatedCurso: async (req, res) => {
        try {
            let editedCurso = await Cursos.findByPk(req.params.id);

            await Cursos.update({
                titulo: req.body.titulo,
                duracion: req.body.duracion,
                precio: req.body.precio,
            }, {
                where: {
                    id: editedCurso.id
                }
            });

            return res.redirect(`/cursos/${editedCurso.id}`)

        } catch (error) {
            console.log('falle en prodctcontroller.update: ' + error);
            return res.json(error);
        }

    },
    deleteCurso: async (req, res) => {
        try {
            let cursoId = req.params.id;
            let curso = await Cursos.findByPk(cursoId);
            res.render('deleteCurso', { curso });
        } catch (error) {
            console.log('falle en prodctcontroller.delete: ' + error);
            return res.json(error);
        }
    }
}

module.exports = controller;