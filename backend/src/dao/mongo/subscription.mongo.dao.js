import SubscriptionModel from "../../models/subscription.model.js";

export default class SubscriptionMongoDAO {
	constructor() {
		this.collection = SubscriptionModel;
	}
	getAll = async () => await this.collection.find();
	create = async (email) => {
		const existingSubscription = await this.collection.findOne({ email });

		if (existingSubscription) {
			return { status: 409, message: "Email already exists in the database." };
		}

		const newSubscription = await this.collection.create({ email });
		return newSubscription;
	};
}
