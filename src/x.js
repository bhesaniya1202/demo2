const path = require("path");
const express = require("express");
const app = express();

const staticPath = path.join(__dirname, "../public");

app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.send("helloworld");
});

app.get("/about", (req, res) => {
  res.send("about us...");
});

app.listen(9000, () => {
  console.log("succsesfully!");
});
