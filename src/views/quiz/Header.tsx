import { Brain, Flame, LogOut } from "lucide-react";
import useFormattedQuizSettings from "../../hooks/useFormattedQuizSettings";
import useQuizSessionActions from "../../hooks/useQuizSessionActions";
import { useStatsStore } from "../../store/stats-store";

export default function Header() {
  const { category, difficulty } = useFormattedQuizSettings();
  const resetQuiz = useQuizSessionActions();
  const streak = useStatsStore((s) => s.stats.streak);

  return (
    <header className="flex flex-col gap-3 border-b-2 border-accent bg-surface px-3 py-3 text-ink md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-2">
        <Brain size={22} className="text-danger-hover" />
        <p className="text-lg font-bold tracking-[0.06rem]">Trivia Quiz</p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2 md:justify-end">
        <span className="inline-flex h-9 items-center border-2 border-danger-hover bg-surface px-2.5 text-xs font-semibold text-ink">
          {category}
        </span>
        <span className="inline-flex h-9 items-center border-2 border-danger-hover bg-surface px-2.5 text-xs font-semibold text-ink">
          {difficulty}
        </span>

        <span className="inline-flex h-9 items-center gap-1.5 border-2 border-danger-hover bg-surface px-2.5 text-xs font-semibold text-ink">
          <Flame size={14} />
          {streak} streak
        </span>

        <button
          type="button"
          className="inline-flex h-9 items-center gap-1.5 border-2 border-danger-hover bg-ink px-2.5 text-xs font-semibold text-surface transition-colors duration-200 hover:bg-danger-hover"
          onClick={resetQuiz}
        >
          <LogOut size={14} />
          Quit
        </button>
      </div>
    </header>
  );
}
