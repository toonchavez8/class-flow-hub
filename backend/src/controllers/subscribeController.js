import { subscriptionService } from "../respositories/index.js";
import isValidEmailFormat from "../utils/isValidEmail.js";

// Controller function to get all subscribed emails
export const getSubscribedEmails = async (req, res) => {
	const subscriptions = await subscriptionService.getSubscribedEmails();

	// Respond with a JSON containing the subscribed emails
	res.status(200).json({ status: 200, payload: subscriptions });
};

// Controller function to subscribe an email
export const subscribeEmail = async (req, res) => {
	const { email } = req.body;

	// Check if the email has a valid format
	if (!isValidEmailFormat(email)) {
		res.status(422).json({ status: 422, message: "Invalid email format" });
		return;
	}

	// Subscribe the email using the subscriptionService
	const subscribe = await subscriptionService.subscribeEmail(email);

	// Log the subscription details
	console.log("subscribe", subscribe);

	// Handle different subscription statuses
	if (subscribe.status === 409) {
		// If the email is already subscribed, respond with a conflict status
		res
			.status(409)
			.json({ status: subscribe.status, message: "Email already subscribed" });
		return;
	}

	if (!subscribe) {
		// If the subscription was not successful, respond with a not found status
		res.status(404).json({ status: 404, message: "Resource not found" });
		return;
	}
	// If the subscription was successful, respond with a created status
	res.status(201).json({ status: 201, message: "Subscribed", email: email });
};
