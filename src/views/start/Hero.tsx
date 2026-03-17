import { BarChart3, FileText, Flame, Timer } from "lucide-react";

export default function Hero() {
  return (
    <>
      <div className="space-y-3">
        <h1 className="text-2xl font-bold uppercase tracking-[0.08rem] sm:text-3xl">
          Challenge Your Brain
        </h1>
        <p className="mx-auto max-w-xl text-base leading-relaxed text-surface-hover">
          Step into a focused trivia session built for quick thinking, streak
          building, and measurable progress. Choose your category and difficulty,
          then launch into a clean quiz flow powered by The Trivia API.
        </p>
      </div>

      <div className="mt-1 flex flex-wrap items-center justify-center gap-2.5">
        <span className="inline-flex items-center gap-1.5 border border-accent bg-ink px-2.5 py-1.5 text-sm font-medium">
          <BarChart3 size={15} />
          Live Stats
        </span>
        <span className="inline-flex items-center gap-1.5 border border-accent bg-ink px-2.5 py-1.5 text-sm font-medium">
          <Flame size={15} />
          Streak Tracker
        </span>
        <span className="inline-flex items-center gap-1.5 border border-accent bg-ink px-2.5 py-1.5 text-sm font-medium">
          <Timer size={15} />
          Timer
        </span>
        <span className="inline-flex items-center gap-1.5 border border-accent bg-ink px-2.5 py-1.5 text-sm font-medium">
          <FileText size={15} />
          Report Card
        </span>
      </div>
    </>
  );
}
