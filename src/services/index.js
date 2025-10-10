import axios from "axios";

export const axiosInstance = axios.create({
	baseURL:
		process.env.NODE_ENV === "production"
			? "hosted URL"
			: "http://localhost:8080",
	withCredentials: true,
	headers: {
		"Content-Type": "application/json",
	},
});
