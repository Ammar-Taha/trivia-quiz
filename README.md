# Trivia Quiz App

A React + TypeScript trivia quiz application with a blue-themed UI and multi-screen flow (`Start`, `Quiz`, `Results`).

## Scoring Model (Proposed)

This project uses a **richer scoring system** than simple correct-answer counting.
Each question can reward:

- correctness
- speed
- streak consistency

### Formula

For each question:

```text
questionScore = correctnessPoints + speedBonus + streakBonus
```

For the whole quiz:

```text
finalScore = sum(questionScore for all questions)
```

---

## Scoring Components

### 1) Correctness Points (Base)

- Correct answer: `+100`
- Wrong answer: `0` (optional variant: small penalty such as `-20`)

### 2) Speed Bonus

Speed bonus only applies on correct answers.

```text
speedRatio = timeLeft / timeLimit
speedBonus = round(40 * speedRatio)
```

- If user answers very fast, they can get up to `+40`.
- If user answers at the last moment, bonus approaches `0`.

### 3) Streak Bonus

Streak bonus also applies only on correct answers.

- streak `1-2`: `+0`
- streak `3-4`: `+10`
- streak `5-6`: `+20`
- streak `7+`: `+30`

---

## Worked Example

Question result:

- Correct answer
- Time left: `12s` out of `20s`
- Current streak: `4`

Calculation:

```text
Base = 100
Speed ratio = 12 / 20 = 0.6
Speed bonus = round(40 * 0.6) = 24
Streak bonus = 10
Question score = 100 + 24 + 10 = 134
```

---

## Why This Model

- **Fair:** correctness remains the primary driver.
- **Engaging:** rewards quick thinking and consistency.
- **Scalable:** easy to rebalance by changing weights (`100`, `40`, streak tiers).
- **Readable:** users can understand why their score changed.

---

## Results Metrics Recommendation

For this scoring system, these stats are recommended in the report:

- `Final Score` (important when bonuses are included)
- `Accuracy`
- `Correct`
- `Wrong` (or `Incorrect`)
- `Avg Time`
- `Best Streak`

If scoring is simplified later to just `correct count`, `Final Score` may become redundant and can be removed.
