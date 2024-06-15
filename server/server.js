require('dotenv').config({ path: "./config.env" });

const express = require('express');
const cors = require('cors');
const connectToDatabase = require('./db/connection'); // Assuming your connection file's name is connection.js

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
connectToDatabase.then(db => {
    if (!db) return process.exit(1);

    // Use routes
    app.use(require('./routes/route'));

    // Listen to the HTTP server
    app.listen(port, () => {
        console.log(`Server is running on port: ${port}`);
    });

    app.on('error', err => console.log(`Failed to connect with HTTP server: ${err}`));
}).catch(error => {
    console.log(`Connection failed...! ${error}`);
});
