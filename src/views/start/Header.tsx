import { Brain } from "lucide-react";
import CategorySelect from "./CategorySelect";
import DifficultySelect from "./DifficultySelect";

export default function Header() {
  return (
    <header className="flex flex-col items-center gap-3 border-b-2 border-[var(--color-accent)] bg-[var(--color-surface)] px-3 py-2.5 text-[var(--color-ink)] md:flex-row md:justify-between md:px-5 md:py-3">
      <div className="flex items-center gap-2">
        <span className="inline-flex h-10 w-10 items-center justify-center text-[var(--color-danger-hover)]">
          <Brain size={24} strokeWidth={2.25} />
        </span>
        <p className="text-lg leading-none font-bold tracking-[0.06rem] sm:text-xl">
          Trivia Quiz
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2 md:justify-end">
        <CategorySelect
          id="header-category"
          className="h-10 border-2 border-[var(--color-danger-hover)] bg-[var(--color-surface)] px-3 text-sm font-medium tracking-wide text-[var(--color-ink)]"
        />
        <DifficultySelect
          id="header-difficulty"
          className="h-10 border-2 border-[var(--color-danger-hover)] bg-[var(--color-surface)] px-3 text-sm font-medium tracking-wide text-[var(--color-ink)]"
        />
      </div>
    </header>
  );
}
