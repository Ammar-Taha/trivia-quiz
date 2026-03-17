export default function Question() {
  return (
    <section className="flex flex-1 flex-col border-b-2 border-accent p-3 text-ink lg:border-b-0 lg:border-r-2">
      <p className="text-xs font-semibold uppercase tracking-[0.08rem] text-muted">
        Question
      </p>
      <p className="mb-4 text-xs text-muted">4 of 10</p>

      <h2 className="mb-5 text-base font-semibold sm:text-lg">
        Which element has the chemical symbol &quot;Au&quot;?
      </h2>

      <div className="space-y-2">
        <button
          type="button"
          className="flex w-full items-center gap-2 border border-accent bg-surface px-2.5 py-2 text-left text-sm text-ink"
        >
          <span className="inline-flex h-5 w-5 items-center justify-center border border-accent text-[10px] font-bold">
            A
          </span>
          Silver
        </button>

        <button
          type="button"
          className="flex w-full items-center gap-2 border-2 border-danger-hover bg-surface-hover px-2.5 py-2 text-left text-sm font-semibold text-ink"
        >
          <span className="inline-flex h-5 w-5 items-center justify-center border border-danger-hover text-[10px] font-bold">
            B
          </span>
          Gold - selected
        </button>

        <button
          type="button"
          className="flex w-full items-center gap-2 border border-accent bg-surface px-2.5 py-2 text-left text-sm text-ink"
        >
          <span className="inline-flex h-5 w-5 items-center justify-center border border-accent text-[10px] font-bold">
            C
          </span>
          Aluminium
        </button>

        <button
          type="button"
          className="flex w-full items-center gap-2 border border-accent bg-surface px-2.5 py-2 text-left text-sm text-ink"
        >
          <span className="inline-flex h-5 w-5 items-center justify-center border border-accent text-[10px] font-bold">
            D
          </span>
          Copper
        </button>
      </div>

      <button
        type="button"
        className="mt-5 border-2 border-accent bg-ink px-4 py-2 text-sm font-semibold text-surface transition-colors duration-200 hover:bg-danger-hover"
      >
        Submit Answer
      </button>
    </section>
  );
}
