const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/journal');
const JournalEntry = require('../models/journal-entry');

const journalentries = [
  {
    date: 'dasda',
    title: 'hello',
    content: 'dasdasdalsdasdkasdl',
  },
  {
    date: 'hsadasd',
    title: 'how',
    content: 'lkjfjfgl;;j',
  },
  {
    date: 'dasd',
    title: 'are',
    content: 'kjlkgj;lskfjgljkg',
  },
  {
    date: 'ghfgh',
    title: 'you',
    content: 'gsdgsfghtytyrtu',
  },
  {
    date: 'jyty',
    title: 'today',
    content: 'vbcvbvncvncvncvn',
  },
  {
    date: 'asjddf',
    title: 'I',
    content: 'kkjkyukgku',
  },
  {
    date: 'hasodk',
    title: 'am',
    content: 'qwerewet',
  },
  {
    date: 'ojsdf',
    title: 'fine',
    content: 'lkjsk;dfhj',
  },
  {
    date: 'jkahdf',
    title: 'today',
    content: ';sdklfhs;kfghj',
  },
  {
    date: 'hadsgdfsg',
    title: 'heyho',
    content: 'kfghj',
  }
];

JournalEntry.create(journalentries, (err, docs) => {
  if (err) { throw err };

  docs.forEach( (journalentries) => {
    console.log(journalentries.title)
  })
  mongoose.connection.close();
});
