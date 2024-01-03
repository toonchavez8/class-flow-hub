import { SubscriptionDAO } from "../dao/persistanceFactory.js";
import SubscriptionRepository from "./susbscription.respository.js";

export const subscriptionService = new SubscriptionRepository(
	new SubscriptionDAO()
);
