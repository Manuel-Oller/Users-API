const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/api", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = mongoose;
