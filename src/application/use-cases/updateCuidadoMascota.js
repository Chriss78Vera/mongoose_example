function updateCuidadoMascota(repository) {
  return async function execute(id, data) {
    return repository.update(id, data);
  };
}

module.exports = { updateCuidadoMascota };
