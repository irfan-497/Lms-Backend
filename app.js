var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const studentRouter=require('./routes/student')
const teacherRouter=require('./routes/teacher')
const courseRouter=require('./routes/course')
const database=require('../myapp/Common/dbconnection')
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/students',studentRouter)
app.use('/teachers',teacherRouter)
app.use('/courses', courseRouter)
// catch 404 and forward to error handler
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
// const express =require('express');
// const path = require('path');
// const app=express();
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');
// app.get("/",(req,res)=>{
//   res.send("Hello from express")
// })

// app.listen(8000,()=>{
//   console.log("listing at port 8000");
// })

// module.exports=app
