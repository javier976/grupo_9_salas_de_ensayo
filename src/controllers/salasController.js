// const { json } = require('express');
// const fs = require('fs');
// const path = require('path');

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

        try {
            let resultValidation = validationResult(req);
            // console.log(resultValidation);
            if (resultValidation.errors.length > 0) {
                if (req.file) {
                    req.file ? fs.unlinkSync(path.join(__dirname, '../public/images/' + req.file.filename)) : null;
                }
                return res.render('admin/crearSala', {
                    oldData: req.body,
                    errors: resultValidation.mapped()
                }, 'Error en la creacion');
            
            } else {
                let newSala = {
                    titulo: req.body.titulo,
                    metros_cuadrados: req.body.metros_cuadrados,
                    turno_sala: req.body.turno_sala,
                    precio: req.body.precio,
                    imagen: req.file.filename,
                    descripcion: req.body.descripcion
                };

                await Salas.create(newSala);


                res.redirect('products/listaSalas');
            }

        } catch (error) {

            console.log('falle en salascontroller.upload' + error);
            return res.send(error);

        };
    },
    editSala: async (req, res) => {
        let sala = await Salas.findOne({ where: { id: req.params.id } })
        res.render('admin/editarSala', { sala });

    },
    updatedSala: async (req, res) => {
        try {
            let editedSala = await Salas.findByPk(req.params.id);

            await Salas.update({
                titulo: req.body.titulo,
                metros_cuadrados: req.body.metros_cuadrados,
                turno_sala: req.body.turno_sala,
                precio: req.body.precio,
                imagen: req.body.imagen,
                descripcion: req.body.descripcion
            }, {
                where: {
                    id: editedSala.id
                }
            });

            return res.redirect(`/salass/${editedSala.id}`)

        } catch (error) {
            console.log('falle en prodctcontroller.update: ' + error);
            return res.json(error);
        }

    },
    deleteSala: (req, res) => {
        Salas.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect('products/listaSalas');
    }
}

module.exports = controller;