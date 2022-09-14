const express = require('express');
const path = require('path');
const app = express();
const pathPublic = path.join(__dirname, "../public");
const methodOverride = require('method-override');
const logMiddleWare = require('./middleWares/logDBMiddleWare')


const mainRouter = require('./routes/mainRouter');
const salasRouter = require('./routes/salasRouter')
const cursosRouter = require('./routes/cursosRouter');
const usersRouter = require('./routes/usersRouter');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(logMiddleWare);
app.use(express.static(pathPublic));
app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/', mainRouter);
app.use('/salas', salasRouter);
app.use('/cursos', cursosRouter);
app.use('/users', usersRouter);

app.use((req, res, next) => {
    res.status(404).render('products/not-found')
});

app.listen(3030, () => {
    console.log("servidor iniciado en: http://localhost:3030");
});