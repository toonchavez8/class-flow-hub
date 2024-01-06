import fs from "fs";
import path from "path";

const dirname = "./data/";
const dataFilePath = path.join(dirname, "subscriptions.json");

export default class SubscriptionFileDAO {
	constructor() {
		this.loadData();
	}

	loadData() {
		try {
			const data = fs.readFileSync(dataFilePath, "utf-8");
			this.subscriptions = JSON.parse(data);
		} catch (error) {
			// If the file doesn't exist or is invalid JSON, initialize with an empty array
			this.subscriptions = [];
			this.createDataDirectory(); // Create the directory if it doesn't exist
			this.saveData(); // Create the file with an empty array
		}
	}

	createDataDirectory() {
		const directoryPath = path.dirname(dataFilePath);
		if (!fs.existsSync(directoryPath)) {
			fs.mkdirSync(directoryPath, { recursive: true });
		}
	}

	saveData() {
		const data = JSON.stringify(this.subscriptions, null, 2);
		fs.writeFileSync(dataFilePath, data, "utf-8");
	}

	getAll = () => this.subscriptions;

	create = (email) => {
		// Check if the email already exists
		const existingSubscription = this.subscriptions.find(
			(subscription) => subscription.email === email
		);

		if (existingSubscription) {
			// If email exists, return a message
			return { message: "Email already exists in the database." };
		}

		// If email doesn't exist, create a new subscription with an ID
		const newSubscription = {
			id: this.getNextId(), // Call a method to get the next ID
			email,
		};

		this.subscriptions.push(newSubscription);
		this.saveData();
		return newSubscription;
	};

	getNextId() {
		// Calculate the next ID based on existing subscriptions
		const maxId = this.subscriptions.reduce(
			(max, subscription) => (subscription.id > max ? subscription.id : max),
			0
		);

		return maxId + 1;
	}
}
