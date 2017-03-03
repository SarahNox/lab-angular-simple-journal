'use strict';
const mongoose = require('mongoose');

const journalSchema = new mongoose.Schema({
  date: {
    type: Date
    // required: [true, 'date is required']
  },
  title: {
    type: String,
    required: [true, 'title is required']
  },
  content: {
    type: String, default: ''
  }
});

module.exports = mongoose.model('JournalEntry', journalSchema);
