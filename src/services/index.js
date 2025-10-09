import axios from "axios";

export const axiosInstance = axios.create({
	baseURL:
        process.env.NODE_ENV === "production"
            ? "hosted URL" 
            : "local hsot URL",
	withCredentials: true,
	headers: {
		"Content-Type": "application/json",
	},
});
