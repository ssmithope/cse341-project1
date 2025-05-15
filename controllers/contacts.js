const mongodb = require('../data/database');
const { ObjectId } = require('mongodb');

const getAll = async (req, res) => {
    try {
        const contacts = await mongodb.getDatabase().db().collection('contacts').find().toArray();
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts);
    } catch (error) {
        console.error('Error fetching contacts:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getSingleContact = async (req, res) => {
    try {
        const contactId = new ObjectId(req.params.id); // Convert ID to MongoDB ObjectId
        const contact = await mongodb.getDatabase().db().collection('contacts').findOne({ _id: contactId });

        if (!contact) {
            return res.status(404).json({ message: "Contact not found" });
        }

        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contact);
    } catch (error) {
        console.error('Error fetching contact by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


module.exports = { getAll, getSingleContact };
