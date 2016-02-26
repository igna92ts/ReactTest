var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/peron', function(req, res, next) {
  res.send('respond with a peron');
});

module.exports = router;
