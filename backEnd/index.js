import express from "express";
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
	res.send(
		"Hello front! This is a message sent from the backend, hosted on railway!"
	);
});

app.listen(port, () => {
	console.log(`Server is running on port ${port} setup for railway!`);
});
