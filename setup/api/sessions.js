const express = require('express');
const Session = require('../models/session');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const sessions = await Session.find({ user: req.query.userId });
    res.json(sessions);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

module.exports = router;
