const express       = require('express');
const router        = express.Router();
const mongoose     = require('mongoose');
const Journal = require('../../models/journal-entry');

router.get('/', (req, res, next) => {
  Journal.find({})
    .exec((err, Journals) => {
      if (err) {
        return res.send(err);
      }
      return res.json(Journals);
    });
});

router.post('/', (req, res) => {
  const journal = new Journal({
  	title: req.body.title,
    date: req.body.date,
    content: req.body.content
  });

  journal.save((err) => {
    if (err) {
      return res.send(err);
    }

    return res.json({ message: 'New Journal created!' });
  });
});

router.get('/:id', (req, res) => {
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: 'Specified id is not valid' });
  }

  Journal.findById(req.params.id, (err, Journals) => {
      if (err) {
        return res.send(err);
      }

      return res.json(Journals);
    });
});


router.put('/:id', (req, res) => {
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: 'Specified id is not valid' });
  }

  Journal.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
    date: req.body.date,
    content: req.body.content
  }, (err) => {
    if (err) {
      return res.send(err);
    }

    return res.json({
      message: 'Journal updated successfully'
    });
  });
})


router.delete('/:id', (req, res) => {
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: 'Specified id is not valid' });
  }

  Journal.remove({ _id: req.params.id }, (err) => {
    if (err) {
      return res.send(err);
    }

    return res.json({
      message: 'Journal has been removed!'
    });
  })
});

module.exports = router;
