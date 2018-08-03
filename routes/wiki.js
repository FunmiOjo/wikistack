const express = require('express');
const router = express.Router();
const addPage = require('../views/addPage');
const { Page } = require("../models");

router.use((req, res, next) => {
  next();
});

router.get('/', (req, res) => {//get wiki display all pages in the db
  res.send();
});

router.get('/add', (req, res) => {
  res.send(addPage());

});

router.post('/', async (req, res, next) => {

  const page = new Page({
    title: req.body.title,
    content: req.body.content
  });

  try {
    await page.save();
    res.redirect('/');
  } catch (error) { next(error) }

  //res.send(res.json(req.body));
});

// {
// authorName: "Funmi Ojo",
// authorEmail: "tfunmi@funmi.com",
// title: "Test title",
// content: "Test content",
// pageStatus: "status status"
// }


module.exports = router;
