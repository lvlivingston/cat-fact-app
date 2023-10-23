var express = require('express');
var router = express.Router();

const ROOT_URL = 'https://catfact.ninja/fact';

/* GET home page. */
router.get('/', async function(req, res, next) {
  const catData = await fetch(`${ROOT_URL}/cat/${fact}`, options)
    .then(res => res.json());
  catData.repos = await fetch(catData.repos_url, options)
    .then(res => res.json());
  res.render('index', { catData });
});

module.exports = router;
