import { create } from "zustand";

export const BASE_CORRECTNESS_POINTS = 100;
export const MAX_SPEED_BONUS = 40;

export type ScoreBreakdown = {
  correctnessPoints: number;
  speedBonus: number;
  streakBonus: number;
  total: number;
};

export type ScoreInput = {
  isCorrect: boolean;
  timeLeftSec: number;
  timeLimitSec: number;
  currentStreak: number;
};

export type ResultAttempt = {
  questionId: string;
  questionText: string;
  userAnswer: string;
  correctAnswer: string;
  timeTakenSec: number;
  isCorrect: boolean;
  score: ScoreBreakdown;
};

function getStreakBonus(currentStreak: number) {
  if (currentStreak >= 7) return 30;
  if (currentStreak >= 5) return 20;
  if (currentStreak >= 3) return 10;
  return 0;
}

export function calculateQuestionScore({
  isCorrect,
  timeLeftSec,
  timeLimitSec,
  currentStreak,
}: ScoreInput): ScoreBreakdown {
  if (!isCorrect) {
    return {
      correctnessPoints: 0,
      speedBonus: 0,
      streakBonus: 0,
      total: 0,
    };
  }

  const normalizedTimeLimit = Math.max(1, timeLimitSec);
  const clampedTimeLeft = Math.min(Math.max(timeLeftSec, 0), normalizedTimeLimit);
  const speedRatio = clampedTimeLeft / normalizedTimeLimit;
  const speedBonus = Math.round(MAX_SPEED_BONUS * speedRatio);
  const streakBonus = getStreakBonus(currentStreak);
  const correctnessPoints = BASE_CORRECTNESS_POINTS;

  return {
    correctnessPoints,
    speedBonus,
    streakBonus,
    total: correctnessPoints + speedBonus + streakBonus,
  };
}

type ResultsStore = {
  attempts: ResultAttempt[];
  appendAttempt: (attempt: ResultAttempt) => void;
  clearAttempts: () => void;
  getFinalScore: () => number;
  getCorrectCount: () => number;
  getWrongCount: () => number;
  getAccuracyPercent: () => number;
  getAverageTimeSec: () => number;
};

export const useResultsStore = create<ResultsStore>((set, get) => ({
  attempts: [],
  appendAttempt: (attempt) =>
    set((state) => ({
      attempts: [...state.attempts, attempt],
    })),
  clearAttempts: () => set({ attempts: [] }),
  getFinalScore: () =>
    get().attempts.reduce((sum, attempt) => sum + attempt.score.total, 0),
  getCorrectCount: () => get().attempts.filter((attempt) => attempt.isCorrect).length,
  getWrongCount: () => get().attempts.filter((attempt) => !attempt.isCorrect).length,
  getAccuracyPercent: () => {
    const attempts = get().attempts;
    if (attempts.length === 0) return 0;
    const correctCount = attempts.filter((attempt) => attempt.isCorrect).length;
    return Math.round((correctCount / attempts.length) * 100);
  },
  getAverageTimeSec: () => {
    const attempts = get().attempts;
    if (attempts.length === 0) return 0;
    const totalTime = attempts.reduce(
      (sum, attempt) => sum + attempt.timeTakenSec,
      0,
    );
    return Math.round(totalTime / attempts.length);
  },
}));
