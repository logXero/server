const express = require("express");
const app = express();
const connectWithDatabase = require("./core/database");

require("dotenv").config();

const port = process.env.PORT || 6000;

async function initaialize() {
	try {
		await app.listen(port, () =>
			console.log("> Server is up and running on port : " + port)
		);
		await connectWithDatabase();
	} catch (error) {
		console.log(error);
		throw new Error("Connection Unsuccessful", error);
	}
}

initaialize();
