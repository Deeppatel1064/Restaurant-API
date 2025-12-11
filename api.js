const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const database = require("./config/db");
global.ResponseController = require("./controller/responseController");

global.db = database.connectDb();

app.use(
  bodyParser.json({
    limit: "50mb",
  })
);

app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
  })
);

const routes = require("./routes/index");
app.use("/", routes);

const PORT = process.env.PORT || 5055;


app.listen(PORT, () => {
  console.log("Server running on port 5055");
});

module.exports = app;
