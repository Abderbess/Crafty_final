// Corrected backend for database alignment
// Updated userRoutes.js example with the correct table and columns

const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all users
router.get('/', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT id_utilisateur AS id, pseudo, adresse, telephone, role, id_identifiant FROM utilisateur');
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

// Register a new user
router.post('/register', async (req, res) => {
    const { pseudo, adresse, telephone, role, id_identifiant } = req.body;
    try {
        const [result] = await db.query(
            'INSERT INTO utilisateur (pseudo, adresse, telephone, role, id_identifiant) VALUES (?, ?, ?, ?, ?)',
            [pseudo, adresse, telephone, role, id_identifiant]
        );
        res.status(201).json({ id: result.insertId, pseudo, adresse, telephone, role, id_identifiant });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

// Update a user
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { pseudo, adresse, telephone, role } = req.body;
    try {
        await db.query(
            'UPDATE utilisateur SET pseudo = ?, adresse = ?, telephone = ?, role = ? WHERE id_utilisateur = ?',
            [pseudo, adresse, telephone, role, id]
        );
        res.sendStatus(204);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

// Delete a user
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await db.query('DELETE FROM utilisateur WHERE id_utilisateur = ?', [id]);
        res.sendStatus(204);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

module.exports = router;
