/**
 * SubscriptionRepository class provides a high-level interface for interacting
 * with the underlying data access object (DAO) to perform subscription-related operations.
 */

export default class SubscriptionRepository {
	constructor(dao) {
		this.dao = dao;
	}

	/**
	 * Retrieves all subscribed emails from the underlying data source.
	 * Returns a promise that resolves to an array of subscribed emails.
	 */
	getSubscribedEmails = async () => await this.dao.getAll();

	/**
	 * Subscribes an email by adding it to the underlying data source.
	 * Returnes a promise that resolves to the created subscription object.
	 */
	subscribeEmail = async (email) => await this.dao.create(email);
}
