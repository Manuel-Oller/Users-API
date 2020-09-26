const express = require("express");
const app = express();
const router = require("./routes/user.routes");
require("dotenv").config();
const port = process.env.PORT || 8080;
require("./database/database");

app.use(express.json());
app.use("/api", router.set());

app.listen(port, (err) => {
  if (err) {
    throw new Error(`Error in server: ${err}`);
  }

  console.log(`Server on port: ${port}`);
});
