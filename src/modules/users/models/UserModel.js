import mongoose from 'mongoose';

import dailyPages from '../../dailies/models/dailyPageModel.js';

const { Schema } = mongoose;

const userSchema = new Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	dailyPages: [{ type: Schema.Types.ObjectId, dailyPages }],
});

export default mongoose.model('User', userSchema);
