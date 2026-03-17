import Breakdown from "./Breakdown";
import Summary from "./Summary";

export default function Results() {
  return (
    <main className="min-h-screen w-full bg-surface text-ink">
      <section className="flex min-h-screen w-full flex-col border-2 border-accent bg-canvas text-surface">
        <div className="flex-1 bg-surface">
          <Summary />
          <Breakdown />
        </div>
      </section>
    </main>
  );
}
