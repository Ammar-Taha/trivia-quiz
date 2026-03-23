# Trivia Quiz App

A focused, single-page trivia experience built with React, TypeScript, Tailwind CSS, and Zustand.

The app lets users pick quiz settings, run a timed question flow, and review a detailed results report with score breakdowns and performance metrics.

## Features

- Start view with category and difficulty selection
- Question flow with one-question-at-a-time interaction
- Per-question timer with auto-submit behavior on timeout
- Live quiz stats (score, correct/wrong, streak, progress)
- Results summary with final metrics and detailed attempt table
- Shared reset flow for both **Quit** and **Restart Quiz**

## Tech Stack

- React + TypeScript + Vite
- Tailwind CSS v4
- Zustand for global state
- Lucide React icons
- The Trivia API for question data

## Project Structure

```text
src/
  hooks/
    useQuizTimer.ts
    useResetQuiz.ts
  store/
    navigation-store.ts
    settings-store.ts
    questions-store.ts
    stats-store.ts
    timer-store.ts
    results-store.ts
  views/
    start/
    quiz/
    results/
  App.tsx
```

## State Architecture (Zustand)

- `navigation-store`: current app view (`start | quiz | results`)
- `settings-store`: selected category and difficulty
- `questions-store`: fetched question list + request status/error
- `stats-store`: live quiz counters (score, streak, correct/wrong, selected answer, current question index)
- `timer-store`: timing state (`timeLimitSec`, `timeLeftSec`, `timerStatus`, `questionStartedAt`)
- `results-store`: per-question attempts and scoring breakdown

## Scoring Model

The scoring logic is implemented in `results-store.ts` and is calculated per question.

### Constants

- `BASE_CORRECTNESS_POINTS = 100`
- `MAX_SPEED_BONUS = 40`

### Score Formula

If the answer is incorrect:

- `correctnessPoints = 0`
- `speedBonus = 0`
- `streakBonus = 0`
- `total = 0`

If the answer is correct:

- `correctnessPoints = 100`
- `speedRatio = clamp(timeLeftSec, 0, timeLimitSec) / max(1, timeLimitSec)`
- `speedBonus = round(40 * speedRatio)`
- `streakBonus` is determined by the **new streak after this answer**:
  - streak >= 7 -> `30`
  - streak >= 5 -> `20`
  - streak >= 3 -> `10`
  - otherwise -> `0`
- `total = correctnessPoints + speedBonus + streakBonus`

### Why this model

- Correct answers always have strong base value (`100`)
- Faster answers are rewarded, but capped (`max 40`)
- Consistency is rewarded through streak tiers
- Wrong answers reset streak and award no points, so accuracy still matters most

### Worked Example (time limit: 120s)

Assume a player answers 4 questions in this order:

1. **Q1 correct**, `timeLeftSec = 90`, new streak = 1  
   - speed bonus = `round(40 * (90/120)) = round(30) = 30`  
   - streak bonus = `0`  
   - total = `100 + 30 + 0 = 130`

2. **Q2 correct**, `timeLeftSec = 45`, new streak = 2  
   - speed bonus = `round(40 * (45/120)) = round(15) = 15`  
   - streak bonus = `0`  
   - total = `100 + 15 + 0 = 115`

3. **Q3 correct**, `timeLeftSec = 20`, new streak = 3  
   - speed bonus = `round(40 * (20/120)) = round(6.67) = 7`  
   - streak bonus = `10` (streak reached 3)  
   - total = `100 + 7 + 10 = 117`

4. **Q4 wrong**, any time left, streak resets  
   - total = `0`

Final score across these 4 questions:

- `130 + 115 + 117 + 0 = 362`

### Notes

- Timeout behaves like an unanswered/wrong submission -> `0` points
- Speed bonus is bounded by time limit and never exceeds `40`
- Streak bonus uses the post-answer streak value, so milestone questions trigger the bonus immediately

## API

Question requests are fetched from [The Trivia API](https://the-trivia-api.com/docs/), using selected settings:

- `limit`
- `categories`
- `difficulty`

## Local Development

### Prerequisites

- Node.js 20+
- pnpm

### Install

```bash
pnpm install
```

### Run Dev Server

```bash
pnpm dev
```

### Lint

```bash
pnpm lint
```

### Build

```bash
pnpm build
```

## Current Status

Implemented:

- Start screen UI and settings flow
- Quiz question/timer/submit flow
- Dynamic live stats
- Results summary and detailed breakdown
- Global reset behavior across quiz and results screens

Planned/optional improvements:

- Persisting best score/history
- Shuffle options and stronger answer randomization controls
- Better loading/empty states and network retry UX
- Additional accessibility refinements

