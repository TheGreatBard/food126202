// Backend (Express) code

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// Define your API route for creating a profile
app.post('/api/profiles', (req, res) => {
  const { username, password, email } = req.body;

  // Perform any necessary validations
  if (username.length < 3 || password.length < 6 || !email.includes('@')) {
    return res.status(400).json({ error: 'Invalid profile data' });
  }

  // Save the profile to the database or perform any other necessary actions
  // ...

  return res.status(200).json({ message: 'Profile created successfully' });
});

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
