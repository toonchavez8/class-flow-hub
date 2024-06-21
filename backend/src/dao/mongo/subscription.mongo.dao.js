import SubscriptionModel from "../../models/subscription.model.js";

export default class SubscriptionMongoDAO {
	constructor() {
		this.collection = SubscriptionModel;
	}
	getAll = async () => await this.collection.find();
	create = async (email) => await this.collection.create({ email });
}
