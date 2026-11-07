# Snowbound — Ski Prep

A responsive React single-page application for two sample ski-preparation training plans. Workout completion and an active timer are stored in browser `localStorage`; no account or server is required.

## Run locally

Install Node.js (current LTS), then in this folder run:

```sh
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`). Create a production build with `npm run build`.

## Playwright UI tests

```sh
npx playwright install chromium
npm run test:e2e
```

Tests cover program selection, workout navigation, expanding/collapsing exercise guidance, timer start/stop, completion persistence, and mobile timer placement. Playwright runs desktop Chromium and a Pixel 7 viewport.

## Add or change training content

Edit `src/data/programs.js`; the app renders this data automatically. A program has an `id`, display name, summary and `workouts` array. Give each program and workout a unique ID. Each workout includes day, title, focus, description, duration, an `exercises` array and the shared `warmup` array. The 14 sample warm-up moves are defined once and automatically attached to every workout, so edit that shared list to change the warm-up everywhere. The three-day plan schedule is assembled at the bottom of the file: its strength, conditioning and power sessions are repeated in week two, with warm-up-only sessions on Tuesday, Thursday and Saturday.

An exercise looks like:

```js
{
  id: 'step-up',
  name: 'Step-up',
  sets: '3',
  reps: '8 / leg', // free text supports per-side, per-arm, per-leg, or time
  image: '/images/step-up.jpg', // optional; put local image in public/images/
  instructions: 'Step onto a stable platform and stand tall.',
  watch: 'Keep the whole working foot on the platform.',
  easier: 'Use a lower platform or hold a support.',
  harder: 'Hold light weights or use a higher platform.',
  snow: 'Builds single-leg strength for controlled turns.'
}
```

Copy an existing object and edit its fields. Add/remove workouts or exercises in their respective arrays. Keep workout IDs unique within each program because they are used for progress. For local exercise images, put files under `public/images/` and use a URL such as `/images/step-up.jpg`. `warmupOnly: true` marks a schedule entry that consists of the shared warm-up alone; it still has its own timer and completion record.

The sample material is illustrative and is not individualized medical or coaching advice.

## Browser storage

Progress is saved under `snowbound-training-v1` in `localStorage`. A workout is marked complete when its timer is stopped or reaches two hours; the displayed date uses the browser's local time zone. An active timer survives reloads. Clearing site data removes progress. Storage is specific to the browser/device and does not sync across devices; this app does not implement account sign-in or a remote session.
