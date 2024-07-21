import { Router } from "express";
import {
	getSubscribedEmails,
	subscribeEmail,
} from "../controllers/subscribeController.js";

const subscribeRoutes = Router();

// GET route to retrieve subscribed emails
subscribeRoutes.get("/", getSubscribedEmails);

// POST route to subscribe an email
subscribeRoutes.post("/", subscribeEmail);

export default subscribeRoutes;
