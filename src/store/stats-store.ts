import { create } from "zustand";

type Stats = {
  score: number;
  correct: number;
  wrong: number;
  streak: number;
  currentQuestionNumber: number;
  selectedAnswer: string | null;
};

type StatsStore = {
  stats: Stats;
  setStats: (updates: Partial<Stats>) => void;
  resetStats: () => void;
};

const initialStats: Stats = {
  score: 0,
  correct: 0,
  wrong: 0,
  streak: 0,
  currentQuestionNumber: 1,
  selectedAnswer: null,
};

export const useStatsStore = create<StatsStore>((set) => ({
  stats: initialStats,
  setStats: (updates) =>
    set((state) => ({
      stats: {
        ...state.stats,
        ...updates,
      },
    })),
  resetStats: () => set({ stats: initialStats }),
}));
