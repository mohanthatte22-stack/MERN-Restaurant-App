const buffer = require("buffer");

if (!buffer.SlowBuffer) {
  buffer.SlowBuffer = class SlowBuffer {};
}

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { readdirSync } = require("fs");
const path = require("path");

const connectDatabase = require("./utils/database");

const app = express();

require("dotenv").config();

connectDatabase();

app.use(bodyParser.json());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

readdirSync(path.join(__dirname, "routes")).map((file) => {
  app.use("/api", require(`./routes/${file}`));
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

module.exports = app;