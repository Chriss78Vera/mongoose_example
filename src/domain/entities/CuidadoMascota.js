class CuidadoMascota {
  constructor({
    id,
    id_mascota,
    recomendacion_mascota,
    cuidado_mascota,
    gramo_alimentacion,
    frecuencia_cuidado,
    nombre_responsable
  }) {
    this.id = id;
    this.id_mascota = id_mascota;
    this.recomendacion_mascota = recomendacion_mascota;
    this.cuidado_mascota = cuidado_mascota;
    this.gramo_alimentacion = gramo_alimentacion;
    this.frecuencia_cuidado = frecuencia_cuidado;
    this.nombre_responsable = nombre_responsable;
  }
}

module.exports = { CuidadoMascota };
