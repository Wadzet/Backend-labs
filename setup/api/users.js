const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const users = await User.find(req.query);
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

    