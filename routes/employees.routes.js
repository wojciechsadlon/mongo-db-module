const express = require('express');
const router = express.Router();
const EmployeeController = require('../controllers/employees.controller');

router.get('/employees', EmployeeController.getAll);

router.get('/employees/random', EmployeeController.getRandom);

router.get('/employees/:id', EmployeeController.getById);

router.post('/employees', EmployeeController.createNew);

router.put('/employees/:id', EmployeeController.modifyElem);

router.delete('/employees/:id', EmployeeController.deleteElem);

module.exports = router;
