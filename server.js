const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const chalk = require("chalk");
const cors = require("cors");
let morgan = require("morgan")
const app = express();






app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Initialize cors for Cross Origin Resource Sharing
app.use(cors())


const DB = require("./config/keys").mongoURI;

mongoose.Promise = global.Promise;
mongoose
  .connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>  console.log(chalk.inverse.green(`MongoDB Connected`)))
  .catch(err => console.log(err))

  // Routes
const users = require("./routes/users");
app.use('/api/users', users)

const Port = process.env.PORT || 4000;

app.listen(Port, err => {
  if (err) throw err;
  console.log(chalk.blue.inverse(`Currently running on Port: ${Port}`));
});
