import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { AuthState, User } from "../types/auth";

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      loading: false,
      error: null,

      login: (token, username, displayName) => 
        set({ 
          token, 
          user: { username, displayName: displayName || username } as User,
          error: null 
        }),

      logout: () => set({ user: null, token: null, error: null }),

      setUser: (user) => set({ user }),
    }),
    {
      name: "bosta-auth-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
