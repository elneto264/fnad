const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Documento = new Schema({
  _id: { type: String
  },
  tema: {
    type: String
  },
  autor: {
    type: String
  },
  ano: {
    type: String
  },
  titulo: {
    type: String
  },
  nomRevista: {
    type: String
  },
  editora: {
    type: String
  },
  volumen: {
    type: String
  },
  doi: {
    type: String
  },
  fnad: {
    type: String
  },
  enlace: {
    type: String
  }
}, {collection: 'documentos'}
);

module.exports = mongoose.model('Documento', Documento)