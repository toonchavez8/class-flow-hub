import express from "express";
import cors from "cors"; // Import the cors middleware

const app = express();
const port = process.env.PORT || 3001;

// Use cors middleware to enable CORS for all routes
app.use(cors());

app.get("/", (req, res) => {
	res.send(
		"Hello front! This is a message sent from the backend, hosted on railway!"
	);
});

app.listen(port, () => {
	console.log(`Server is running on port ${port} setup for railway!`);
});
