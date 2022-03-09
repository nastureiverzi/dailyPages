import mongoose from 'mongoose';

const dailyPagesSchema = new mongoose.Schema({
	title: { type: String },
	date: { type: Date, required: true },
	content: { type: String },
	// analytics: [analytics],
});

export default mongoose.model('DailyPage', dailyPagesSchema);
