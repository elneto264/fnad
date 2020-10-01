const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { mongoose } = require('./database/db');


/* cargar los modulos desde el archivo index.js en models*/
const { Documento } = require('./database/model');


// cargar los middlewares
app.use(bodyParser.json());


// CORS middleware
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/* route handlres*/


/**
 * 
 * Get list /list
 * purpose: get all list
 * 
 */
app.get('/list', (req , res ) => {
  // regresar el array con todas las listas
  Documento.find({}).then((documento)=> {
      res.send(documento);
  });
});

/**
 * 
 * Post /list
 * pirpose mandar la informacion
 */

app.post('/list', (req , res ) => {
  // crear una lista y regrear esa informacion con sus ID, la cual se pasara con un Json
  let titulo = req.body.titulo;

  let newTitulo = new Documento ({
    titulo
  });
  newTitulo.save().then((listDoc) =>{

    res.send(listDoc);
  })
});


/**
 * get update
 * esta es para actualizar las listas
 * 
 */
app.patch('/list/:id', (req , res ) => {
  // para actualizar una lista con los nuevos valores
  Documento.findByIdAndUpdate({ _id: req.params.id},{
    $set: req.body
  }).then(() => {
    res.sendStatus(200);
  });
});


/**
 * Get delete
 * para borrar las entradas
 */
app.delete('/list/:id', (req , res) => {
//lo que queremos borrar va aqui
  Documento.findByIdAndRemove({
    _id: req.params.id
  }).then((removelistDoc) => {
    res.send(removelistDoc);
  })
});

app.listen(8000, () => {
  console.log("servidor escuchando en 8000");
});