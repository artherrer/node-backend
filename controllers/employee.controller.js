const EmployeeService = require("../services/employee.service.js");

class EmployeeController {
  
  /**
   *
   * @param {*} req
   * @param {*} res
   */
  async index(_req, res) {
    try {
      const employees = await EmployeeService.getAll();
      res.status(200).json(employees);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  /**
   *
   * @param {*} req
   * @param {*} res
   */
  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({ message: "Missing employee id" });
      }
      const employee = await EmployeeService.show(id);

      if (!employee) {
        res.status(404).json({ message: "Employee not found" });
      }
      res.status(200).json(employee);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  /**
   *
   * @param {*} req
   * @param {*} res
   */
  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({ message: "Missing employee id" });
      }
      const employee = await EmployeeService.update(id, req.body);

      if (!employee) {
        res.status(404).json({ message: "Employee not found" });
      }
      res.status(200).json(employee);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  /**
   *
   * @param {*} req
   * @param {*} res
   */
  async destroy(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({ message: "Missing employee id" });
      }
      const employee = await EmployeeService.delete(id);
      res.status(200).json(employee);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  /**
   *
   * @param {*} req
   * @param {*} res
   */
  async create(req, res) {
    try {
      const employee = await EmployeeService.create(req.body);
      res.status(200).json(employee);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = new EmployeeController();
