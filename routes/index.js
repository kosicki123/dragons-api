'use strict';

var express = require('express'),
    router  = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Docs - Dragons API' });
});

router.use('/api', require('./api'));
router.use('/check', require('./check'));

module.exports = router;
