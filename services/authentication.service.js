const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../services/user.service");

class AuthenticationService {
  /**
   *
   * @param {String} email
   * @param {String} password
   * @returns
   */
  signIn(email, password) {
    return new Promise(async (resolve, reject) => {
      const user = await User.findByEmail(email);
      if (!user) {
        return reject(new Error("User not found"));
      }

      const isPasswordValid = bcrypt.compareSync(password, user.password);

      if (!isPasswordValid) {
        return reject(new Error("Invalid password"));
      }

      const token = jwt.sign(user, process.env.APP_SECRET, {
        expiresIn: 86400,
      });

      return resolve(token);
    });
  }

  /**
   *
   * @param {String} password
   * @returns
   */
  encodePassword(password) {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
  }
}
module.exports = new AuthenticationService();
