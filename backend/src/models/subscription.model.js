import mongoose from "mongoose";

const SubscriptionSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		unique: true,
	},
});

const SubscriptionModel = mongoose.model("Subscriptions", SubscriptionSchema);

export default SubscriptionModel;
