var debug = require('debug');
var express = require('express');
var path = require('path');
const fs = require('fs');
var logger = require('morgan');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fisi');

var index = require('./routes/index');
var articles = require('./routes/articles');
var users = require('./routes/users');
var pages = require('./routes/pages');
var presses = require('./routes/presses');
var login = require('./routes/login');

var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {    
    var now = new Date().toString();
    var log = `${now} : ${req.method} ${req.url}`;
    console.log(log);
    fs.appendFile('server.log', log + '\n', (err) => {
        if (err) {
            console.log(err)
        }
    })
    next();
});

app.use('/', index);
app.use('/api/articles', articles);
app.use('/api/pages', pages);
app.use('/api/presses', presses);
app.use('/api/users', users);
app.use('/api/login', login);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;