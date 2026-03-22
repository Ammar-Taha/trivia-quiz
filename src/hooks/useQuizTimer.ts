import { useEffect } from "react";
import { useTimerStore } from "../store/timer-store";
import { useShallow } from "zustand/react/shallow";

export default function useQuizTimer(currentQuestionNumber: number) {
  const [timeLimitSec, timerStatus, setTimer] = useTimerStore(
    useShallow((s) => [s.timer.timeLimitSec, s.timer.timerStatus, s.setTimer]),
  );

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
}
