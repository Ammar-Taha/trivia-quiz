import Breakdown from "./Breakdown";
import Summary from "./Summary";

export default function Results() {
  return (
    <main className="min-h-screen w-full bg-[var(--color-surface)] text-[var(--color-ink)]">
      <section className="flex min-h-screen w-full flex-col border-2 border-[var(--color-accent)] bg-[var(--color-canvas)] text-[var(--color-surface)]">
        <div className="flex-1 bg-[var(--color-surface)]">
          <Summary />
          <Breakdown />
        </div>
      </section>
    </main>
  );
}
