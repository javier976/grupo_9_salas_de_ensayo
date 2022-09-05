const { json } = require('express');
const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../database/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const controller = {
    registro: (req, res) => {
        res.render('users/register');
    },
    login: (req, res) => {
        res.render('/');
    },
    createUser: (req, res) => {
        const usersClone =  users;
        const newUser = {
            id: usersClone.length,
            name_user: req.body.name_user,
            email: req.body.email,
            password: req.body.password,
            repeat_password: req.body.repeat_password,
        };
        usersClone.push(newUser);
        fs.writeFileSync(usersFilePath, JSON.stringify(usersClone, null, '  '));
        res.redirect('/');
    },
    logged: (req, res) => {
        res.redirect('/');
    }
}

    module.exports = controller;


