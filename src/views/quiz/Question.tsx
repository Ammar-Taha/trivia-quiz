import { useQuestionsStore } from "../../store/questions-store";
import { useStatsStore } from "../../store/stats-store";

export default function Question() {
  const questions = useQuestionsStore((s) => s.questions);
  const currentQuestionNumber = useStatsStore((s) => s.stats.currentQuestionNumber);

  const totalQuestions = questions.length;
  const currentQuestionIndex = Math.max(0, currentQuestionNumber - 1);
  const currentQuestion = questions[currentQuestionIndex];

  const answerOptions = currentQuestion
    ? [currentQuestion.correctAnswer, ...currentQuestion.incorrectAnswers]
    : [];

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
          return (
            <button
              key={`${answer}-${index}`}
              type="button"
              className="flex w-full items-center gap-2 border border-accent bg-surface px-2.5 py-2 text-left text-sm text-ink"
            >
              <span className="inline-flex h-5 w-5 items-center justify-center border border-accent text-[10px] font-bold">
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
      >
        Submit Answer
      </button>
    </section>
  );
}
