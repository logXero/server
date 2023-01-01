const mongoose = require("mongoose");
require("dotenv").config();

const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

const connectWithDatabase = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI, options);
        console.log(`> Connected to MongoDB Database at`, process.env.MONGO_URI)
	} catch (err) {
		console.log("Connection Unsuccessful", err);
		throw new Error(`Couldn't Connect to Database ${process.env.MONGO_URI}`);
	}
};

module.exports = connectWithDatabase;
