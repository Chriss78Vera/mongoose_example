function createCuidadoMascota(repository) {
  return async function execute(data) {
    return repository.create(data);
  };
}

module.exports = { createCuidadoMascota };
