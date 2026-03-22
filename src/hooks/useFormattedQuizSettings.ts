import { useSettingsStore } from "../store/settings-store";

export default function useFormattedQuizSettings() {
  const { category, difficulty } = useSettingsStore((s) => s.quizSettings);
  const formattedCategory = category
    .replace(/_/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
  const formattedDifficulty = difficulty.replace(/^\w/, (char) =>
    char.toUpperCase(),
  );

  return {
    category: formattedCategory,
    difficulty: formattedDifficulty,
  };
}
