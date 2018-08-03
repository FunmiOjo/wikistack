var morgan = require('morgan');
var express = require('express');
const app = express();
const models = require('./models')
//const router = express.Router();
const { db } = require('./models');
var layout = require('./views/layout.js');
const userRouter = require('./routes/user');
const wikiRouter = require('./routes/wiki');

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.use('/users', userRouter);
app.use('/wiki', wikiRouter);

const PORT = 1337;

const init = async () => {
  await models.db.sync({force: true})
  //await models.Page.sync()
  //models.db.sync({force: true})
  app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}!`);
  });
}

init();


db.authenticate().
then(() => {
  console.log('connected to the database');
})
