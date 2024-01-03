import { subscriptionService } from "../respositories/index.js";

export const getSubscribedEmails = async (req, res) => {
	const subscriptions = await subscriptionService.getSubscribedEmails();

	res.status(200).json(subscriptions);
};

export const subscribeEmail = async (req, res) => {
	const { email } = req.body;

	const subscribe = await subscriptionService.subscribeEmail(email);

	if (!subscribe) {
		res.status(400).json({ message: "Email already subscribed" });
		return;
	}

	res.status(201).json({ message: "Subscribed" });
};
