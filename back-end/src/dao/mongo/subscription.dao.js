import SubscriptionModel from "../../models/subscription.model.js";

export default class SubscriptionMongoDAO {
	constructor() {
		this.collection = SubscriptionModel;
	}
	getAll = async () => await this.collection.find().toArray();
	create = async (email) => await this.collection.insertOne(email);
}
