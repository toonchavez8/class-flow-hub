export default class SubscriptionRepository {
	constructor(dao) {
		this.dao = dao;
	}

	getSubscribedEmails = async () => await this.dao.getAll();
	subscribeEmail = async (email) => await this.dao.create(email);
}
