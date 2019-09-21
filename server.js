const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const chalk = require('chalk');
const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const Port = process.env.PORT || 4000;

app.listen(Port, (err) => {
    if (err) throw err
  console.log(chalk.blue.inverse(`Currently running on Port: ${Port}`));
});
