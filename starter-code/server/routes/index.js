const express       = require('express');
const journalRoutes = require('./api/journal-entries');
const router        = express.Router();

router.use('/api', journalRoutes);

router.get('/', function(req, res, next) {
  res.render('index', { title: 'working with Michiel' });
});

module.exports = router;
