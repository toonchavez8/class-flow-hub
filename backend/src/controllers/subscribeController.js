import { subscriptionService } from "../respositories/index.js";
import isValidEmailFormat from "../utils/isValidEmail.js";
import { resendService } from "../utils/resend.js";

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
		return res
			.status(422)
			.json({ status: 422, message: "Invalid email format" });
	}

	try {
		// Subscribe the email using the subscriptionService
		const subscribe = await subscriptionService.subscribeEmail(email);

		if (!subscribe) {
			return res
				.status(404)
				.json({ status: 404, message: "Resource not found" });
		}

		if (subscribe.status === 409) {
			return res
				.status(409)
				.json({ status: 409, message: "Email already subscribed" });
		}

		// Send confirmation email
		const { data, error } = await resendService.emails.send({
			from: "classflowhub@toonchavez.dev",
			to: email,
			subject: "Confirm your subscription",
			html: "<strong>it works!</strong>",
		});

		if (error) {
			return res
				.status(400)
				.json({
					status: 400,
					message: "Failed to send confirmation email",
					error,
				});
		}

		res.status(201).json({ status: 201, message: "Subscribed", email, data });
	} catch (error) {
		console.error("Error subscribing email:", error);
		res
			.status(500)
			.json({ status: 500, message: "Internal server error", error });
	}
};
