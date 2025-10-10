import { axiosInstance } from ".";

export const SignUpRequest = async (payload) => {
	try {
		const response = await axiosInstance.post("/api/auth/signup", payload);
		return response.data;
	} catch (error) {
		console.log("Error Registering User: ", error);
	}
};

export const SignInRequest = async (payload) => {
	try {
		const response = await axiosInstance.post("/api/auth/signin", payload);
		return response.data;
	} catch (error) {
		console.log("Error Signing: ", error);
	}
};
