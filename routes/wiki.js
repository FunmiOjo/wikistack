const express = require('express');
const router = express.Router();
const addPage = require('../views/addPage');
const { Page } = require("../models");
const wikipage = require('../views/wikipage');
const main = require('../views/main');

router.use((req, res, next) => {
  next();
});

router.get('/', async (req, res) => {//get wiki display all pages in the db
  const pages = await Page.findAll();
  res.send(main(pages));
});

router.get('/add', (req, res) => {
  res.send(addPage());
});

router.get('/:slug', async (req, res, next) => {
  try {
    const page = await Page.findOne({
      where: {slug: req.params.slug}
    });
    res.send(wikipage(page, req.body.name));
  } catch(error) {
      next(error);
  }
});

router.post('/', async (req, res, next) => {

  const page = new Page({
    title: req.body.title,
    content: req.body.content
  });

  try {
    await page.save();
    console.log(page);
    res.redirect(`/wiki/${page.slug}`);
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
