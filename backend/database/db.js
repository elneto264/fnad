const { Module } = require('module');
const mongoose = require('mongoose');
const { Documento } = require('./model/documentos');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://infofnad:biologia@fnad.ea9vu.mongodb.net/fnad?retryWrites=true&w=majority', {useNewUrlParser: true})
  .then(() => { console.log('se conecto a la base de datos');
  }).catch((e) =>{ console.log(" Error al conectarse a la base de datos");
  console.log(e);
  });

  // para evitar los warning de mongoose

  mongoose.set('useCreateIndex', true);
  mongoose.set('useFindAndModify', false);

  module.exports = {
    mongoose
  };