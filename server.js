const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
require('dotenv').config();
const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.JWT_SECRET || 'wowsososeccret';
const cors = require('cors');
app.use(cors());

app.use(express.json());

// Serve your React App (Assuming build directory is used for production)
// Only needed if you're serving your React app and API from the same origin
app.use(express.static('build'));

// Example route
app.get('/', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.post('/api/jwt', async (req, res) => {
    const { id } = req.body;
    try {
        const token = jwt.sign({ userId: id }, SECRET_KEY, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch data' });
    }
  });