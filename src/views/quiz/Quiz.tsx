import Header from "./Header";
import LiveStats from "./LiveStats";
import Question from "./Question";

export default function Quiz() {
  return (
    <main className="min-h-screen w-full bg-surface text-ink">
      <section className="flex min-h-screen w-full flex-col border-2 border-accent bg-canvas text-surface">
        <Header />
        <div className="flex flex-1 flex-col bg-surface lg:flex-row">
          <Question />
          <LiveStats />
        </div>
      </section>
    </main>
  );
}
