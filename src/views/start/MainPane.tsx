import Hero from "./Hero";
import CategorySelect from "./CategorySelect";
import DifficultySelect from "./DifficultySelect";
import { useQuizStore } from "../../store/quiz-store";

export default function MainPane() {
  const setView = useQuizStore((s) => s.setView);

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
          onClick={() => setView("quiz")}
        >
          ▶ Launch Quiz
        </button>
      </div>
    </section>
  );
}
