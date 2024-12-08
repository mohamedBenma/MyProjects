const createError = require('http-errors');
const express = require('express');

const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dbConnection = require('./controllers/db.controller.js');
const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
const accessRouter = require('./routes/access');
const errorMiddleware = require('./middlewares/error.middleware');
const objectRouter = require('./routes/objects')
const app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/access', accessRouter);
app.use('/user', userRouter);
app.use('/objects', objectRouter);
app.use(errorMiddleware)
module.exports = app;
