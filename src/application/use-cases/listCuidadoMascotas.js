function listCuidadoMascotas(repository) {
  return async function execute() {
    return repository.findAll();
  };
}

module.exports = { listCuidadoMascotas };
