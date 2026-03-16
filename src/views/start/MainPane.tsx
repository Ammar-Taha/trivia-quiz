import Hero from "./Hero";
import CategorySelect from "./CategorySelect";
import DifficultySelect from "./DifficultySelect";

export default function MainPane() {
  return (
    <section className="flex flex-1 items-center justify-center px-4 py-10 text-center sm:px-8 sm:py-14">
      <div className="flex w-full flex-col items-center justify-center gap-6 sm:gap-8">
        <Hero />

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
