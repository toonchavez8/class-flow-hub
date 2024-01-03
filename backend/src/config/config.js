import dotenv from "dotenv";
dotenv.config();

export default {
	PORT: process.env.PORT,
	MONGO: {
		URI: process.env.MONGO_URI,
		DB: process.env.MONGO_DB,
	},
	PERSISTANCE: process.env.PERSISTANCE,
};
