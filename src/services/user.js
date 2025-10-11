import { axiosInstance } from ".";

export const SignUpRequest = async (payload) => {
	try {
		const response = await axiosInstance.post("/api/auth/signup", payload);
		return response;
	} catch (error) {
		console.log("Error Registering User: ", error);
	}
};

export const SignInRequest = async (payload) => {
	try {
		const response = await axiosInstance.post("/api/auth/signin", payload);
		return response;
	} catch (error) {
		console.log("Error Signing: ", error);
	}
};

export const getUserDetails = async () => {
	try {
		const response = await axiosInstance.get("/api/auth/me");
		return response;
	} catch (error) {
		console.log("Error when Validating: ", error);
	}
};

export const SignOutRequest = async () => {
	try {
		const response = await axiosInstance.post("/api/auth/signout");
		return response;
	} catch (error) {
		console.log("Error Signing Out: ", error);
	}
};
