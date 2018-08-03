var morgan = require('morgan');
var express = require('express');
const app = express();
//const router = express.Router();
const { db } = require('./models');
var layout = require('./views/layout.js');

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false })); 
const PORT = 1337;
app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });

  //get / 'hello world!'
  app.get("/", (req, res) => {
    //res.send("hello world!");
    res.send(layout())
  })

  db.authenticate().
  then(() => {
    console.log('connected to the database');
  })