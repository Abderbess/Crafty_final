
const express = require('express');
const router = express.Router();
const db = require('../db');

// Get conditions
router.get('/', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT id, title, content FROM conditions');
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

module.exports = router;
