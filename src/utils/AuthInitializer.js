import { useEffect } from "react";
import { useAuthStore } from "../zustand/store";
import { getUserDetails } from "../services/user";

function AuthInitializer() {
	const { signIn, signOut } = useAuthStore();

	useEffect(() => {
		const initializeAuth = async () => {
			try {
				const userData = await getUserDetails(); // Calls /auth/me
				// Check if user data is valid
				if (userData && userData.data.username) {
					signIn(userData.data); // Update store
				} else {
					signOut(); // Treat as not logged in
				}
			} catch (err) {
				signOut(); // Token missing or invalid
			}
		};

		initializeAuth();
	}, []);

	return null; // This component renders nothing
}

export default AuthInitializer;
