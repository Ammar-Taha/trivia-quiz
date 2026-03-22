import { useSettingsStore } from "../../store/settings-store";

type CategorySelectProps = {
  id: string;
  className: string;
};

export default function CategorySelect({ id, className }: CategorySelectProps) {
  const quizCategory = useSettingsStore((s) => s.quizSettings.category);
  const setQuizSettings = useSettingsStore((s) => s.setQuizSettings);

  return (
    <>
      <label htmlFor={id} className="sr-only">
        Category
      </label>
      <select
        id={id}
        value={quizCategory}
        className={className}
        onChange={(e) => setQuizSettings({ category: e.target.value })}
      >
        <option value="general_knowledge">Category: General Knowledge</option>
        <option value="arts_and_literature">
          Category: Arts &amp; Literature
        </option>
        <option value="film_and_tv">Category: Film &amp; TV</option>
        <option value="music">Category: Music</option>
        <option value="science">Category: Science</option>
        <option value="geography">Category: Geography</option>
        <option value="history">Category: History</option>
        <option value="sport_and_leisure">Category: Sport &amp; Leisure</option>
        <option value="society_and_culture">
          Category: Society &amp; Culture
        </option>
        <option value="food_and_drink">Category: Food &amp; Drink</option>
      </select>
    </>
  );
}
