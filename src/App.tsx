import { useState } from "react";
import Start from "./views/start/Start";
import Quiz from "./views/quiz/Quiz";
import Results from "./views/results/Results";

function App() {
  const [view] = useState<"start" | "quiz" | "results">("start");

  // Simple State-based routing
  switch (view) {
    case "start":
      return <Start />;
    case "quiz":
      return <Quiz />;
    case "results":
      return <Results />;
    default:
      view satisfies never;
      return null;
  }
}

export default App;
