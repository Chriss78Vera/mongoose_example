function errorHandler(error, req, res, next) {
  if (error.name === 'ValidationError') {
    return res.status(400).json({
      message: 'Datos invalidos',
      errors: Object.values(error.errors).map((item) => item.message)
    });
  }

  if (error.name === 'CastError') {
    return res.status(400).json({
      message: 'Id invalido'
    });
  }

  return res.status(500).json({
    message: 'Error interno del servidor'
  });
}

module.exports = { errorHandler };
