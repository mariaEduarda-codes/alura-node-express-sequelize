
class Controller {
  constructor(entidadeService) {
    this.entidadeService = entidadeService;
  }

  async getAll(req, res) {
    try {
      const listaDeRegistros = await this.entidadeService.getAllRecords();
      return res.status(200).json(listaDeRegistros);
    } catch (error) {

    }
  }

  async atualiza(req, res) {
    const { id} = req.params;
    const dadosAtualizados = req.body;

    try {
      const foiAtualizado = await this.entidadeService.atualizaRegistro(dadosAtualizados, Number(id));

      if (!foiAtualizado) {
        return res.status(400).json();
      }
      return res.status(200).json({ mensagem: 'Registro atualizado'});

    } catch (error) {

    }
  }
}

module.exports = Controller;