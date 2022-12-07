// Create routes for the application

const express = require("express");
const EmployeeController = require("../controllers/employee.controller");
const router = express.Router();

router.get("/", EmployeeController.index);
router.get("/:id", EmployeeController.show);
router.post("/", EmployeeController.create);
router.put("/:id", EmployeeController.update);
router.delete("/:id", EmployeeController.destroy);

module.exports = router;
