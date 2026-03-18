import { create } from "zustand";

type View = "start" | "quiz" | "results";

type Store = {
  view: View;
  setView: (view: View) => void;
};

export const useQuizStore = create<Store>((set) => ({
  view: "start",
  setView: (view) => set({ view }),
}));
