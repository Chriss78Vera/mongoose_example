function deleteCuidadoMascota(repository) {
  return async function execute(id) {
    return repository.delete(id);
  };
}

module.exports = { deleteCuidadoMascota };
