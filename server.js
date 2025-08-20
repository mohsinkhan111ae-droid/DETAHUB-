
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Simple endpoints
app.post('/login', (req, res) => {
  res.json({ message: 'Login successful!' });
});

app.post('/register', (req, res) => {
  res.json({ message: 'Registration successful!' });
});

app.post('/start', (req, res) => {
  res.json({ message: 'Data selling started.' });
});

app.post('/stop', (req, res) => {
  res.json({ message: 'Data selling stopped.' });
});

app.post('/withdraw', (req, res) => {
  res.json({ message: 'Withdraw request received.' });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
