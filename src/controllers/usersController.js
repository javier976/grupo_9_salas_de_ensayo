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
            // console.log(resultValidation);
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
                    profile_image: req.file.filename,
                    categoria_usuario_id: 2,
                    password: bcryptjs.hashSync(req.body.password)
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
        } catch (error) {

            console.log('Falla en el controlador: proccesLogin');
            return res.send(error);
        }

    },

    edit: async (req, res) => {
        try {

            let user = await Users.findOne({ where: { id: req.params.id } })
            res.render('admin/userEdit', { user })
        } catch (error) {
            console.log("Fallo en el edit: " + error);
            return res.json(error);
        }
    },

    update: function (req, res) {
        // try {
            // const userId = req.params.id;

            Users.update = ({
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                direccion: req.body.direccion,
                ciudad: req.body.ciudad,
                estado_provincia: req.body.estado_provincia,
                pais: req.body.pais,
                codigo_postal: req.body.codigo_postal,
                telefono: req.body.telefono,
                email: req.body.email,
                profile_image: req.file?.filename
            }, {
                where: {
                    id: req.params.id
                }
            });
            res.redirect('users/' + req.params.id);
            // const passwordToUpdate = {
            //     password: bcryptjs.hashSync(req.body.newPassword)
            // }
            // Users.update(userToUpdate, { where: { id: userId } });

        // } catch (error) {
        //     res.send(error)
        // }
    },

    // updatePassword: async function (req, res) {
    //     try {
    //         const userId = req.params.id;

    //         const passwordToUpdate = {
    //             password: bcryptjs.hashSync(req.body.newPassword)
    //         }
    //         await Users.update(passwordToUpdate, { where: { id: userId } });
    //         return res.redirect('users/perfil');

    //     } catch (error) {
    //         res.send(error)
    //     }
    // },

    // update: async (req, res) => {
    //     console.log('aca estoy');
    //     try {
    //         // Salas.update({
    //         //     titulo: req.body.titulo,
    //         //     metros_cuadrados: req.body.metros_cuadrados,
    //         //     turno_sala: req.body.turno_sala,
    //         //     precio: req.body.precio,
    //         //     imagen: req.body.imagen,
    //         //     descripcion: req.body.descripcion
    //         // }, {
    //         //     where: {
    //         //         id: req.params.id
    //         //     }
    //         // });
    //         // res.redirect('products/listaSalas' + req.params.id);

    //         let user = await Users.findOne({ where: { id: req.params.id } });
    //         let errors = validationResult(req)
    //         if (!errors.isEmpty()) {
    //             errors = errors.mapped()

    //             let oldData = {
    //                 nombre: req.body.nombre,
    //                 apellido: req.body.apellido,
    //                 direccion: req.body.direccion,
    //                 ciudad: req.body.ciudad,
    //                 estado_provincia: req.body.estado_provincia,
    //                 pais: req.body.pais,
    //                 codigo_postal: req.body.codigo_postal,
    //                 telefono: req.body.telefono,
    //                 email: req.body.email,
    //                 profile_image: req.body.profile_image,
    //             };

    //             return res.render('admin/userEdit', { user, errors, oldData })
    //         }
    //         let updatedData = {
    //             nombre: req.body.nombre,
    //             apellido: req.body.apellido,
    //             direccion: req.body.direccion,
    //             ciudad: req.body.ciudad,
    //             estado_provincia: req.body.estado_provincia,
    //             pais: req.body.pais,
    //             codigo_postal: req.body.codigo_postal,
    //             telefono: req.body.telefono,
    //             email: req.body.email,
    //             profile_image: req.body.profile_image
    //         };
    //         req.body.password ? updatedData.password = bcryptjs.hashSync(req.body.password, 10) : null;

    //         await Users.update(updatedData, {
    //             where: {
    //                 id: Users.id
    //             }
    //         });
    //         return res.redirect('/users/perfil');

    //     } catch (error) {
    //         console.log("Falle en userController.update: " + error);
    //         return res.json(error);
    //     }
    // },

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


