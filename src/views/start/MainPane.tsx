import { BarChart3, FileText, Flame, Timer } from "lucide-react";
import CategorySelect from "./CategorySelect";
import DifficultySelect from "./DifficultySelect";

export default function MainPane() {
  return (
    <section className="flex flex-1 items-center justify-center px-4 py-10 text-center sm:px-8 sm:py-14">
      <div className="flex w-full flex-col items-center justify-center gap-6 sm:gap-8">
        <div className="space-y-3">
          <h1 className="text-2xl font-bold uppercase tracking-[0.08rem] sm:text-3xl">
            Challenge Your Brain
          </h1>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-[var(--color-surface-hover)]">
            Step into a focused trivia session built for quick thinking, streak
            building, and measurable progress. Choose your category and
            difficulty, then launch into a clean quiz flow powered by The Trivia
            API.
          </p>
        </div>

        <div className="mt-1 flex flex-wrap items-center justify-center gap-2.5">
          <span className="inline-flex items-center gap-1.5 border border-[var(--color-accent)] bg-[var(--color-ink)] px-2.5 py-1.5 text-sm font-medium">
            <BarChart3 size={15} />
            Live Stats
          </span>
          <span className="inline-flex items-center gap-1.5 border border-[var(--color-accent)] bg-[var(--color-ink)] px-2.5 py-1.5 text-sm font-medium">
            <Flame size={15} />
            Streak Tracker
          </span>
          <span className="inline-flex items-center gap-1.5 border border-[var(--color-accent)] bg-[var(--color-ink)] px-2.5 py-1.5 text-sm font-medium">
            <Timer size={15} />
            Timer
          </span>
          <span className="inline-flex items-center gap-1.5 border border-[var(--color-accent)] bg-[var(--color-ink)] px-2.5 py-1.5 text-sm font-medium">
            <FileText size={15} />
            Report Card
          </span>
        </div>

        <div className="mt-1 flex flex-wrap items-center justify-center gap-2.5">
          <CategorySelect
            id="main-category"
            className="border-2 border-[var(--color-accent)] bg-[var(--color-surface)] px-2.5 py-1.5 text-sm font-medium tracking-wide text-[var(--color-ink)]"
          />
          <DifficultySelect
            id="main-difficulty"
            className="border-2 border-[var(--color-accent)] bg-[var(--color-surface)] px-2.5 py-1.5 text-sm font-medium tracking-wide text-[var(--color-ink)]"
          />
        </div>

        <button
          type="button"
          className="mt-2 border-2 border-[var(--color-accent)] bg-[var(--color-ink)] px-5 py-2.5 text-base font-semibold text-[var(--color-surface)] transition-colors duration-200 hover:bg-[var(--color-danger-hover)]"
        >
          ▶ Launch Quiz
        </button>
      </div>
    </section>
  );
}
