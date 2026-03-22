import { isDifficulty, useSettingsStore } from "../../store/settings-store";

type DifficultySelectProps = {
  id: string;
  className: string;
};

export default function DifficultySelect({
  id,
  className,
}: DifficultySelectProps) {
  const difficulty = useSettingsStore((s) => s.quizSettings.difficulty);
  const setQuizSettings = useSettingsStore((s) => s.setQuizSettings);

  return (
    <>
      <label htmlFor={id} className="sr-only">
        Difficulty
      </label>
      <select
        id={id}
        value={difficulty}
        className={className}
        onChange={(e) => {
          const nextDifficulty = e.target.value;
          if (!isDifficulty(nextDifficulty)) return;
          setQuizSettings({ difficulty: nextDifficulty });
        }}
      >
        <option value="easy">Difficulty: Easy</option>
        <option value="medium">Difficulty: Medium</option>
        <option value="hard">Difficulty: Hard</option>
      </select>
    </>
  );
}
