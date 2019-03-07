const statusController = require("../controllers/StatusController");

module.exports = function(req, res, next) {
  statusController.incrementRequest();
  return next();
};
