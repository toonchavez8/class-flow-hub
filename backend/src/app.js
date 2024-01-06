import express from "express";
import cors from "cors"; // Import the cors middleware
import config from "./config/config.js";
import subscribeRoutes from "./routers/subscribeRoutes.js";

const app = express();
const port = config.PORT;

// Use cors middleware to enable CORS for all routes
app.use(cors());

// middlewares
app.use(express.json());

app.get("/", (req, res) => {
	res.json(
		"Hello front! This is a message sent from the backend, hosted on railway!"
	);
});

//routes
app.use("/api/subscribe", subscribeRoutes);

app.listen(port, () => {
	console.log(
		`Server is running on port ${port} setup for railway! Local:  http://localhost:${port}/`
	);
});
