import { Brain, Flame, Trophy } from "lucide-react";

export default function Summary() {
  return (
    <section className="border-b-2 border-accent">
      <header className="flex flex-col gap-3 border-b-2 border-accent bg-surface px-3 py-3 text-ink md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <Brain size={22} className="text-danger-hover" />
          <p className="text-lg font-bold tracking-[0.06rem]">Trivia Quiz</p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex h-9 items-center border-2 border-danger-hover bg-surface px-2.5 text-xs font-semibold text-ink">
            Science
          </span>
          <span className="inline-flex h-9 items-center border-2 border-danger-hover bg-surface px-2.5 text-xs font-semibold text-ink">
            Medium
          </span>
          <span className="inline-flex h-9 items-center gap-1.5 border-2 border-danger-hover bg-surface px-2.5 text-xs font-semibold text-ink">
            <Flame size={14} />
            3 streak
          </span>
        </div>
      </header>

      <div className="px-3 py-4 text-ink">
        <div className="mb-3">
          <h1 className="inline-flex items-center gap-2 text-xl font-bold tracking-[0.04rem]">
            <Trophy size={18} className="text-danger-hover" />
            Quiz Summary Report
          </h1>
          <p className="mt-1 text-xs text-muted">
            Science • Medium • 10 Questions • Best Streak: 3
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 md:grid-cols-5">
          <div className="border border-accent bg-surface p-2 text-center">
            <p className="text-xl font-bold">8/10</p>
            <p className="text-[11px] text-muted">Final Score</p>
          </div>
          <div className="border border-accent bg-surface p-2 text-center">
            <p className="text-xl font-bold">80%</p>
            <p className="text-[11px] text-muted">Accuracy</p>
          </div>
          <div className="border border-accent bg-surface p-2 text-center">
            <p className="text-xl font-bold">8</p>
            <p className="text-[11px] text-muted">Correct</p>
          </div>
          <div className="border border-accent bg-surface p-2 text-center">
            <p className="text-xl font-bold">2</p>
            <p className="text-[11px] text-muted">Wrong</p>
          </div>
          <div className="border border-accent bg-surface p-2 text-center">
            <p className="text-xl font-bold">11s</p>
            <p className="text-[11px] text-muted">Avg Time</p>
          </div>
        </div>
      </div>
    </section>
  );
}
