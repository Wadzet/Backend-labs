const mongoose = require('mongoose');

const theaterSchema = new mongoose.Schema({
  
});

const Theater = mongoose.model('Theater', theaterSchema);

module.exports = Theater;
