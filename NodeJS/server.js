const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const requireDir = require("require-dir");
//Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

//Iniciando o DB
mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
requireDir("./src/models");

//const Product = mongoose.model("Product");

//Rotas
app.use("/api", require("./src/routes"));

app.listen(3001, function () {
  console.log("Server is running on port 3001");
});
