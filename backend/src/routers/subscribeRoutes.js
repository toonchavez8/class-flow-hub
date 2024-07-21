import { Router } from "express";
import {
	getSubscribedEmails,
	subscribeEmail,
} from "../controllers/subscribeController.js";
import { resendService } from "../utils/resend.js";

const subscribeRoutes = Router();

// GET route to retrieve subscribed emails
subscribeRoutes.get("/", getSubscribedEmails);

// POST route to subscribe an email
subscribeRoutes.post("/", subscribeEmail);

subscribeRoutes.get("/:email", async (req, res) => {
	const { email } = req.params;
	const { data, error } = await resendService.emails.send({
		from: "classflowhub@toonchavez.dev",
		to: email,
		subject: "Confirm your subscription",
		html: "<strong>it works!</strong>",
	});
	if (error) {
		return res.status(400).json({ error });
	}

	res.status(200).json({ data });
});

export default subscribeRoutes;
