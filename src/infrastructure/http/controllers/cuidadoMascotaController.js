const { createCuidadoMascota } = require('../../../application/use-cases/createCuidadoMascota');
const { deleteCuidadoMascota } = require('../../../application/use-cases/deleteCuidadoMascota');
const { getCuidadoMascotaById } = require('../../../application/use-cases/getCuidadoMascotaById');
const { listCuidadoMascotas } = require('../../../application/use-cases/listCuidadoMascotas');
const { updateCuidadoMascota } = require('../../../application/use-cases/updateCuidadoMascota');
const { MongooseCuidadoMascotaRepository } = require('../../repositories/MongooseCuidadoMascotaRepository');

const repository = new MongooseCuidadoMascotaRepository();

async function create(req, res, next) {
  try {
    const result = await createCuidadoMascota(repository)(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
}

async function findAll(req, res, next) {
  try {
    const result = await listCuidadoMascotas(repository)();
    res.json(result);
  } catch (error) {
    next(error);
  }
}

async function findById(req, res, next) {
  try {
    const result = await getCuidadoMascotaById(repository)(req.params.id);

    if (!result) {
      return res.status(404).json({ message: 'Registro no encontrado' });
    }

    return res.json(result);
  } catch (error) {
    return next(error);
  }
}

async function update(req, res, next) {
  try {
    const result = await updateCuidadoMascota(repository)(req.params.id, req.body);

    if (!result) {
      return res.status(404).json({ message: 'Registro no encontrado' });
    }

    return res.json(result);
  } catch (error) {
    return next(error);
  }
}

async function remove(req, res, next) {
  try {
    const result = await deleteCuidadoMascota(repository)(req.params.id);

    if (!result) {
      return res.status(404).json({ message: 'Registro no encontrado' });
    }

    return res.json({
      message: 'Registro eliminado',
      data: result
    });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  create,
  findAll,
  findById,
  update,
  remove
};
