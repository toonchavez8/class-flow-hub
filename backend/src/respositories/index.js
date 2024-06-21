import { SubscriptionDAO } from "../dao/persistanceFactory.js";
import SubscriptionRepository from "./susbscription.respository.js";

// Create an instance of SubscriptionRepository using SubscriptionDAO
export const subscriptionService = new SubscriptionRepository(
	new SubscriptionDAO()
);
// This service acts as an abstraction for handling subscription data.
