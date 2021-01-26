const database = require("../models");

class PessoaController {
  static async getPessoas(req, res) {
    try {
      const todasAsPessoas = await database.Pessoas.findAll();
      return res.status(200).json(todasAsPessoas);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async getOnePeople(req, res) {
    const { id } = req.params;
    try {
      const onePeople = await database.Pessoas.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(onePeople);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = PessoaController;
