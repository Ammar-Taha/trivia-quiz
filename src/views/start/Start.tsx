import Header from "./Header";
import MainPane from "./MainPane";

export default function Start() {
  return (
    <main className="min-h-screen w-full bg-surface text-ink">
      <div className="flex min-h-screen w-full flex-col border-2 border-accent bg-canvas text-surface shadow-2xl">
        <Header />
        <MainPane />
      </div>
    </main>
  );
}
