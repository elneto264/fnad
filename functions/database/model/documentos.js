const mongoose = require('mongoose');
const DocumentoSchema = mongoose.Schema({
    tema: {
      type: String,
      require: true,
      minlength:1,
      trim:true
    },
    autor: {
      type: String,
      require: true,
      minlength:1,
      trim:true
    },
    ano: {
      type: String,
      require: true,
      minlength:1,
      trim:true
    },
    titulo: {
      type: String,
      require: true,
      minlength:1,
      trim:true
    },
    nomRevista: {
      type: String,
      require: true,
      minlength:1,
      trim:true
    },
    editora: {
      type: String,
      require: true,
      minlength:1,
      trim:true
    },
    volumen: {
      type: String,
      require: true,
      minlength:1,
      trim:true
    },
    doi: {
      type: String,
      require: true,
      minlength:1,
      trim:true
    },
    fnad: {
      type: String,
      require: true,
      minlength:1,
      trim:true
    },
    enlace: {
      type: String,
      require: true,
      minlength:1,
      trim:true
    }
    // _docId:{
    //   type: mongoose.Types.ObjectId,
    //   require: true
    // }
  

});

const Documento = mongoose.model('Documento', DocumentoSchema);

module.exports = { Documento }