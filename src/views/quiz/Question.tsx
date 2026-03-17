export default function Question() {
  return (
    <section className="flex flex-1 flex-col border-b-2 border-[var(--color-accent)] p-3 text-[var(--color-ink)] lg:border-b-0 lg:border-r-2">
      <p className="text-xs font-semibold uppercase tracking-[0.08rem] text-[var(--color-muted)]">
        Question
      </p>
      <p className="mb-4 text-xs text-[var(--color-muted)]">4 of 10</p>

      <h2 className="mb-5 text-base font-semibold sm:text-lg">
        Which element has the chemical symbol &quot;Au&quot;?
      </h2>

      <div className="space-y-2">
        <button
          type="button"
          className="flex w-full items-center gap-2 border border-[var(--color-accent)] bg-[var(--color-surface)] px-2.5 py-2 text-left text-sm text-[var(--color-ink)]"
        >
          <span className="inline-flex h-5 w-5 items-center justify-center border border-[var(--color-accent)] text-[10px] font-bold">
            A
          </span>
          Silver
        </button>

        <button
          type="button"
          className="flex w-full items-center gap-2 border-2 border-[var(--color-danger-hover)] bg-[var(--color-surface-hover)] px-2.5 py-2 text-left text-sm font-semibold text-[var(--color-ink)]"
        >
          <span className="inline-flex h-5 w-5 items-center justify-center border border-[var(--color-danger-hover)] text-[10px] font-bold">
            B
          </span>
          Gold - selected
        </button>

        <button
          type="button"
          className="flex w-full items-center gap-2 border border-[var(--color-accent)] bg-[var(--color-surface)] px-2.5 py-2 text-left text-sm text-[var(--color-ink)]"
        >
          <span className="inline-flex h-5 w-5 items-center justify-center border border-[var(--color-accent)] text-[10px] font-bold">
            C
          </span>
          Aluminium
        </button>

        <button
          type="button"
          className="flex w-full items-center gap-2 border border-[var(--color-accent)] bg-[var(--color-surface)] px-2.5 py-2 text-left text-sm text-[var(--color-ink)]"
        >
          <span className="inline-flex h-5 w-5 items-center justify-center border border-[var(--color-accent)] text-[10px] font-bold">
            D
          </span>
          Copper
        </button>
      </div>

      <button
        type="button"
        className="mt-5 border-2 border-[var(--color-accent)] bg-[var(--color-ink)] px-4 py-2 text-sm font-semibold text-[var(--color-surface)] transition-colors duration-200 hover:bg-[var(--color-danger-hover)]"
      >
        Submit Answer
      </button>
    </section>
  );
}
