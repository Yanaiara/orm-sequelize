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
  static async createPeople(req, res) {
    const newPeople = req.body;
    try {
      const newPeopleCreated = await database.Pessoas.create(newPeople);
      return res.status(200).json(newPeopleCreated);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async modificPeople(req, res) {
    const { id } = req.params;
    const newInfos = req.body;
    try {
      await database.Pessoas.update(newInfos, { where: { id: Number(id) } });
      const atualizedPeople = await database.Pessoas.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).send(atualizedPeople);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async deletePeople(req, res) {
    const { id } = req.params;
    try {
      await database.Pessoas.destroy({ where: { id: Number(id) } });
      return res.status(200).send({message: "Id deletado com sucesso!"})
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = PessoaController;
