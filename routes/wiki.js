const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  next();
});

router.get('/', (req, res) => {
  res.send('get routes');
});

router.get('/add', (req, res) => {
  res.send('get add');
});

router.post('/', (req, res) => {
  res.send('post routes');
});

module.exports = router;
