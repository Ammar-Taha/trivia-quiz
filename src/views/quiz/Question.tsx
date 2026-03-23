import { useNavigationStore } from "../../store/navigation-store";
import { useQuestionsStore } from "../../store/questions-store";
import {
  calculateQuestionScore,
  useResultsStore,
} from "../../store/results-store";
import { useStatsStore } from "../../store/stats-store";
import { useTimerStore } from "../../store/timer-store";
import { useShallow } from "zustand/react/shallow";

export default function Question() {
  const questions = useQuestionsStore((s) => s.questions);
  const setView = useNavigationStore((s) => s.setView);
  const appendAttempt = useResultsStore((s) => s.appendAttempt);
  const [currentQuestionNumber, selectedAnswer, score, correct, wrong, streak, setStats] = useStatsStore(
    useShallow((s) => [
      s.stats.currentQuestionNumber,
      s.stats.selectedAnswer,
      s.stats.score,
      s.stats.correct,
      s.stats.wrong,
      s.stats.streak,
      s.setStats,
    ]),
  );
  const [timeLeftSec, timeLimitSec, questionStartedAt] = useTimerStore(
    useShallow((s) => [
      s.timer.timeLeftSec,
      s.timer.timeLimitSec,
      s.timer.questionStartedAt,
    ]),
  );

  const totalQuestions = questions.length;
  const currentQuestionIndex = Math.max(0, currentQuestionNumber - 1);
  const currentQuestion = questions[currentQuestionIndex];

  const answerOptions = currentQuestion
    ? [currentQuestion.correctAnswer, ...currentQuestion.incorrectAnswers]
    : [];

  function handleSubmitAnswer() {
    if (!currentQuestion || !selectedAnswer) return;

    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    const nextStreak = isCorrect ? streak + 1 : 0;
    const scoreBreakdown = calculateQuestionScore({
      isCorrect,
      timeLeftSec,
      timeLimitSec,
      currentStreak: nextStreak,
    });

    const fallbackTimeTaken = Math.max(0, timeLimitSec - timeLeftSec);
    const measuredTimeTaken =
      questionStartedAt !== null
        ? Math.round((Date.now() - questionStartedAt) / 1000)
        : fallbackTimeTaken;
    const timeTakenSec = Math.min(
      timeLimitSec,
      Math.max(0, measuredTimeTaken),
    );

    appendAttempt({
      questionId: currentQuestion.id,
      questionText: currentQuestion.question,
      userAnswer: selectedAnswer,
      correctAnswer: currentQuestion.correctAnswer,
      timeTakenSec,
      isCorrect,
      score: scoreBreakdown,
    });

    const nextQuestionNumber = currentQuestionNumber + 1;
    const isQuizFinished = nextQuestionNumber > totalQuestions;

    setStats({
      score: score + scoreBreakdown.total,
      correct: isCorrect ? correct + 1 : correct,
      wrong: isCorrect ? wrong : wrong + 1,
      streak: nextStreak,
      currentQuestionNumber: nextQuestionNumber,
      selectedAnswer: null,
    });

    if (isQuizFinished) {
      setView("results");
    }
  }

  return (
    <section className="flex flex-1 flex-col border-b-2 border-accent p-3 text-ink lg:border-b-0 lg:border-r-2">
      <p className="text-xs font-semibold uppercase tracking-[0.08rem] text-muted">
        Question
      </p>
      <p className="mb-4 text-xs text-muted">
        {currentQuestionNumber} of {totalQuestions}
      </p>

      <h2 className="mb-5 text-base font-semibold sm:text-lg">
        {currentQuestion?.question ?? "Loading question..."}
      </h2>

      <div className="space-y-2">
        {answerOptions.map((answer, index) => {
          const answerLabel = String.fromCharCode(65 + index);
          const isSelected = selectedAnswer === answer;
          return (
            <button
              key={`${answer}-${index}`}
              type="button"
              onClick={() => setStats({ selectedAnswer: answer })}
              className={`flex w-full items-center gap-2 px-2.5 py-2 text-left text-sm ${
                isSelected
                  ? "border-2 border-danger-hover bg-surface-hover font-semibold text-ink"
                  : "border border-accent bg-surface text-ink"
              }`}
            >
              <span
                className={`inline-flex h-5 w-5 items-center justify-center text-[10px] font-bold ${
                  isSelected ? "border border-danger-hover" : "border border-accent"
                }`}
              >
                {answerLabel}
              </span>
              {answer}
            </button>
          );
        })}
      </div>

      <button
        type="button"
        className="mt-5 border-2 border-accent bg-ink px-4 py-2 text-sm font-semibold text-surface transition-colors duration-200 hover:bg-danger-hover"
        disabled={!selectedAnswer}
        onClick={handleSubmitAnswer}
      >
        Submit Answer
      </button>
    </section>
  );
}
