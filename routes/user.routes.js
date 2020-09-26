const { Router } = require("express");
const router = Router();
const api = require("../api/user.api");

function set() {
  router.get("/", (req, res) => {
    res.send("My Node JS API");
  });

  router.get("/", api.add);

  router.post("/generate", api.add);

  router.get("/random_user/:cant?", api.generate_ramdom);

  router.get("/find/:id?", api.find);

  router.get("/find_all", api.find_all);

  router.put("/:id", api.update);

  router.delete("/:id", api.del);

  return router;
}

module.exports = {
  set,
};
