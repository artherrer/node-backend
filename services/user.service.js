const connection = require("../config/database");

class UserService {}

/**
 *
 * @returns
 */
UserService.getAll = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM users", (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};

/**
 *
 * @param {Object} newUser
 * @returns
 */
UserService.create = (newUser) => {
  return new Promise((resolve, reject) => {
    connection.query("INSERT INTO users SET ?", newUser, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};

/**
 *
 * @param {Number} userId
 * @returns
 */
UserService.findById = (userId) => {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM users WHERE id = ${userId}`, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};

/**
 *
 * @param {String} email
 * @returns
 */
UserService.findByEmail = (email) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM users WHERE email = '${email}'`,
      (err, res) => {
        if (err) {
          reject(err);
        } else {
          if (res.length > 0) {
            const user = JSON.parse(JSON.stringify(res[0]));
            resolve(user);
          } else {
            resolve(null);
          }
        }
      }
    );
  });
};

module.exports = UserService;
