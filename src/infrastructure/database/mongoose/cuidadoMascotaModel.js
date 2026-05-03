const mongoose = require('mongoose');

const cuidadoMascotaSchema = new mongoose.Schema(
  {
    id_mascota: {
      type: String,
      required: true,
      trim: true
    },
    recomendacion_mascota: {
      type: String,
      required: true,
      trim: true
    },
    cuidado_mascota: {
      type: String,
      required: true,
      trim: true
    },
    gramo_alimentacion: {
      type: Number,
      required: true,
      min: 0
    },
    frecuencia_cuidado: {
      type: String,
      required: true,
      trim: true
    },
    nombre_responsable: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    collection: 'cuidado_mascota',
    timestamps: true
  }
);

const CuidadoMascotaModel = mongoose.model('CuidadoMascota', cuidadoMascotaSchema);

module.exports = { CuidadoMascotaModel };
