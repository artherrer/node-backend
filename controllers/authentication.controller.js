const AuthenticationService = require("../services/authentication.service");
const UserService = require("../services/user.service");

class AuthenticationController {
  /**
   *
   * @param {*} req
   * @param {*} res
   * @returns
   */
  async signin(req, res) {
    try {
      const { email, password } = req.body;
      if (email === "" || password === "") {
        return res.status(400).json({ error: "Invalid credentials" });
      }

      const token = await AuthenticationService.signIn(email, password);

      return res.status(200).json({ token });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  /**
   *
   * @param {*} req
   * @param {*} res
   * @returns
   */
  async signup(req, res) {
    try {
      const { name, email, password } = req.body;
      if (name === "" || email === "" || password === "") {
        return res.status(400).json({ error: "Invalid credentials" });
      }

      const userFound = await UserService.findByEmail(email);

      if (userFound) {
        return res.status(400).json({ error: "User already exists" });
      }

      await UserService.create({
        ...req.body,
        password: AuthenticationService.encodePassword(password),
      });

      const token = await AuthenticationService.signIn(email, password);

      return res.status(200).json({ token });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new AuthenticationController();
