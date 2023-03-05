const mongoose = require('mongoose');

const theaterSchema = new mongoose.Schema({
  // поля схеми
});

const Theater = mongoose.model('Theater', theaterSchema);

module.exports = Theater;
