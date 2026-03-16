import { Brain } from "lucide-react";
import CategorySelect from "./CategorySelect";
import DifficultySelect from "./DifficultySelect";

export default function Header() {
  return (
    <header className="flex flex-col gap-4 border-b-2 border-[var(--color-accent)] bg-[var(--color-surface)] px-3 py-3 text-[var(--color-ink)] sm:flex-row sm:items-center sm:justify-between sm:px-5 sm:py-4">
      <div className="flex items-center gap-2">
        <span className="inline-flex h-12 w-12 items-center justify-center text-[var(--color-danger-hover)]">
          <Brain size={26} strokeWidth={2.25} />
        </span>
        <p className="text-lg font-bold tracking-[0.06rem] sm:text-xl">
          Trivia Quiz
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <CategorySelect
          id="header-category"
          className="border-2 border-[var(--color-danger-hover)] bg-[var(--color-surface)] px-2.5 py-1.5 text-sm font-medium tracking-wide text-[var(--color-ink)]"
        />
        <DifficultySelect
          id="header-difficulty"
          className="border-2 border-[var(--color-danger-hover)] bg-[var(--color-surface)] px-2.5 py-1.5 text-sm font-medium tracking-wide text-[var(--color-ink)]"
        />
      </div>
    </header>
  );
}
