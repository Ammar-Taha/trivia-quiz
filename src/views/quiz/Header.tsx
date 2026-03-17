import { Brain, Flame, LogOut } from "lucide-react";

export default function Header() {
  return (
    <header className="flex flex-col gap-3 border-b-2 border-[var(--color-accent)] bg-[var(--color-surface)] px-3 py-3 text-[var(--color-ink)] md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-2">
        <Brain size={22} className="text-[var(--color-danger-hover)]" />
        <p className="text-lg font-bold tracking-[0.06rem]">Trivia Quiz</p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2 md:justify-end">
        <span className="inline-flex h-9 items-center border-2 border-[var(--color-danger-hover)] bg-[var(--color-surface)] px-2.5 text-xs font-semibold text-[var(--color-ink)]">
          Science
        </span>
        <span className="inline-flex h-9 items-center border-2 border-[var(--color-danger-hover)] bg-[var(--color-surface)] px-2.5 text-xs font-semibold text-[var(--color-ink)]">
          Medium
        </span>

        <span className="inline-flex h-9 items-center gap-1.5 border-2 border-[var(--color-danger-hover)] bg-[var(--color-surface)] px-2.5 text-xs font-semibold text-[var(--color-ink)]">
          <Flame size={14} />3 streak
        </span>

        <button
          type="button"
          className="inline-flex h-9 items-center gap-1.5 border-2 border-[var(--color-danger-hover)] bg-[var(--color-ink)] px-2.5 text-xs font-semibold text-[var(--color-surface)] transition-colors duration-200 hover:bg-[var(--color-danger-hover)]"
        >
          <LogOut size={14} />
          Quit
        </button>
      </div>
    </header>
  );
}
