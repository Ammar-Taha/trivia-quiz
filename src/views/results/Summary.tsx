import { Brain, Flame, Trophy } from "lucide-react";

export default function Summary() {
  return (
    <section className="border-b-2 border-[var(--color-accent)]">
      <header className="flex flex-col gap-3 border-b-2 border-[var(--color-accent)] bg-[var(--color-surface)] px-3 py-3 text-[var(--color-ink)] md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <Brain size={22} className="text-[var(--color-danger-hover)]" />
          <p className="text-lg font-bold tracking-[0.06rem]">Trivia Quiz</p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex h-9 items-center border-2 border-[var(--color-danger-hover)] bg-[var(--color-surface)] px-2.5 text-xs font-semibold text-[var(--color-ink)]">
            Science
          </span>
          <span className="inline-flex h-9 items-center border-2 border-[var(--color-danger-hover)] bg-[var(--color-surface)] px-2.5 text-xs font-semibold text-[var(--color-ink)]">
            Medium
          </span>
          <span className="inline-flex h-9 items-center gap-1.5 border-2 border-[var(--color-danger-hover)] bg-[var(--color-surface)] px-2.5 text-xs font-semibold text-[var(--color-ink)]">
            <Flame size={14} />
            3 streak
          </span>
        </div>
      </header>

      <div className="px-3 py-4 text-[var(--color-ink)]">
        <div className="mb-3">
          <h1 className="inline-flex items-center gap-2 text-xl font-bold tracking-[0.04rem]">
            <Trophy size={18} className="text-[var(--color-danger-hover)]" />
            Quiz Summary Report
          </h1>
          <p className="mt-1 text-xs text-[var(--color-muted)]">
            Science • Medium • 10 Questions • Best Streak: 3
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 md:grid-cols-5">
          <div className="border border-[var(--color-accent)] bg-[var(--color-surface)] p-2 text-center">
            <p className="text-xl font-bold">8/10</p>
            <p className="text-[11px] text-[var(--color-muted)]">Final Score</p>
          </div>
          <div className="border border-[var(--color-accent)] bg-[var(--color-surface)] p-2 text-center">
            <p className="text-xl font-bold">80%</p>
            <p className="text-[11px] text-[var(--color-muted)]">Accuracy</p>
          </div>
          <div className="border border-[var(--color-accent)] bg-[var(--color-surface)] p-2 text-center">
            <p className="text-xl font-bold">8</p>
            <p className="text-[11px] text-[var(--color-muted)]">Correct</p>
          </div>
          <div className="border border-[var(--color-accent)] bg-[var(--color-surface)] p-2 text-center">
            <p className="text-xl font-bold">2</p>
            <p className="text-[11px] text-[var(--color-muted)]">Wrong</p>
          </div>
          <div className="border border-[var(--color-accent)] bg-[var(--color-surface)] p-2 text-center">
            <p className="text-xl font-bold">11s</p>
            <p className="text-[11px] text-[var(--color-muted)]">Avg Time</p>
          </div>
        </div>
      </div>
    </section>
  );
}
