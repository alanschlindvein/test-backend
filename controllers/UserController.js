const User = require("../models/User");

class UserController {
  getUsers(req, res) {
    const users = User.find({})
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.status(500).json({ message: "Erro ao buscar dados." });
      });
  }

  async saveUser(req, res) {
    const {
      body: { docNumber }
    } = req;
    let user = await User.find({ docNumber });

    if (!!user.length) {
      res.status(409).json({ message: "O documento já existe." });
      return;
    }

    user = new User(req.body);
    const { id } = user;

    user
      .save()
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.status(500).json({ message: "Não foi possível salvar." });
      });
  }

  updateUser(req, res) {
    const user = User.findOneAndUpdate({ _id: req.params.id }, req.body, {
      upsert: true,
      new: true
    })
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.status(404).json({ message: "Não foi possível atualizar o documento." });
      });
  }

  deleteUser(req, res) {
    const user = User.findOneAndDelete({ _id: req.params.id })
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.status(404).json({ message: "Não foi possível remover o documento." });
      });
  }
}

module.exports = new UserController();
