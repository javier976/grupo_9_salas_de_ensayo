// const fs = require('fs');
// const path = require('path');
const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');

const db = require('../database/models');
const sequelize = db.sequelize;

const Users = require('../models/User');

const controller = {
    registro: (req, res) => {
        res.render('users/register');
    },

    processRegister: (req, res) => {

        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render('users/register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }
        const userInDB = Users.findByField('email', req.body.email);
        if (userInDB) {
            res.send('error correo');
            return res.render('users/register', {
                errors: {
                    email: {
                        msg: 'Este email ya se encuentra registrado'
                    }
                },
                oldData: req.body
            });
        }

        const userToCreate = {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            direccion: req.body.direccion,
            ciudad: req.body.ciudad,
            estado_provincia: req.body.estado_provincia,
            pais: req.body.pais,
            codigo_postal: req.body.codigo_postal,
            telefono: req.body.telefono,
            email: req.body.email,
            password: bcryptjs.hashSync(req.body.password, 10),
            profile_image: req.body.profile_image,
            categoria_usuario_id: 2
        }

        const userCreated = Users.create(userToCreate);

        return res.redirect('/');
    },

    login: (req, res) => {
        res.render('users/login');
    },

    processLogin:  (req, res) => {
            
        const userToLogin = Users.findByField('username', req.body.username);

        if (userToLogin) {

            const isCorrectPassword = bcryptjs.compareSync(req.body.password, userToLogin.password);

            if (isCorrectPassword) {

                delete userToLogin.password;
                req.session.userLogged = userToLogin;

                if (req.body.remember_user) {
                    res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 2 });
                };
                return res.redirect('/')
            }
            return res.render('users/login', {
                errors: {
                    email: {
                        msg: 'Las credenciales son inválidas'
                    }
                }
            })
        }

        return res.render('users/login', {
            errors: {
                email: {
                    msg: 'Email no registrado'
                }
            }
        })
    },

    profile: (req, res) => {
        return res.render('users/perfil', {
            user: req.session.userLogged,
        });
    },

    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/');
    }
}

module.exports = controller;


