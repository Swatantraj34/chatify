import { create } from "zustand";
import { axiosIntance } from "../lib/axios";
import toast from "react-hot-toast";

export const useAuthStore = create((set) => ({
  authuser: null,
  ischeckingauth: true,
  isSigningup: false,

  checkAuth: async () => {
    try {
      const response = await axiosIntance.get("/auth/check");
      set({ authuser: response.data.user, ischeckingauth: false });
    } catch (error) {
      console.error("Error checking auth:", error);
      set({ authuser: null, ischeckingauth: false });
    }
  }, // ✅ yaha comma missing tha

  signup: async (data) => {
    set({ isSigningup: true });
    try {
      const response = await axiosIntance.post("/auth/signup", data);
      set({ authuser: response.data.user }); // ✅ res → response
      toast.success("Signup successful!"); // ✅ toaster → toast
    } catch (error) {
      toast.error(error?.response?.data?.message || "Signup failed");
    } finally {
      set({ isSigningup: false });
    }
  },
}));