import express from "express";
import cors from "cors";
import config from "./config/config.js";
import subscribeRoutes from "./routers/subscribeRoutes.js";
import mongoose from "mongoose";

const app = express();
const port = config.PORT;

// Enable CORS for all routes
app.use(cors());

// Parse JSON bodies
app.use(express.json());

async function connectToDatabase() {
	try {
		//connect to database and name the database
		await mongoose.connect(config.MONGO.URI, {
			dbName: config.MONGO.DB,
		});

		console.log(
			"Connected to MongoDB on port",
			config.PORT,
			"with database",
			config.PERSISTANCE
		);
	} catch (error) {
		console.error("Failed to connect to MongoDB:", error);
	}
}

connectToDatabase();

// Root Routes
app.get("/", (req, res) => {
	res.json(
		"Hello front! This is a message sent from the backend, hosted on railway!"
	);
});

// Subscribe routes
app.use("/api/subscribe", subscribeRoutes);

// Start the server
app.listen(port, () => {
	console.log(
		`Server is running on port ${port} setup for railway! Local:  http://localhost:${port}/`
	);
});
