import { useEffect } from "react";
import { useAuthStore } from "../zustand/store";
import { getUserDetails } from "../services/user";

function AuthInitializer() {
	const { signedIn, signIn, signOut } = useAuthStore();

	useEffect(() => {
		const initializeAuth = async () => {
			try {
				const userData = await getUserDetails(); // Calls /auth/me
				if (userData) signIn(userData); // Update store
			} catch (err) {
				signOut(); // Token missing or invalid
			}
		};

		initializeAuth();
	}, []);

	return null; // This component renders nothing
}

export default AuthInitializer;
