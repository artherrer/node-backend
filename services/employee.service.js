const connection = require("../config/database");
class Employee {}

/**
 * 
 * @returns 
 */
Employee.getAll = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM employees", (err, res) => {
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
 * @param {*} id 
 * @param {*} employee 
 * @returns 
 */
Employee.update = (id, employee) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "UPDATE employees SET ? WHERE id = ?",
      [employee, id],
      (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      }
    );
  });
};

/**
 * 
 * @param {*} newEmployee 
 * @returns 
 */
Employee.create = (newEmployee) => {
  return new Promise((resolve, reject) => {
    connection.query("INSERT INTO employees SET ?", newEmployee, (err, res) => {
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
 * @param {*} id 
 * @returns 
 */
Employee.delete = (id) => {
  return new Promise((resolve, reject) => {
    connection.query("DELETE FROM employees WHERE id = ?", id, (err, res) => {
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
 * @param {*} employeeId 
 * @returns 
 */
Employee.show = (employeeId) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM employees WHERE id = ${employeeId}`,
      (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res[0]);
        }
      }
    );
  });
};

module.exports = Employee;
