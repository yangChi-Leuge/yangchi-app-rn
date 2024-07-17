import { createStore } from "zustand";

export const store = createStore(() => ({
    auth: {
        accessToken: "",
        refreshToken: "",
    },
}));
