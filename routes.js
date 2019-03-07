const routes = require("express").Router();

const userController = require("./controllers/UserController");
const statusController = require("./controllers/StatusController");

const statusMiddleware = require("./middlewares/StatusMiddleware");

routes.get("/info", statusController.getInfo);

routes.use(statusMiddleware);

routes.get("/users", userController.getUsers);
routes.post("/users", userController.saveUser);
routes.put("/users/:id", userController.updateUser);
routes.delete("/users/:id", userController.deleteUser);

module.exports = routes;
