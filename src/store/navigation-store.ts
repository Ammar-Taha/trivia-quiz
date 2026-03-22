import { create } from "zustand";

export type View = "start" | "quiz" | "results";

type NavigationStore = {
  view: View;
  setView: (view: View) => void;
};

export const useNavigationStore = create<NavigationStore>((set) => ({
  view: "start",
  setView: (view) => set({ view }),
}));
