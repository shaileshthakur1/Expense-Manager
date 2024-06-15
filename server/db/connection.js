const mongoose = require('mongoose');

const conn = mongoose.connect(process.env.ATLAS_URI)
    .then(db => {
        console.log('DB connected');
        return db;
    })
    .catch(err => {
        console.error("Connection failed", err);
        process.exit(1); // Ensure the process exits on a failed connection
    });

module.exports = conn;
