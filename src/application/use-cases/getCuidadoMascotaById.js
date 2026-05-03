function getCuidadoMascotaById(repository) {
  return async function execute(id) {
    return repository.findById(id);
  };
}

module.exports = { getCuidadoMascotaById };
