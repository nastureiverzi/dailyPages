const mongoose = require('mongoose');
const analytics = require('./analyticsModel');

const dailyPagesSchema = new mongoose.Schema({
	title: { type: String },
	date: { type: Date, required: true },
	content: { type: String },
	// analytics: [analytics],
});

module.exports = mongoose.model('DailyPage', dailyPagesSchema);
