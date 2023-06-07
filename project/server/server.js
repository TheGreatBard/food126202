const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');

app.use(bodyParser.json());

// Database connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  //password: 'your_password',
  database: 'food'
});

connection.connect((err) => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to database');
});

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.post('/api/profiles', (req, res) => {
  const { username, password, email } = req.body;

  if (username.length < 3 || password.length < 6 || !email.includes('@')) {
    return res.status(400).json({ error: 'Invalid profile data' });
  }

  const sql = 'INSERT INTO users (username, password, email) VALUES (?, ?, ?)';
  connection.query(sql, [username, password, email], (err, result) => {
    if (err) {
      console.error('Error saving profile: ' + err.stack);
      return res.status(500).json({ error: 'An error occurred while saving the profile' });
    }
    return res.status(200).json({ message: 'Profile created successfully' });
  });
});

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
