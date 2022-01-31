const mongoose = require('mongoose');
const analytics = require('./analytics');

const dailyPagesSchema = new mongoose.Schema({
    title: { type: String },
    date: { type: Date, required: true },
    content: { type: String },
    analytics: [analytics],
});

module.exports = mongoose.model('DailyPages', dailyPagesSchema);
