require("dotenv").config();
const express = require("express");
require("./src/conn");
const Router = require("./src/routers");
const cors = require("cors");

const app = express();
app.use(cors());

const port = process.env.PORT || 4000;

app.use(express.json());

app.use("/api", Router);

app.listen(port, () => {
  console.log(`connection is setup at ${port}`);
});
