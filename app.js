const express = require('express')
const path = require('path');
const app = express();
const publicPath = path.join(__dirname, "./public");

app.use(express.static(publicPath));

app.listen(3030,() => {
    console.log("servidor iniciado en: http://localhost:3030");
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/productCart', (req, res) => {
    res.sendFile(__dirname + '/views/productCart.html');
});

app.get('/productDetail', (req, res) => {
    res.sendFile(__dirname + '/views/productDetail.html');
});

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/views/register.html');
});