import { create } from "zustand";

export const useAuthStore = create((set) => ({
	signedIn: false,
	signIn: () => set({ signedIn: true }),
	signOut: () => set({ signedIn: false }),
}));
