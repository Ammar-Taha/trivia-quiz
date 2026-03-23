import { useState } from "react";
import Hero from "./Hero";
import CategorySelect from "./CategorySelect";
import DifficultySelect from "./DifficultySelect";
import { useNavigationStore } from "../../store/navigation-store";
import { useQuestionsStore } from "../../store/questions-store";
import { useSettingsStore } from "../../store/settings-store";

const QUESTIONS_LIMIT = 10;
const BASE_URL = "https://the-trivia-api.com/api/questions";

export default function MainPane() {
  const [isLoading, setIsLoading] = useState(false);
  const setView = useNavigationStore((s) => s.setView);
  const { category, difficulty } = useSettingsStore((s) => s.quizSettings);
  const setQuestions = useQuestionsStore((s) => s.setQuestions);
  const setRequestStatus = useQuestionsStore((s) => s.setRequestStatus);
  const setRequestError = useQuestionsStore((s) => s.setRequestError);

  async function handleLaunchQuiz() {
    setIsLoading(true);
    setRequestStatus("loading");
    setRequestError(null);
    const QUERY_PARAMS = `limit=${QUESTIONS_LIMIT}&categories=${category}&difficulty=${difficulty}`;

    try {
      const response = await fetch(`${BASE_URL}?${QUERY_PARAMS}`);
      if (!response.ok) throw new Error(`Request failed: ${response.status}`);
      const data = await response.json();
      // Logging API response for testing
      console.log(data);
      setQuestions(data);
      setRequestStatus("success");
      setView("quiz");
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Something went wrong while loading questions.";
      setRequestStatus("error");
      setRequestError(message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="flex flex-1 items-center justify-center px-4 py-10 text-center sm:px-8 sm:py-14">
      <div className="flex w-full flex-col items-center justify-center gap-6 sm:gap-8">
        <Hero />

        <div className="mt-1 flex flex-wrap items-center justify-center gap-2.5">
          <CategorySelect
            id="main-category"
            className="border-2 border-accent bg-surface px-2.5 py-1.5 text-sm font-medium tracking-wide text-ink"
          />
          <DifficultySelect
            id="main-difficulty"
            className="border-2 border-accent bg-surface px-2.5 py-1.5 text-sm font-medium tracking-wide text-ink"
          />
        </div>

        <button
          type="button"
          className="mt-2 border-2 border-accent bg-ink px-5 py-2.5 text-base font-semibold text-surface transition-colors duration-200 hover:bg-danger-hover"
          onClick={handleLaunchQuiz}
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "▶ Launch Quiz"}
        </button>
      </div>
    </section>
  );
}
