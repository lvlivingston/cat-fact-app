var express = require('express');
var router = express.Router();

const ROOT_URL = 'https://catfact.ninja';

/* GET home page. */
router.get('/', async function(req, res, next) {
  // console.log(catData);
  // console.log(catJson);
  
  res.render('index');
});

router.get('/cats/fact', async function(req, res) {
  const catData = await fetch(`${ROOT_URL}/fact`)
  const catJson = await catData.json();
  res.render('cat/fact', { fact: catJson.fact });
})

module.exports = router;
