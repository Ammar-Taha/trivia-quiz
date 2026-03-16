import Header from "./Header";
import MainPane from "./MainPane";

export default function Start() {
  return (
    <main className="min-h-screen w-full bg-[var(--color-surface)] text-[var(--color-ink)]">
      <div className="flex min-h-screen w-full flex-col border-2 border-[var(--color-accent)] bg-[var(--color-canvas)] text-[var(--color-surface)] shadow-2xl">
        <Header />
        <MainPane />
      </div>
    </main>
  );
}
