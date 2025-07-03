const mongoose = require('mongoose');

async function connectToMongoDB() {
    try {
        return await mongoose.connect(process.env.MONGO_URI)
        .then(() => console.log("Connected to MongoDB"))
        .catch(err => console.error("Failed to connect to MongoDB", err));
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
}

module.exports = connectToMongoDB;