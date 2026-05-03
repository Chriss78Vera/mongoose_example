const express = require('express');
const cuidadoMascotaController = require('../controllers/cuidadoMascotaController');
const { errorHandler } = require('../middlewares/errorHandler');

const router = express.Router();

router.post('/', cuidadoMascotaController.create);
router.get('/', cuidadoMascotaController.findAll);
router.get('/:id', cuidadoMascotaController.findById);
router.put('/:id', cuidadoMascotaController.update);
router.delete('/:id', cuidadoMascotaController.remove);

router.use(errorHandler);

module.exports = { cuidadoMascotaRouter: router };
