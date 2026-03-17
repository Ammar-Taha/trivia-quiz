import { RotateCcw } from "lucide-react";

export default function Breakdown() {
  return (
    <section className="px-3 py-4 text-[var(--color-ink)]">
      <div className="overflow-x-auto border border-[var(--color-accent)]">
        <table className="min-w-full border-collapse text-left text-sm">
          <thead className="bg-[var(--color-surface-hover)]">
            <tr>
              <th className="border-b border-[var(--color-accent)] px-2 py-2 text-xs font-semibold uppercase tracking-wide">
                #
              </th>
              <th className="border-b border-[var(--color-accent)] px-2 py-2 text-xs font-semibold uppercase tracking-wide">
                Question
              </th>
              <th className="border-b border-[var(--color-accent)] px-2 py-2 text-xs font-semibold uppercase tracking-wide">
                Your Answer
              </th>
              <th className="border-b border-[var(--color-accent)] px-2 py-2 text-xs font-semibold uppercase tracking-wide">
                Correct Answer
              </th>
              <th className="border-b border-[var(--color-accent)] px-2 py-2 text-xs font-semibold uppercase tracking-wide">
                Time
              </th>
              <th className="border-b border-[var(--color-accent)] px-2 py-2 text-xs font-semibold uppercase tracking-wide">
                Result
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-[var(--color-surface)]">
              <td className="border-b border-[var(--color-accent)] px-2 py-2">1</td>
              <td className="border-b border-[var(--color-accent)] px-2 py-2">
                What is the symbol for gold?
              </td>
              <td className="border-b border-[var(--color-accent)] px-2 py-2">Au</td>
              <td className="border-b border-[var(--color-accent)] px-2 py-2">Au</td>
              <td className="border-b border-[var(--color-accent)] px-2 py-2">8s</td>
              <td className="border-b border-[var(--color-accent)] px-2 py-2">✓</td>
            </tr>
            <tr className="bg-[var(--color-surface)]">
              <td className="border-b border-[var(--color-accent)] px-2 py-2">2</td>
              <td className="border-b border-[var(--color-accent)] px-2 py-2">
                What planet is closest to the Sun?
              </td>
              <td className="border-b border-[var(--color-accent)] px-2 py-2">Mercury</td>
              <td className="border-b border-[var(--color-accent)] px-2 py-2">Mercury</td>
              <td className="border-b border-[var(--color-accent)] px-2 py-2">10s</td>
              <td className="border-b border-[var(--color-accent)] px-2 py-2">✓</td>
            </tr>
            <tr className="bg-[var(--color-surface)]">
              <td className="border-b border-[var(--color-accent)] px-2 py-2">3</td>
              <td className="border-b border-[var(--color-accent)] px-2 py-2">
                Who invented the telephone?
              </td>
              <td className="border-b border-[var(--color-accent)] px-2 py-2">
                Thomas Edison
              </td>
              <td className="border-b border-[var(--color-accent)] px-2 py-2">
                A.C. Bell
              </td>
              <td className="border-b border-[var(--color-accent)] px-2 py-2">22s</td>
              <td className="border-b border-[var(--color-accent)] px-2 py-2">✗</td>
            </tr>
            <tr className="bg-[var(--color-surface)]">
              <td className="px-2 py-2">4</td>
              <td className="px-2 py-2">What is H2O commonly known as?</td>
              <td className="px-2 py-2">Water</td>
              <td className="px-2 py-2">Water</td>
              <td className="px-2 py-2">7s</td>
              <td className="px-2 py-2">✓</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-4">
        <button
          type="button"
          className="inline-flex items-center gap-1.5 border-2 border-[var(--color-accent)] bg-[var(--color-ink)] px-4 py-2 text-sm font-semibold text-[var(--color-surface)] transition-colors duration-200 hover:bg-[var(--color-danger-hover)]"
        >
          <RotateCcw size={14} />
          Restart Quiz
        </button>
      </div>
    </section>
  );
}
