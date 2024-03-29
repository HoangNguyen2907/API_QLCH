var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var employeesRouter = require('./routes/employees/employeesRouter')
var authRouter = require('./routes/auth/authRouter')
var ownerRouter = require('./routes/owner/ownerRouter')

var app = express();
var db = require('./models/db')
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', employeesRouter);
app.use('/auth', authRouter)
app.use('/owner', ownerRouter)
db.authenticate()
  .then(() => console.log('database connected...'))
  .catch(err =>console.log('Error: ' + err))

  app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
