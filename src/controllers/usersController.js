// const fs = require('fs');
// const path = require('path');
const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');

const db = require('../database/models');
const sequelize = db.sequelize;

const Users = db.Usuario;

const controller = {
    registro: (req, res) => {
        res.render('users/register');
    },

    // async function (req, res) {
    //     try {
    //      const resultValidation = validationResult(req);

    //      if (resultValidation.errors.length > 0) {
    //          return res.render('users/register', {
    //              errors: resultValidation.mapped(),
    //              oldData: req.body,
    //          });
    //      }
    //      let userInDB = await Users.findOne({
    //          where:{
    //              email: req.body.email
    //          }
    //  });

    //      if (userInDB) {
    //          return res.render('users/login', {
    //              errors: {
    //                  email: {
    //                      msg: 'Este email ya está en uso'
    //                  }
    //              },
    //              oldData: req.body
    //          });
    //      }

    //      let userToCreate = {
    //         nombre: req.body.nombre,
    //                     apellido: req.body.apellido,
    //                     direccion: req.body.direccion,
    //                     ciudad: req.body.ciudad,
    //                     estado_provincia: req.body.estado_provincia,
    //                     pais: req.body.pais,
    //                     codigo_postal: req.body.codigo_postal,
    //                     telefono: req.body.telefono,
    //                     email: req.body.email,
    //                     profile_image: req.body.profile_image,
    //                     categoria_usuario_id: 2,
    //                     password: bcryptjs.hashSync(req.body.password),
    //      }


    //     const userCreated = await Users.create(userToCreate);


    //      return  res.redirect('/');

    //  } catch (error) {

    //      res.send(error)
    //  }
    //  },
    processRegister: async (req, res) => {
        try {
            let resultValidation = validationResult(req);

            if (resultValidation.errors.length > 0) {
                if (req.file) {
                    req.file ? fs.unlinkSync(path.join(__dirname, '../public/images/user/' + req.file.filename)) : null;
                }
                return res.render('users/register', {
                    oldData: req.body,
                    categoria_usuario_id: 2,
                    errors: resultValidation.mapped()
                }, 'Error en el registro');
            } else {
                let newUser = {
                    nombre: req.body.nombre,
                    apellido: req.body.apellido,
                    direccion: req.body.direccion,
                    ciudad: req.body.ciudad,
                    estado_provincia: req.body.estado_provincia,
                    pais: req.body.pais,
                    codigo_postal: req.body.codigo_postal,
                    telefono: req.body.telefono,
                    email: req.body.email,
                    profile_image: req.body.profile_image,
                    categoria_usuario_id: 2,
                    password: bcryptjs.hashSync(req.body.password),
                };

                await Users.create(newUser);


                res.redirect('/users/login');
            }

        } catch (error) {

            console.log('falle en usercontroller.upload' + error);
            return res.send(error);

        };
    },

    login: (req, res) => {
        res.render('users/login');
    },

    processLogin: async (req, res) => {
        try {

            let userData = req.body;

            let userToLogin = await Users.findOne({ where: { email: userData.email } });

            if (userToLogin) {
                if (userToLogin.password.substr(0, 7), '$2OS905$') {

                    let passwordOk = bcryptjs.compareSync(req.body.password, userToLogin.password)
                    if (passwordOk) {

                        delete userToLogin.password;

                        req.session.userLogged = userToLogin;

                        if (req.body.recordar) {
                            res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
                        }; //Creo cookie 'recordar'

                    }
                    return res.redirect('/');
                }
            } else {
                return res.render("users/login", { errors: { email: { msg: "Email incorrecto" }, password: { msg: "constraseña incorrecta" } }, oldDataLogin: userToLogin.email });
            }
        } catch (error) {

            console.log('Falla en el controlador: proccesLogin');
            return res.send(error);
        }

    },

    edit: async (req, res) => {
        try {
            let user = await Users.findByPk(req.params.id, {
                include: [
                    'userCategory'
                ]
            });
            return res.render('userEdit', { user })
        } catch (error) {
            console.log("Fallo en el edit: " + error);
            return res.json(error);
        }
    },

    update: async (req, res) => {
        try {
            let user = await Users.findByPk(req.params.id);
            let errors = validationResult(req)
            if (!errors.isEmpty()) {
                errors = errors.mapped()

                let oldData = {
                    nombre: req.body.nombre,
                    apellido: req.body.apellido,
                    direccion: req.body.direccion,
                    ciudad: req.body.ciudad,
                    estado_provincia: req.body.estado_provincia,
                    pais: req.body.pais,
                    codigo_postal: req.body.codigo_postal,
                    telefono: req.body.telefono,
                    email: req.body.email,
                    profile_image: req.body.profile_image,
                    categoria_usuario_id: 2
                };

                return res.render('userEdit', { user, errors, oldData })
            }
            let updatedData = {
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                direccion: req.body.direccion,
                ciudad: req.body.ciudad,
                estado_provincia: req.body.estado_provincia,
                pais: req.body.pais,
                codigo_postal: req.body.codigo_postal,
                telefono: req.body.telefono,
                email: req.body.email,
                profile_image: req.body.profile_image,
                categoria_usuario_id: 2
            };
            req.body.password ? updatedData.password = bcryptjs.hashSync(req.body.password, 10) : null;

            await Users.update(updatedData, {
                where: {
                    id: Users.id
                }
            });
            return res.redirect('/user/perfil');

        } catch (error) {
            console.log("Falle en userController.update: " + error);
            return res.json(error);
        }
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
    },

    allUsers: async (req, res) => {
        try {
            const users = await Users.findAll();

            return res.render('./users/profile', { users })
        } catch (error) {
            res.send(error)
        }
    }
}

module.exports = controller;


