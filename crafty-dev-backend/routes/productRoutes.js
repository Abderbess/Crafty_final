// Corrected backend for database alignment
// Updated productRoutes.js example with the correct table and syntax

const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all products
router.get('/', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT id_produit AS id, nom, description, id_boutique FROM produit');
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

// Add a new product
router.post('/add', async (req, res) => {
    const { nom, description, id_boutique } = req.body;
    try {
        await db.query('INSERT INTO produit (nom, description, id_boutique) VALUES (?, ?, ?)', [nom, description, id_boutique]);
        res.status(201).send('Product added successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

module.exports = router;
