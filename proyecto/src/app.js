const express = require('express');
const app = express();
const methodOverride = require('method-override');

const peliculasRouter = require('../routes/peliculasRouter');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/vistas');

app.use (express.urlencoded({extended: false}));
app.use (methodOverride("_method"));
app.use (express.json());
app.use ('/', peliculasRouter);

app.listen (3000, ()=> console.log ('Servidor corriendo en el puerto 3000'));

try{
    require('./module/with/syntax/error')
  }catch(e){
    console.log(e.stack)
  }

  module.exports = app;


/*
const path = require('path');
// app.use (express.static(_dirname + '/public');*/