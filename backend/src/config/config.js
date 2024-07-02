import dotenv from "dotenv";
dotenv.config();

export default {
	PORT: process.env.PORT,
	MONGO: {
		URI: mongoURI(),
		DB: process.env.MONGO_DB,
	},
	PERSISTANCE: process.env.PERSISTANCE,
	RESEND: {
		API_KEY: process.env.RESEND_API_KEY,
	},
};

function mongoURI() {
	if (process.env.PERSISTANCE === "MONGOLOCAL") {
		return process.env.MONGO_URI_LOCAL;
	} else if (process.env.PERSISTANCE === "MONGOATLAS") {
		return process.env.MONGO_URI_ATLAS;
	}
}
