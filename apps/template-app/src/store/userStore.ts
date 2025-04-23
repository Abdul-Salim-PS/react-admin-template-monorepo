import { User } from "@/types";
import { create } from "zustand";

interface UserState {
  user: User | null;
  isLoggedIn: boolean;
  login: (userData: User) => void;
  logout: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  isLoggedIn: false,

  login: (userData) => {
    set({ user: userData, isLoggedIn: true });
    console.log(userData);
  },

  logout: () => {
    set({ user: null, isLoggedIn: false });
  },
}));
