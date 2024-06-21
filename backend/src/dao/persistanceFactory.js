import config from "../config/config.js";

// Select the appropriate data access object (DAO) based on the PERSISTANCE environment variable.
export let SubscriptionDAO;

// If the PERSISTANCE environment variable is set to "MONGO", import and assign the SubscriptionMongoDAO.
if (config.PERSISTANCE === "MONGO") {
	// If MongoDB is selected, import and assign the SubscriptionMongoDAO.
	const { default: SubscriptionMongoDAO } = await import(
		"./mongo/subscription.mongo.dao.js"
	);
	SubscriptionDAO = SubscriptionMongoDAO;
} else {
	// If no valid option is provided, default to the SubscriptionFileDAO.
	const { default: SubscriptionFileDAO } = await import(
		"./file/subscription.dao.js"
	);
	SubscriptionDAO = SubscriptionFileDAO;
}
