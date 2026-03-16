type DifficultySelectProps = {
  id: string;
  className: string;
};

export default function DifficultySelect({
  id,
  className,
}: DifficultySelectProps) {
  return (
    <>
      <label htmlFor={id} className="sr-only">
        Difficulty
      </label>
      <select id={id} defaultValue="medium" className={className}>
        <option value="easy">Difficulty: Easy</option>
        <option value="medium">Difficulty: Medium</option>
        <option value="hard">Difficulty: Hard</option>
      </select>
    </>
  );
}
