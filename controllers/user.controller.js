const UserService = require("../services/user.service");

class UserController {
  /**
   *
   * @param {*} req
   * @param {*} res
   */
  async index(req, res) {
    const users = await UserService.getAll();
    res.status(200).json(users);
  }
}

module.exports = new UserController();
