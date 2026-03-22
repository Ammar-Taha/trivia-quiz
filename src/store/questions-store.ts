import { create } from "zustand";

export type Question = {
  category: string;
  id: string;
  correctAnswer: string;
  incorrectAnswers: string[];
  question: string;
  tags: string[];
  type: string;
  difficulty: "easy" | "medium" | "hard";
  regions: string[];
  isNiche: boolean;
};

export type QuestionsRequestStatus = "idle" | "loading" | "success" | "error";

type QuestionsStore = {
  questions: Question[];
  requestStatus: QuestionsRequestStatus;
  requestError: string | null;
  setQuestions: (questions: Question[]) => void;
  setRequestStatus: (requestStatus: QuestionsRequestStatus) => void;
  setRequestError: (requestError: string | null) => void;
  clearQuestions: () => void;
};
export const useQuestionsStore = create<QuestionsStore>((set) => ({
  questions: [],
  requestStatus: "idle",
  requestError: null,
  setQuestions: (questions) => set({ questions }),
  setRequestStatus: (requestStatus) => set({ requestStatus }),
  setRequestError: (requestError) => set({ requestError }),
  clearQuestions: () => set({ questions: [] }),
}));
