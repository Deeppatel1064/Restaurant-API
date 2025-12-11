const http = require("http");
const app = require("./api");

module.exports = () => {
  return new Promise((resolve, reject) => {
    try {
      server = http.Server(app);
      return resolve();
    } catch (error) {
      console.log("HTTP Server error:", error);
      return reject(error);
    }
  });
};
