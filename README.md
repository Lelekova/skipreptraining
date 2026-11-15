# Snowbound — Ski Prep

A responsive React single-page application for two sample ski-preparation training plans. Workout completion history (one local date per completed session) and an active timer are stored in browser `localStorage`; no account or server is required.

## About the application

This application is a ski-preparation program adapted from a PDF. It makes it easier to navigate the program and exercises during workouts, and to track workout history.

It was created with ChatGPT as a personal “pet project.”

The application stores data locally in your web browser. Data is not synced between devices, and progress may be lost when the browser session expires.

## Sources and attribution

The program is based on a PDF provided as a gift to CARV customers by [CARV](https://getcarv.com/). It was put together by **Katie White**, a member of the **PSIA Alpine National Team**. She has coached for 14 winter seasons in Montana and 11 in Chile, leads instructor training at Yellowstone Club in Montana, and directs the ski school at Portillo in Chile. The program aims to help you extend your skiing days and get the most enjoyment out of them.

The exercise images are from the same PDF and feature:

- **Abi Taylor**, personal trainer and gym director at Stanza Fitness in the UK, with more than 10 years of coaching experience.
- **Paul McConnell**, level 3 personal trainer and Functional Range Conditioning mobility specialist based in the UK.

Other sources:

- [Carioca exercise](https://youtube.com/shorts/faa3ZXWR3Cc?si=jE4FZPz5EaQEsWmV)
- [Lateral in-out Agility ladder exercise](https://youtube.com/shorts/dNSjoSLNCLM?si=eQqKw__vCNgeLvRt)
- [Front in-out Agility ladder exercise](https://youtube.com/shorts/6Eyer7ZiByI?si=VZ64bfBOaChIRGct)

## About the application's author

This application was created by **Natalia Lelekova**, a skiing fan who can’t wait for the season to start. It is a personal project to organize ski-preparation workouts.

## Important

This web application is intended for the author’s personal use. If anyone believes it infringes their copyright, the author will remove it immediately.

For such matters, please [create an issue in my GitHub repository](https://github.com/Lelekova/skipreptraining/issues).

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

The home page links to an information page with editable sections for content provenance, source/image attribution, and author details. Update the text in the `showInfo` information-page section in `src/App.jsx` with accurate details before publishing. Do not claim sources, qualifications, or image permissions unless you have verified them.

## Add or change training content

Edit `src/data/programs.js`; the app renders this data automatically. A program has an `id`, display name, summary and `workouts` array. Give each program and workout a unique ID. Each workout includes a unique `id`, title, focus, description, duration, an `exercises` array and (except rest days) the shared `warmup` array. Do not add a weekday to a workout: the schedule assigns weekdays from list order, starting Monday. Set `workoutsPerWeek` on the program to control where the weekday sequence restarts; it defaults to seven. The three-day plan has 14 explicit entries, one for each day across two weeks, so you can change either week independently. Put a rest-day object at any position in the `workouts` array; the day labels after it are generated from the new order.

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

Copy an existing object and edit its fields. Add/remove workouts or exercises in their respective arrays. Keep workout IDs unique within each program because they are used for progress. For local exercise images, put files under `public/images/` and use a URL such as `/images/step-up.jpg`. `warmupOnly: true` marks a schedule entry that consists of the shared warm-up alone; it still has its own timer and completion record. A rest day can be added as `{ id: 'week-1-rest', title: 'Rest day', focus: 'Recovery', description: 'Take a rest day.', restDay: true, exercises: [], warmup: [] }`. Rest days appear in the schedule, but do not show exercise sections or a workout timer.

The sample material is illustrative and is not individualized medical or coaching advice.

## Browser storage

Progress is saved under `snowbound-training-v1` in `localStorage`. Each workout page lists all completion dates, newest first; the schedule row shows only the latest date. A workout is recorded when its timer is stopped or reaches two hours; dates use the browser's local time zone. Existing single-date completion records are converted to one-entry histories when loaded. An active timer survives reloads. Clearing site data removes progress. Storage is specific to the browser/device and does not sync across devices; this app does not implement account sign-in or a remote session.
