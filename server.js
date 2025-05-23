const express = require('express');
const mongoose = require('mongoose');
const itemRoutes = require('./routes/itemRoutes');

const app = express();

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/mydatabase';

mongoose.connect(MONGO_URI).then(() => {
    console.log('Connected to MongoDB');
    }
).catch(err => {
    console.error('Error connecting to MongoDB:', err);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use routes
app.use('/', itemRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app; // Export for testing purposes