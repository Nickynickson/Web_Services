const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = 8080;

// Enable CORS for all routes
app.use(cors());

// MongoDB connection URL
const url = 'mongodb+srv://nicholaskwabenaamo:Lowkeymovement02@cluster.8wmqd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster';
const client = new MongoClient(url);

// Define the GET endpoint
app.get('/professional', async (req, res) => {
    try {
        // Connect to the MongoDB client
        await client.connect();
        
        // Access the database and collection
        const database = client.db('professional_profile');
        const collection = database.collection('profile');

        // Retrieve the professional data
        const professionalData = await collection.findOne({}); 

        // Send the retrieved data as a response
        res.json(professionalData);
    } catch (error) {
        console.error('Error retrieving data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    } finally {
        // Ensure the client is closed after the operation
        await client.close();
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
