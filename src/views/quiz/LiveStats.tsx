export default function LiveStats() {
  const currentQuestion = 4;
  const totalQuestions = 10;
  const progressPercent = (currentQuestion / totalQuestions) * 100;

  return (
    <aside
      aria-labelledby="live-stats-heading"
      className="w-full p-3 text-[var(--color-ink)] lg:w-[34%]"
    >
      <h2
        id="live-stats-heading"
        className="mb-3 text-xs font-semibold uppercase tracking-[0.08rem] text-[var(--color-muted)]"
      >
        Live Stats
      </h2>

      <dl className="space-y-2 text-sm">
        <div className="flex items-center justify-between border-b border-[var(--color-accent)] pb-1">
          <dt className="text-[var(--color-muted)]">Score</dt>
          <dd className="font-semibold">50 pts</dd>
        </div>
        <div className="flex items-center justify-between border-b border-[var(--color-accent)] pb-1">
          <dt className="text-[var(--color-muted)]">Correct</dt>
          <dd className="font-semibold">5</dd>
        </div>
        <div className="flex items-center justify-between border-b border-[var(--color-accent)] pb-1">
          <dt className="text-[var(--color-muted)]">Wrong</dt>
          <dd className="font-semibold">0</dd>
        </div>
        <div className="flex items-center justify-between border-b border-[var(--color-accent)] pb-1">
          <dt className="text-[var(--color-muted)]">Streak</dt>
          <dd className="font-semibold">3</dd>
        </div>
        <div className="flex items-center justify-between border-b border-[var(--color-accent)] pb-1">
          <dt className="text-[var(--color-muted)]">Time Left</dt>
          <dd className="font-semibold">1:16</dd>
        </div>
        <div className="flex items-center justify-between border-b border-[var(--color-accent)] pb-1">
          <dt className="text-[var(--color-muted)]">Category</dt>
          <dd className="font-semibold">Science</dd>
        </div>
        <div className="flex items-center justify-between border-b border-[var(--color-accent)] pb-1">
          <dt className="text-[var(--color-muted)]">Difficulty</dt>
          <dd className="font-semibold">Medium</dd>
        </div>
      </dl>

      <div className="mt-4" aria-labelledby="progress-label">
        <div className="mb-1 flex items-center justify-between text-xs font-semibold text-[var(--color-muted)]">
          <span id="progress-label">Progress</span>
          <output aria-live="polite">
            {currentQuestion} / {totalQuestions}
          </output>
        </div>
        <div
          role="progressbar"
          aria-labelledby="progress-label"
          aria-valuemin={0}
          aria-valuemax={totalQuestions}
          aria-valuenow={currentQuestion}
          aria-valuetext={`${progressPercent}% complete`}
          className="h-2 w-full border border-[var(--color-accent)] bg-[var(--color-surface)]"
        >
          <div
            className="h-full bg-[var(--color-danger-hover)]"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>
    </aside>
  );
}
