const express = require('express');
const router = express.Router();
const DepartmentController = require('../controllers/departments.controller');

router.get('/departments', DepartmentController.getAll);

router.get('/departments/random', DepartmentController.getRandom);

router.get('/departments/:id', DepartmentController.getById);

router.post('/departments', DepartmentController.createNew);

router.put('/departments/:id', DepartmentController.modifyElem);

router.delete('/departments/:id', DepartmentController.deleteElem);

module.exports = router;
