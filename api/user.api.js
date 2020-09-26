const generator = require("../generator/user");
const util = require("../util");
const userSchema = require("../model/user.model");

const add = async (req, res) => {
  const new_user = new userSchema(req.body);
  const user_saved = await new_user.save();

  res.status(201).json(user_saved);
};

const generate_ramdom = (req, res) => {
  let cant = req.params.cant || 5;
  users = [];

  for (let i = 0; i < cant; i++) {
    let user = generator.generateUser();
    users.push(user);
  }

  res.send(users);
};

const find_all = async (req, res) => {
  const users = await userSchema.find();

  res.json(users);
};

const find = async (req, res) => {
  const user = await userSchema.findById(req.params.id);

  res.json(user);
};

const update = async (req, res) => {
  const user_updated = await userSchema.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new: true}
  );

  res.json(user_updated);
};

const del = async (req, res) => {
  await userSchema.findByIdAndDelete(req.params.id);
  res.send("User deleted successfuly");
};

module.exports = {
  add: add,
  generate_ramdom: generate_ramdom,
  find: find,
  find_all: find_all,
  update: update,
  del: del,
};
  