import { create } from "zustand";

export type TimerStatus = "idle" | "running" | "paused" | "ended";

export type TimerState = {
  timeLimitSec: number;
  timeLeftSec: number;
  timerStatus: TimerStatus;
  questionStartedAt: number | null;
};

type TimerStore = {
  timer: TimerState;
  setTimer: (updates: Partial<TimerState>) => void;
  resetTimer: () => void;
};

const initialTimer: TimerState = {
  timeLimitSec: 120,
  timeLeftSec: 120,
  timerStatus: "idle",
  questionStartedAt: null,
};

export const useTimerStore = create<TimerStore>((set) => ({
  timer: initialTimer,
  setTimer: (updates) =>
    set((state) => ({
      timer: {
        ...state.timer,
        ...updates,
      },
    })),
  resetTimer: () => set({ timer: initialTimer }),
}));
