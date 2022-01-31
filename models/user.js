const mongoose = require('mongoose');

const dailyPages = require('./dailyPages');

const { Schema } = mongoose;

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    dailyPages: [{ type: Schema.Types.ObjectId, dailyPages }],
});

module.exports = mongoose.model('User', userSchema);
