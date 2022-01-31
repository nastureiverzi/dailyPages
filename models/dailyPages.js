const mongoose = require('mongoose');

const dailyPagesSchema = new mongoose.Schema({
    title: { type: String },
    date: { type: Date, required: true },
    content: { type: String },
});

module.exports = mongoose.model('DailyPages', dailyPagesSchema);
