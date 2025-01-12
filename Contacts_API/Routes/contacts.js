const express = require('express');
const { getCollection } = require('../Config/DB');
const router = express.Router();

// GET all contacts
router.get('/', async (req, res) => {
    try {
        const collection = getCollection('contacts');
        const contacts = await collection.find().toArray();
        res.json(contacts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET a single contact
router.get('/:id', async (req, res) => {
    try {
        const collection = getCollection('/id');
        const contact = await collection.findOne({ _id: new ObjectId(req.params.id) });
        if (!contact) return res.status(404).json({ message: 'Contact not found' });
        res.json(contact);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST a new contact
router.post('/', async (req, res) => {
    try {
        const collection = getCollection('contacts');
        const professionalData = req.body; // Expecting the data to be sent in the request body
        const result = await collection.insertOne(professionalData);
        res.status(201).json({ id: result.insertedId });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
