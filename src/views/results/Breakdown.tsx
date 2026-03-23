import { RotateCcw } from "lucide-react";
import useResetQuiz from "../../hooks/useResetQuiz";
import { useResultsStore } from "../../store/results-store";

export default function Breakdown() {
  const resetQuiz = useResetQuiz();
  const attempts = useResultsStore((s) => s.attempts);

  return (
    <section className="px-3 py-4 text-ink">
      <div className="overflow-x-auto border border-accent">
        <table className="min-w-full border-collapse text-left text-sm">
          <thead className="bg-surface-hover">
            <tr>
              <th className="border-b border-accent px-2 py-2 text-xs font-semibold uppercase tracking-wide">
                #
              </th>
              <th className="border-b border-accent px-2 py-2 text-xs font-semibold uppercase tracking-wide">
                Question
              </th>
              <th className="border-b border-accent px-2 py-2 text-xs font-semibold uppercase tracking-wide">
                Your Answer
              </th>
              <th className="border-b border-accent px-2 py-2 text-xs font-semibold uppercase tracking-wide">
                Correct Answer
              </th>
              <th className="border-b border-accent px-2 py-2 text-xs font-semibold uppercase tracking-wide">
                Time
              </th>
              <th className="border-b border-accent px-2 py-2 text-xs font-semibold uppercase tracking-wide">
                Result
              </th>
            </tr>
          </thead>
          <tbody>
            {attempts.length === 0 ? (
              <tr className="bg-surface">
                <td className="px-2 py-3 text-center text-muted" colSpan={6}>
                  No attempts recorded yet.
                </td>
              </tr>
            ) : (
              attempts.map((attempt, index) => {
                const isLast = index === attempts.length - 1;
                const cellClass = isLast
                  ? "px-2 py-2"
                  : "border-b border-accent px-2 py-2";

                return (
                  <tr key={`${attempt.questionId}-${index}`} className="bg-surface">
                    <td className={cellClass}>{index + 1}</td>
                    <td className={cellClass}>{attempt.questionText}</td>
                    <td className={cellClass}>{attempt.userAnswer}</td>
                    <td className={cellClass}>{attempt.correctAnswer}</td>
                    <td className={cellClass}>{attempt.timeTakenSec}s</td>
                    <td className={`${cellClass} font-semibold`}>
                      {attempt.isCorrect ? "✓" : "✗"}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-4">
        <button
          type="button"
          className="inline-flex items-center gap-1.5 border-2 border-accent bg-ink px-4 py-2 text-sm font-semibold text-surface transition-colors duration-200 hover:bg-danger-hover"
          onClick={resetQuiz}
        >
          <RotateCcw size={14} />
          Restart Quiz
        </button>
      </div>
    </section>
  );
}
