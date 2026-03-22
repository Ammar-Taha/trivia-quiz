import { useNavigationStore } from "../store/navigation-store";
import { useQuestionsStore } from "../store/questions-store";
import { useSettingsStore } from "../store/settings-store";
import { useStatsStore } from "../store/stats-store";
import { useTimerStore } from "../store/timer-store";
import { useShallow } from "zustand/react/shallow";

export default function useQuizSessionActions() {
  const setView = useNavigationStore((s) => s.setView);
  const [clearQuestions, setRequestStatus, setRequestError] = useQuestionsStore(
    useShallow((s) => [s.clearQuestions, s.setRequestStatus, s.setRequestError]),
  );
  const resetStats = useStatsStore((s) => s.resetStats);
  const resetTimer = useTimerStore((s) => s.resetTimer);
  const resetQuizSettings = useSettingsStore((s) => s.resetQuizSettings);

  function resetQuiz() {
    clearQuestions();
    setRequestStatus("idle");
    setRequestError(null);
    resetStats();
    resetTimer();
    resetQuizSettings();
    setView("start");
  }

  return resetQuiz;
}
