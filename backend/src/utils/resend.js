import { Resend } from "resend";
import config from "../config/config.js";

export const resendService = new Resend(config.RESEND.API_KEY);