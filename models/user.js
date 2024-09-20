const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    passport: { type: String, required: true }, // Stores the filename of the uploaded image
    gender: { type: String, required: true }, // Male or Female
    bornAgain: { type: String, required: true }, // Yes or No
    church: { type: String, required: true }, // Name of the church
    abideRules: { type: String, required: true }, // Yes or No
    suggestions: { type: String }, // User's suggestions
});

module.exports = mongoose.model('User', userSchema);
