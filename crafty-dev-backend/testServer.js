
const express = require('express');
const app = express();
const db = require('./db'); // MySQL connection

app.use(express.json());

// Test database connection
app.get('/test-db', async (req, res) => {
    try {
        const [result] = await db.query('SELECT 1 AS test');
        res.json({ success: true, result });
    } catch (error) {
        console.error('Database connection failed:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Backend server is running on http://localhost:${PORT}`);
});
