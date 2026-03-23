import { Trophy } from "lucide-react";
import useFormattedQuizSettings from "../../hooks/useFormattedQuizSettings";
import { useResultsStore } from "../../store/results-store";

export default function Summary() {
  const { category, difficulty } = useFormattedQuizSettings();
  const attempts = useResultsStore((s) => s.attempts);

  const totalQuestions = attempts.length;
  const finalScore = attempts.reduce((sum, attempt) => sum + attempt.score.total, 0);
  const correct = attempts.filter((attempt) => attempt.isCorrect).length;
  const wrong = totalQuestions - correct;
  const accuracy = totalQuestions > 0 ? Math.round((correct / totalQuestions) * 100) : 0;
  const avgTime =
    totalQuestions > 0
      ? Math.round(
          attempts.reduce((sum, attempt) => sum + attempt.timeTakenSec, 0) /
            totalQuestions,
        )
      : 0;

  let currentStreak = 0;
  let bestStreak = 0;
  for (const attempt of attempts) {
    if (attempt.isCorrect) {
      currentStreak += 1;
      bestStreak = Math.max(bestStreak, currentStreak);
    } else {
      currentStreak = 0;
    }
  }

  return (
    <section className="border-b-2 border-accent">
      <div className="px-3 py-4 text-ink">
        <div className="mb-3">
          <h1 className="inline-flex items-center gap-2 text-xl font-bold tracking-[0.04rem]">
            <Trophy size={18} className="text-danger-hover" />
            Quiz Summary Report
          </h1>
          <p className="mt-1 text-xs text-muted">
            {category} • {difficulty} • {totalQuestions} Questions • Best Streak:{" "}
            {bestStreak}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 md:grid-cols-5">
          <div className="border border-accent bg-surface p-2 text-center">
            <p className="text-xl font-bold">{finalScore}</p>
            <p className="text-[11px] text-muted">Final Score</p>
          </div>
          <div className="border border-accent bg-surface p-2 text-center">
            <p className="text-xl font-bold">{accuracy}%</p>
            <p className="text-[11px] text-muted">Accuracy</p>
          </div>
          <div className="border border-accent bg-surface p-2 text-center">
            <p className="text-xl font-bold">{correct}</p>
            <p className="text-[11px] text-muted">Correct</p>
          </div>
          <div className="border border-accent bg-surface p-2 text-center">
            <p className="text-xl font-bold">{wrong}</p>
            <p className="text-[11px] text-muted">Wrong</p>
          </div>
          <div className="border border-accent bg-surface p-2 text-center">
            <p className="text-xl font-bold">{avgTime}s</p>
            <p className="text-[11px] text-muted">Avg Time</p>
          </div>
        </div>
      </div>
    </section>
  );
}
