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

Each question score is composed of:

- **Correctness points**: fixed base points for a correct answer
- **Speed bonus**: higher bonus when more time remains
- **Streak bonus**: additional reward for sustained correct-answer streaks

Incorrect answers produce zero score for that question.

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

