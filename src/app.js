const express = require('express')
const path = require('path');
const app = express();
const publicPath = path.join(__dirname, "./public");
const mainRouter = require('./routers/mainRouter');

app.use(express.static('./public'));
app.use('/', mainRouter);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
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

app.listen(3030,() => {
    console.log("servidor iniciado en: http://localhost:3030");
});