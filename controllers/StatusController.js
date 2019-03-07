let uptime = new Date();
let requestsCount = 0;

class StatusController {
  getInfo(req, res) {
    return res.json({
      uptime: uptime.toISOString(),
      requests: requestsCount
    });
  }

  incrementRequest() {
    requestsCount++;
  }
}

module.exports = new StatusController();
