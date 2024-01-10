// Select the appropriate data access object (DAO) based on the PERSISTANCE environment variable.
export let SubscriptionDAO;

// Switch statement to dynamically import and assign the DAO based on the chosen persistence method.
switch (process.env.PERSISTANCE) {
	case "MONGO": {
		// If MongoDB is selected, import and assign the SubscriptionMongoDAO.
		const { default: SubscriptionMongoDAO } = await import(
			"./mongo/subscription.mongo.dao.js"
		);
		SubscriptionDAO = SubscriptionMongoDAO;
		break;
	}
	case "FILE": {
		// If file-based storage is selected, import and assign the SubscriptionFileDAO.
		const { default: SubscriptionFileDAO } = await import(
			"./file/subscription.dao.js"
		);
		SubscriptionDAO = SubscriptionFileDAO;
		break;
	}
	default:
		// If no valid option is provided, default to the SubscriptionFileDAO.
		SubscriptionDAO = require("./file/subscription.dao.js").default;
		break;
}
