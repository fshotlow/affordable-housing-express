var express = require('express');
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var compression = require('compression');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var compression = require('compression');
var helmet = require('helmet');

var app = express();

app.use(compression()); //Compress all routes
app.use(helmet());

// MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(logger('dev'));
//app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
