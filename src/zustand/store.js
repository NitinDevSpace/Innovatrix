import { create } from "zustand";

export const useAuthStore = create((set) => ({
	signedIn: false,
	user: null,
	signIn: (user) => set({ signedIn: true, user }),
	signOut: () => set({ signedIn: false, user: null }),
}));
