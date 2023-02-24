const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/SN/sn');
});

router.get('/add', function(req, res, next) {
  res.render('admin/SN/add');
});

module.exports = router;
