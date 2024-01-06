import { subscriptionService } from "../respositories/index.js";
import isValidEmailFormat from "../utils/isValidEmail.js";

export const getSubscribedEmails = async (req, res) => {
	const subscriptions = await subscriptionService.getSubscribedEmails();

	res.status(200).json(subscriptions);
};

export const subscribeEmail = async (req, res) => {
	const { email } = req.body;

	// Validate email format (example: a simple email format validation)
	if (!isValidEmailFormat(email)) {
		res.status(422).json({ message: "Invalid email format" });
		return;
	}

	const subscribe = await subscriptionService.subscribeEmail(email);

	console.log("subscribe", subscribe.status);

	if (subscribe.status === 409) {
		res.status(400).json({ message: "Email already subscribed" });
		return;
	}

	if (subscribe.status === 404) {
		res.status(404).json({ message: "Resource not found" });
		return;
	}

	res.status(201).json({ message: "Subscribed" });
};
