// const { json } = require('express');
const fs = require('fs');
const path = require('path');

// const salasFilePath = path.join(__dirname, '../database/salasData.json');
// const salas = JSON.parse(fs.readFileSync(salasFilePath, 'utf-8'));

const db = require('../database/models');
const sequelize = db.sequelize;
const { validationResult } = require('express-validator');

const Salas = db.Sala;

const controller = {
    listaSalas: (req, res) => {
        Salas.findAll()
            .then(function (salas) {
                res.render('products/listaSalas', { salas });
            })
    },
    detalleSalas: async (req, res) => {
        let sala = await Salas.findOne({ where: { id: req.params.id } })
        res.render('products/detalleSalas', { sala });
    },
    createSala: (req, res) => {
        const salas = Salas.findAll();
        res.render('admin/crearSala', { salas });
    },
    newSala: async (req, res) => {
        await Salas.create({
            titulo: req.body.titulo,
            metros_cuadrados: req.body.metros_cuadrados,
            turno_sala: req.body.turno_sala,
            precio: req.body.precio,
            images: req.file.filename,
            descripcion: req.body.descripcion
        });
        res.redirect('/');
    },
    editSala: async (req, res) => {
        let sala = await Salas.findOne({ where: { id: req.params.id } })
        res.render('admin/editarSala', { sala });

    },
    updatedSala: async (req, res) => {
        try {
            await Salas.findOne({ where: { id: req.params.id } });

            await Salas.update({
                titulo: req.body.titulo,
                metros_cuadrados: req.body.metros_cuadrados,
                turno_sala: req.body.turno_sala,
                precio: req.body.precio,
                images: req.file.filename,
                descripcion: req.body.descripcion
            }, {
                where: {
                    id: req.params.id
                }
            });

            return res.redirect('/')

        } catch (error) {
            console.log('falle en prodctcontroller.update: ' + error);
            return res.json(error);
        }

    },
    deleteSala: async (req, res) => {
        try {
            const salaId = req.params.id
            await Salas.destroy({
                where: {
                    id: salaId
                }
            });

            res.redirect('/')
        } catch (error) {
            console.log('falle en deleteCurso: ' + error);
            return res.json(error);
        }
    }
}

module.exports = controller;