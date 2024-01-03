export let SubscriptionDAO;

switch (process.env.PERSISTANCE) {
	case "MONGO": {
		const { default: SubscriptionMongoDAO } = await import(
			"./mongo/subscription.mongo.dao.js"
		);
		SubscriptionDAO = SubscriptionMongoDAO;
		break;
	}
	case "FILE": {
		const { default: SubscriptionFileDAO } = await import(
			"./file/subscription.dao.js"
		);
		SubscriptionDAO = SubscriptionFileDAO;
		break;
	}
	default:
		SubscriptionDAO = require("./file/subscription.dao.js").default;
		break;
}
