const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  
});

const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;
