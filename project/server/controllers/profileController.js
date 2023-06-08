// profileController.js
const express = require('express');
const router = express.Router();
const Database = require('./database');

router.post('/', (req, res) => {
  const { username, password, email } = req.body;

  if (username.length < 3 || password.length < 6 || !email.includes('@')) {
    return res.status(400).json({ error: 'Invalid profile data' });
  }

  const db = new Database();
  db.connect();

  const sql = 'INSERT INTO users (username, password, email) VALUES (?, ?, ?)';
  db.query(sql, [username, password, email], (err, result) => {
    if (err) {
      console.error('Error saving profile: ' + err.stack);
      return res.status(500).json({ error: 'An error occurred while saving the profile' });
    }
    return res.status(200).json({ message: 'Profile created successfully' });
  });
});

module.exports = router;
