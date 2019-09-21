const express = require("express");
const app = express();

const Port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Currently running on Port: ${Port}`);
});
