const path = require('path');

const controller = {
    index: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/home.html'));
    },
    carrito: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/productCart.html'));
    },
    detalle: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/productDetail.html'));
    },
    registro: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/register.html'));
    }
}

module.exports = controller;