import { useEffect } from "react";
import { useStatsStore } from "../../store/stats-store";
import { useTimerStore } from "../../store/timer-store";
import Header from "./Header";
import LiveStats from "./LiveStats";
import Question from "./Question";

export default function Quiz() {
  const currentQuestionNumber = useStatsStore((s) => s.stats.currentQuestionNumber);
  const timeLimitSec = useTimerStore((s) => s.timer.timeLimitSec);
  const timerStatus = useTimerStore((s) => s.timer.timerStatus);
  const setTimer = useTimerStore((s) => s.setTimer);

  useEffect(() => {
    setTimer({
      timeLeftSec: timeLimitSec,
      timerStatus: "running",
      questionStartedAt: Date.now(),
    });
  }, [currentQuestionNumber, timeLimitSec, setTimer]);

  useEffect(() => {
    if (timerStatus !== "running") return;

    const interval = setInterval(() => {
      const { timeLeftSec } = useTimerStore.getState().timer;

      if (timeLeftSec <= 1) {
        setTimer({ timeLeftSec: 0, timerStatus: "ended" });
        clearInterval(interval);
        return;
      }

      setTimer({ timeLeftSec: timeLeftSec - 1 });
    }, 1000);

    return () => clearInterval(interval);
  }, [timerStatus, setTimer]);

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
