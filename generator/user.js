const faker = require("faker");

const generateUser = () => ({
  name: faker.name.firstName(),
  surname: faker.name.lastName(),
  age: faker.random.number({
    min: 20,
    max: 50,
  }),
});

module.exports = {
  generateUser: generateUser,
};
