const mongoose		= require('mongoose');


const stockSchema = new mongoose.Schema({
	symbol: {
		type: String,
		required: true
	},

	likes: {
		type: String,
		required: true,
		default: []
	}
});

module.exports = stockSchema;
