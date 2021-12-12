const Department = require('../models/department.model');

exports.getAll = async (req, res) => {
  try {
    res.json(await Department.find({}));
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};


exports.getRandom = async (req, res) => {

  try {
    const count = await Department.countDocuments();
    const rand = Math.floor(Math.random() * count);
    const dep = await Department.findOne().skip(rand);
    if(!dep) res.status(404).json({ message: 'Not found' });
    else res.json(dep);
  }
  catch(err) {
    res.status(500).json({ message: err });
  }

};

exports.getById = async (req, res) => {

  try {
    const dep = await Department.findById(req.params.id);
    if(!dep) res.status(404).json({ message: 'Not found' });
    else res.json(dep);
  }
  catch(err) {
    res.status(500).json({ message: err });
  }

};

exports.createNew = async (req, res) => {

  try {

    const { name } = req.body;
    const newDepartment = new Department({ name: name });
    await newDepartment.save();
    res.json({ message: 'OK', newDepartment: newDepartment });

  } catch(err) {
    res.status(500).json({ message: err });
  }

};

exports.modifyElem = async (req, res) => {
  const { name } = req.body;

  try {
    const dep = await Department.findById(req.params.id);
    if(dep) {
      dep.name = name;
      await dep.save();
      res.json({ message: 'OK', changed: dep });
    }
    else res.status(404).json({ message: 'Not found...' });
  }
  catch(err) {
    res.status(500).json({ message: err });
  }

};

exports.deleteElem = async (req, res) => {
  try {
    const dep = await Department.findById(req.params.id);
    if(dep) {
      await dep.remove();
      res.json({ message: 'OK', deleted: dep });
    }
    else res.status(404).json({ message: 'Not found...' });
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};
