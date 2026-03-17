import Header from "./Header";
import LiveStats from "./LiveStats";
import Question from "./Question";

export default function Quiz() {
  return (
    <main className="min-h-screen w-full bg-[var(--color-surface)] text-[var(--color-ink)]">
      <section className="flex min-h-screen w-full flex-col border-2 border-[var(--color-accent)] bg-[var(--color-canvas)] text-[var(--color-surface)]">
        <Header />
        <div className="flex flex-1 flex-col bg-[var(--color-surface)] lg:flex-row">
          <Question />
          <LiveStats />
        </div>
      </section>
    </main>
  );
}
