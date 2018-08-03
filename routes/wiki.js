const express = require('express');
const router = express.Router();
const addPage = require('../views/addPage');

router.use((req, res, next) => {
  next();
});

router.get('/', (req, res) => {//get wiki display all pages in the db
  res.send();
});

router.get('/add', (req, res) => {
  res.send(addPage());

});

router.post('/', (req, res) => {
  res.send('post routes');
});


module.exports = router;
