const express = require('express');
const Theater = require('../models/theater');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const theaters = await Theater.find(req.query);
    res.json(theaters);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

router.get('/:theaterId', async (req, res) => {
  try {
    const theater = await Theater.findById(req.params.theaterId);
    if (theater) {
      res.json(theater);
    } else {
      res.status(404).send('Theater not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

module.exports = router;
