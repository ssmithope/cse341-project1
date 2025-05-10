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

module.exports = { getAll };
