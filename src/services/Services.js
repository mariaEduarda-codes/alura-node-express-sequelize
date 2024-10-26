const datasource = require('../models');

class Services {
  constructor(nomeDoModel) {
    this.model = nomeDoModel;
  }

  async getAllRecords() {
    return datasource[this.model].findAll();
  }

  async atualizaRegistro(dadosAtualizados, id) {
    const listaDeRegistrosAtualizados = datasource[this.model].update(dadosAtualizados, {
      where: {
        id: id
      }
    });
    if (listaDeRegistrosAtualizados[0] === 0) {
      return false;
    }
    return true;
  }
}

module.exports = Services;