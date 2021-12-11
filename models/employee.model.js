const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true},
  department: { type: String, reuqired: true}
});

module.exports = mongoose.model('Employee', departmentSchema);