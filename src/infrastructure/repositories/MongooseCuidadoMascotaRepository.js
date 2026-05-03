const { CuidadoMascotaRepository } = require('../../domain/repositories/CuidadoMascotaRepository');
const { CuidadoMascota } = require('../../domain/entities/CuidadoMascota');
const { CuidadoMascotaModel } = require('../database/mongoose/cuidadoMascotaModel');

class MongooseCuidadoMascotaRepository extends CuidadoMascotaRepository {
  async create(data) {
    const document = await CuidadoMascotaModel.create(data);
    return this.toDomain(document);
  }

  async findAll() {
    const documents = await CuidadoMascotaModel.find().sort({ createdAt: -1 });
    return documents.map((document) => this.toDomain(document));
  }

  async findById(id) {
    const document = await CuidadoMascotaModel.findById(id);
    return document ? this.toDomain(document) : null;
  }

  async update(id, data) {
    const document = await CuidadoMascotaModel.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true
    });

    return document ? this.toDomain(document) : null;
  }

  async delete(id) {
    const document = await CuidadoMascotaModel.findByIdAndDelete(id);
    return document ? this.toDomain(document) : null;
  }

  toDomain(document) {
    return new CuidadoMascota({
      id: document._id.toString(),
      id_mascota: document.id_mascota,
      recomendacion_mascota: document.recomendacion_mascota,
      cuidado_mascota: document.cuidado_mascota,
      gramo_alimentacion: document.gramo_alimentacion,
      frecuencia_cuidado: document.frecuencia_cuidado,
      nombre_responsable: document.nombre_responsable
    });
  }
}

module.exports = { MongooseCuidadoMascotaRepository };
