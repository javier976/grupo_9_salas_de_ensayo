const express = require('express')
const path = require('path');
const app = express();
const publicPath = path.join(__dirname, "./public");
const mainRouter = require('./routers/mainRouter');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('./public'));
app.use('/', mainRouter);

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(3030, () => {
    console.log("servidor iniciado en: http://localhost:3030");
});