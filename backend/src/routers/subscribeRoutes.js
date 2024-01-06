import { Router } from "express";
import {
	getSubscribedEmails,
	subscribeEmail,
} from "../controllers/subscribeController.js";

const subscribeRoutes = Router();

subscribeRoutes.get("/", getSubscribedEmails);

subscribeRoutes.post("/", subscribeEmail);

export default subscribeRoutes;
