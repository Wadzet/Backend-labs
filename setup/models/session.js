const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  // поля схеми
});

const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;
