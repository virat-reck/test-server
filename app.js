const express = require("express");

const app = express();

const router = express.Router();

app.listen(3009, () => {
  console.log("hii");
});

app.get("/user", (req, res, next) => {
  res.json({
    value: "Hiii",
  });
});
