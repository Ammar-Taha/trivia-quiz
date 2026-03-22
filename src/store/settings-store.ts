import { create } from "zustand";

export type Difficulty = "easy" | "medium" | "hard";

export function isDifficulty(value: string): value is Difficulty {
  return value === "easy" || value === "medium" || value === "hard";
}

export type QuizSettings = {
  category: string;
  difficulty: Difficulty;
};

type SettingsStore = {
  quizSettings: QuizSettings;
  setQuizSettings: (updates: Partial<QuizSettings>) => void;
  resetQuizSettings: () => void;
};

const initialQuizSettings: QuizSettings = {
  category: "general_knowledge",
  difficulty: "easy",
};

export const useSettingsStore = create<SettingsStore>((set) => ({
  quizSettings: initialQuizSettings,
  setQuizSettings: (updates) =>
    set((state) => ({
      quizSettings: {
        ...state.quizSettings,
        ...updates,
      },
    })),
  resetQuizSettings: () => set({ quizSettings: initialQuizSettings }),
}));
