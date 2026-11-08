// Edit this file to add or update programs, workouts and exercises.
// Image values may be remote URLs or paths under public/.
export const programs = [
    {
        id: 'six-day',
        name: '6 days / week',
        shortName: '6-day plan',
        duration: '8 weeks',
        level: 'Progressive',
        summary: 'A balanced week of strength, conditioning, mobility and recovery work.',
        weeks: '8 weeks · 45–60 min sessions',
        workouts: [
            {
                id: 'six-a',
                day: 'Monday',
                title: 'Lower-body strength',
                focus: 'Strength',
                description: 'Build the leg strength and control you need to stay stable through long turns. Move with control and leave a couple of reps in reserve.',
                duration: '50 min',
                exercises: [
                    {
                        id: 'goblet-squat',
                        name: 'Goblet squat',
                        sets: '3',
                        reps: '10',
                        image: 'https://images.unsplash.com/photo-1566241142559-40e1dab266c6?auto=format&fit=crop&w=900&q=80',
                        instructions: 'Hold one weight close to your chest. Sit between your hips, keeping your whole foot grounded, then stand tall.',
                        watch: 'Keep knees tracking in line with your toes; avoid rounding your back at the bottom.',
                        easier: 'Use a lighter weight or squat to a chair.',
                        harder: 'Use a heavier weight or pause for two seconds at the bottom.',
                        snow: 'Stronger legs help you maintain a stable stance and absorb terrain changes.'
                    },
                    {
                        id: 'split-squat',
                        name: 'Reverse lunge',
                        sets: '3',
                        reps: '8 / leg',
                        image: 'https://images.unsplash.com/photo-1434596922112-19c563067271?auto=format&fit=crop&w=900&q=80',
                        instructions: 'Stand tall, step one foot back and lower both knees comfortably. Push through your front foot to return.',
                        watch: 'Keep your front heel down and hips facing forward.',
                        easier: 'Hold a wall for balance and shorten your range.',
                        harder: 'Hold dumbbells at your sides.',
                        snow: 'Single-leg strength supports balance and control during linked turns.'
                    },
                    {
                        id: 'calf-raise',
                        name: 'Single-leg calf raise',
                        sets: '3',
                        reps: '12 / side',
                        instructions: 'Stand on one foot, rise onto the ball of your foot, pause, then lower slowly.',
                        watch: 'Keep your ankle from rolling outward and use a full comfortable range.',
                        easier: 'Use both legs or hold a wall.',
                        harder: 'Hold a light weight or lower for three seconds.',
                        snow: 'Calf strength supports ankle movement and helps you stay responsive in your boots.'
                    }]
            },
            {
                id: 'six-b',
                day: 'Tuesday',
                title: 'Aerobic conditioning',
                focus: 'Endurance',
                description: 'Build a comfortable aerobic base. Keep the effort conversational and finish feeling like you could continue.',
                duration: '40 min',
                exercises: [
                    {
                        id: 'bike',
                        name: 'Bike or brisk uphill walk',
                        sets: '1',
                        reps: '30 min steady',
                        instructions: 'Choose a low-impact cardio option and maintain a pace where you can speak in short sentences.',
                        watch: 'Start gently and avoid turning this into an all-out effort.',
                        easier: 'Try 20 minutes at an easy pace.',
                        harder: 'Extend to 40 minutes while keeping the same effort.',
                        snow: 'A stronger aerobic base can help you enjoy more time on the mountain.'
                    },
                    {
                        id: 'mobility-flow',
                        name: 'Hip and ankle mobility flow',
                        sets: '2',
                        reps: '5 / side',
                        instructions: 'Move slowly through comfortable hip and ankle ranges, pausing briefly where you feel stiffness.',
                        watch: 'Stay below sharp pain; mobility should feel controlled.',
                        easier: 'Reduce the range of each movement.',
                        harder: 'Add one slow breath at each end position.',
                        snow: 'Comfortable mobility can make it easier to adjust your stance and absorb movement.'
                    }]
            },
            {
                id: 'six-c',
                day: 'Wednesday',
                title: 'Balance & core',
                focus: 'Control',
                description: 'Practice balance and trunk control with smooth, deliberate repetitions.',
                duration: '45 min',
                exercises: [
                    {
                        id: 'single-leg-balance',
                        name: 'Single-leg balance',
                        sets: '3',
                        reps: '30 sec / side',
                        instructions: 'Stand on one foot with a soft knee. Keep your gaze steady and breathe naturally.',
                        watch: 'Keep your pelvis level; use support if needed.',
                        easier: 'Keep fingertips on a wall.',
                        harder: 'Reach the free leg gently in different directions.',
                        snow: 'Balance practice helps you make small adjustments on uneven terrain.'
                    },
                    {
                        id: 'dead-bug',
                        name: 'Dead bug',
                        sets: '3',
                        reps: '8 / side',
                        instructions: 'Lie on your back with arms up and knees bent. Slowly lower the opposite arm and leg, then return.',
                        watch: 'Keep your lower back gently supported against the floor.',
                        easier: 'Move only one limb at a time.',
                        harder: 'Straighten the moving leg further.',
                        snow: 'A steady trunk helps transfer movement between your upper and lower body.'
                    },
                    {
                        id: 'side-plank',
                        name: 'Side plank',
                        sets: '3',
                        reps: '20 sec / side',
                        instructions: 'Support yourself on your forearm and side of your foot or knee. Lift hips and hold a straight line.',
                        watch: 'Keep shoulder away from your ear and hips lifted.',
                        easier: 'Bend your knees and support yourself from them.',
                        harder: 'Hold longer or lift the top leg slightly.',
                        snow: 'Side-body endurance supports a controlled, centered stance.'
                    }]
            },
            {
                id: 'six-d',
                day: 'Thursday',
                title: 'Recovery & mobility',
                focus: 'Recovery',
                description: 'An intentionally easy session to restore movement and prepare for the next training day.',
                duration: '25 min',
                exercises: [
                    {
                        id: 'worlds-greatest',
                        name: 'Dynamic hip mobility',
                        sets: '2',
                        reps: '5 / side',
                        instructions: 'Use a comfortable lunge position and move gently through hip, hamstring and upper-back ranges.',
                        watch: 'Keep every movement smooth and pain-free.',
                        easier: 'Use a shallower lunge.',
                        harder: 'Add a short pause at each position.',
                        snow: 'Maintaining comfortable movement helps you get into an athletic ski stance.'
                    },
                    {
                        id: 'breathing',
                        name: 'Easy breathing reset',
                        sets: '1',
                        reps: '5 min',
                        instructions: 'Sit or lie comfortably. Breathe slowly through your nose, allowing the exhale to be relaxed.',
                        watch: 'Keep the breath easy; do not force it.',
                        easier: 'Breathe normally and simply notice the rhythm.',
                        harder: 'Make the exhale slightly longer than the inhale.',
                        snow: 'Recovery habits help you arrive at training and skiing feeling more refreshed.'
                    }]
            },
            {
                id: 'six-e',
                day: 'Friday',
                title: 'Power & agility',
                focus: 'Power',
                description: 'Practice low-impact quickness and controlled landings. Stop if your form becomes sloppy.',
                duration: '40 min',
                exercises: [
                    {
                        id: 'lateral-step',
                        name: 'Lateral step and stick',
                        sets: '3',
                        reps: '6 / side',
                        instructions: 'Step sideways with purpose, land softly on one foot and hold your balance for two seconds.',
                        watch: 'Land quietly with knee aligned over the foot.',
                        easier: 'Take a smaller step and use support.',
                        harder: 'Increase distance only while landing stays quiet and controlled.',
                        snow: 'Lateral control helps with changing direction and stabilizing your stance.'
                    },
                    {
                        id: 'sit-to-stand',
                        name: 'Tempo sit-to-stand',
                        sets: '3',
                        reps: '10',
                        instructions: 'Sit back to a chair over three seconds, then stand up smoothly.',
                        watch: 'Keep your feet grounded and knees tracking over toes.',
                        easier: 'Use a higher chair or your hands for support.',
                        harder: 'Hold a light weight at your chest.',
                        snow: 'Controlled leg strength supports repeated flexion and extension while skiing.'
                    }]
            },
            {
                id: 'six-f',
                day: 'Saturday',
                title: 'Full-body strength',
                focus: 'Strength',
                description: 'A moderate full-body session. Rest as needed and prioritize sound movement over speed.',
                duration: '50 min',
                exercises: [
                    {
                        id: 'hip-hinge',
                        name: 'Hip hinge',
                        sets: '3',
                        reps: '10',
                        instructions: 'Stand tall, soften your knees and push hips back while keeping your spine long. Stand by bringing hips forward.',
                        watch: 'Keep the movement in your hips and avoid rounding your back.',
                        easier: 'Practice with hands sliding down your thighs and no weight.',
                        harder: 'Hold a light weight close to your body.',
                        snow: 'Hip strength supports an athletic stance and controlled movement.'
                    },
                    {
                        id: 'push-up',
                        name: 'Incline push-up',
                        sets: '3',
                        reps: '8–12',
                        instructions: 'Place hands on a stable elevated surface. Lower your chest toward it, then press away.',
                        watch: 'Keep your body in one line and elbows at a comfortable angle.',
                        easier: 'Use a higher surface or wall.',
                        harder: 'Choose a lower surface.',
                        snow: 'Upper-body strength contributes to overall resilience and getting up after a fall.'
                    },
                    {
                        id: 'bird-dog',
                        name: 'Bird dog',
                        sets: '3',
                        reps: '8 / side',
                        instructions: 'On hands and knees, reach opposite arm and leg long, pause, and return with control.',
                        watch: 'Avoid rotating or arching your lower back.',
                        easier: 'Move just one arm or leg at a time.',
                        harder: 'Hold the reach for five seconds.',
                        snow: 'Trunk control helps keep your movement coordinated as your legs work.'
                    }]
            }
        ]
    },
    {
        id: 'three-day',
        name: '3 days / week',
        shortName: '3-day plan',
        duration: '8 weeks',
        level: 'Balanced',
        summary: 'Three focused sessions combine strength, conditioning and movement quality.',
        weeks: '8 weeks · 45–60 min sessions',
        workouts: [
            {
                id: 'three-a',
                day: 'Monday',
                title: 'Strength & stability',
                focus: 'Strength',
                description: 'Build lower-body and trunk strength with controlled, comfortable movements.',
                duration: '50 min',
                exercises: [
                    {
                        id: 'goblet-squat-3',
                        name: 'Goblet squat',
                        sets: '3',
                        reps: '10',
                        image: 'https://images.unsplash.com/photo-1566241142559-40e1dab266c6?auto=format&fit=crop&w=900&q=80',
                        instructions: 'Hold one weight close to your chest. Sit between your hips, keeping your whole foot grounded, then stand tall.',
                        watch: 'Keep knees tracking in line with your toes; avoid rounding your back at the bottom.',
                        easier: 'Use a lighter weight or squat to a chair.',
                        harder: 'Use a heavier weight or pause for two seconds at the bottom.',
                        snow: 'Stronger legs help you maintain a stable stance and absorb terrain changes.'
                    },
                    {
                        id: 'reverse-lunge-3',
                        name: 'Reverse lunge',
                        sets: '3',
                        reps: '8 / leg',
                        instructions: 'Stand tall, step one foot back and lower both knees comfortably. Push through your front foot to return.',
                        watch: 'Keep your front heel down and hips facing forward.',
                        easier: 'Hold a wall for balance and shorten your range.',
                        harder: 'Hold dumbbells at your sides.',
                        snow: 'Single-leg strength supports balance and control during linked turns.'
                    },
                    {
                        id: 'dead-bug-3',
                        name: 'Dead bug',
                        sets: '3',
                        reps: '8 / side',
                        instructions: 'Lie on your back with arms up and knees bent. Slowly lower the opposite arm and leg, then return.',
                        watch: 'Keep your lower back gently supported against the floor.',
                        easier: 'Move only one limb at a time.',
                        harder: 'Straighten the moving leg further.',
                        snow: 'A steady trunk helps transfer movement between your upper and lower body.'
                    }]
            },
            {
                id: 'three-b',
                day: 'Wednesday',
                title: 'Conditioning & mobility',
                focus: 'Endurance',
                description: 'Combine easy aerobic work with a short mobility sequence. Keep the session sustainable.',
                duration: '45 min',
                exercises: [
                    {
                        id: 'bike-3',
                        name: 'Bike or brisk uphill walk',
                        sets: '1',
                        reps: '30 min steady',
                        instructions: 'Choose a low-impact cardio option and maintain a pace where you can speak in short sentences.',
                        watch: 'Start gently and avoid turning this into an all-out effort.',
                        easier: 'Try 20 minutes at an easy pace.',
                        harder: 'Extend to 40 minutes while keeping the same effort.',
                        snow: 'A stronger aerobic base can help you enjoy more time on the mountain.'
                    },
                    {
                        id: 'mobility-3',
                        name: 'Hip and ankle mobility flow',
                        sets: '2',
                        reps: '5 / side',
                        instructions: 'Move slowly through comfortable hip and ankle ranges, pausing briefly where you feel stiffness.',
                        watch: 'Stay below sharp pain; mobility should feel controlled.',
                        easier: 'Reduce the range of each movement.',
                        harder: 'Add one slow breath at each end position.',
                        snow: 'Comfortable mobility can make it easier to adjust your stance and absorb movement.'
                    }]
            },
            {
                id: 'three-c',
                day: 'Friday',
                title: 'Power, balance & core',
                focus: 'Control',
                description: 'Finish the week with balance, lateral control and core work. Choose options that let you move well.',
                duration: '45 min',
                exercises: [
                    {
                        id: 'single-leg-3',
                        name: 'Single-leg balance',
                        sets: '3',
                        reps: '30 sec / side',
                        instructions: 'Stand on one foot with a soft knee. Keep your gaze steady and breathe naturally.',
                        watch: 'Keep your pelvis level; use support if needed.',
                        easier: 'Keep fingertips on a wall.',
                        harder: 'Reach the free leg gently in different directions.',
                        snow: 'Balance practice helps you make small adjustments on uneven terrain.'
                    },
                    {
                        id: 'lateral-step-3',
                        name: 'Lateral step and stick',
                        sets: '3',
                        reps: '6 / side',
                        instructions: 'Step sideways with purpose, land softly on one foot and hold your balance for two seconds.',
                        watch: 'Land quietly with knee aligned over the foot.',
                        easier: 'Take a smaller step and use support.',
                        harder: 'Increase distance only while landing stays quiet and controlled.',
                        snow: 'Lateral control helps with changing direction and stabilizing your stance.'
                    },
                    {
                        id: 'side-plank-3',
                        name: 'Side plank',
                        sets: '3',
                        reps: '20 sec / side',
                        instructions: 'Support yourself on your forearm and side of your foot or knee. Lift hips and hold a straight line.',
                        watch: 'Keep shoulder away from your ear and hips lifted.',
                        easier: 'Bend your knees and support yourself from them.',
                        harder: 'Hold longer or lift the top leg slightly.',
                        snow: 'Side-body endurance supports a controlled, centered stance.'
                    }]
            }
        ]
    }
];

// A shared warm-up is shown before every session in both plans.
const warmupExercises = [
    {
        id: 'march-in-place',
        name: 'March in place',
        sets: '1',
        reps: '60 sec',
        focus: 'Raise body temperature',
        instructions: 'March comfortably, lifting each knee and swinging your arms naturally.',
        watch: 'Stay tall and land softly.',
        easier: 'March slowly with smaller steps.',
        harder: 'Build to a brisk march while staying relaxed.',
        snow: 'Raises readiness for movement before you head onto the snow.'
    },
    {
        id: 'ankle-rocks',
        name: 'Ankle rocks',
        sets: '1',
        reps: '10 / side',
        focus: 'Ankle mobility',
        instructions: 'In a split stance, gently move your front knee forward over your toes and return.',
        watch: 'Keep the whole foot grounded and knee aligned with toes.',
        easier: 'Use a smaller range and hold a wall.',
        harder: 'Pause briefly at the end of each comfortable rep.',
        snow: 'Helps prepare ankle movement for a responsive stance in ski boots.'
    },
    {
        id: 'calf-raises-wu',
        name: 'Calf raises',
        sets: '1',
        reps: '12',
        focus: 'Lower-leg activation',
        instructions: 'Rise smoothly onto the balls of both feet, then lower with control.',
        watch: 'Keep pressure even across the feet.',
        easier: 'Use a smaller range or hold support.',
        harder: 'Pause at the top for two seconds.',
        snow: 'Wakes up the lower legs for balance and pressure adjustments.'
    },
    {
        id: 'heel-toe-rocks',
        name: 'Heel-to-toe rocks',
        sets: '1',
        reps: '10',
        focus: 'Foot control',
        instructions: 'Shift gently from heels toward the balls of your feet without lifting either end for long.',
        watch: 'Keep the movement small and controlled.',
        easier: 'Hold a stable support.',
        harder: 'Slow each shift and pause at both ends.',
        snow: 'Practices subtle balance shifts used to manage pressure on skis.'
    },
    {
        id: 'bodyweight-squat-wu',
        name: 'Bodyweight squats',
        sets: '1',
        reps: '10',
        focus: 'Leg activation',
        instructions: 'Sit your hips back and down, then stand smoothly with feet grounded.',
        watch: 'Keep knees tracking in line with toes.',
        easier: 'Use a shallow range or sit to a chair.',
        harder: 'Add a two-second pause near the bottom.',
        snow: 'Prepares the legs for repeated bending and absorbing terrain.'
    },
    {
        id: 'hip-hinge-wu',
        name: 'Hip hinges',
        sets: '1',
        reps: '10',
        focus: 'Hip pattern',
        instructions: 'Soften your knees, push hips back with a long spine, then stand tall.',
        watch: 'Move from the hips without rounding your back.',
        easier: 'Slide hands only to mid-thigh.',
        harder: 'Reach hips farther back while keeping your spine long.',
        snow: 'Rehearses a balanced athletic position for skiing.'
    },
    {
        id: 'reverse-lunge-wu',
        name: 'Alternating reverse lunges',
        sets: '1',
        reps: '6 / side',
        focus: 'Single-leg activation',
        instructions: 'Step one foot back, lower slightly, return to standing, and alternate sides.',
        watch: 'Keep the front foot grounded and torso comfortable.',
        easier: 'Use a short step and shallow bend.',
        harder: 'Add a gentle overhead reach.',
        snow: 'Prepares each leg for independent balance and control.'
    },
    {
        id: 'side-steps-wu',
        name: 'Lateral steps',
        sets: '1',
        reps: '8 / side',
        focus: 'Hip activation',
        instructions: 'Take small controlled steps sideways, keeping knees softly bent.',
        watch: 'Keep toes pointing forward and avoid letting knees collapse inward.',
        easier: 'Take smaller steps while standing taller.',
        harder: 'Use a light resistance band if available.',
        snow: 'Wakes up the muscles that help control side-to-side movement.'
    },
    {
        id: 'arm-circles-wu',
        name: 'Arm circles',
        sets: '1',
        reps: '10 / direction',
        focus: 'Shoulder mobility',
        instructions: 'Make relaxed small circles with both arms, then reverse direction.',
        watch: 'Keep shoulders relaxed away from your ears.',
        easier: 'Use smaller circles.',
        harder: 'Gradually increase the circle size.',
        snow: 'Prepares the upper body to stay relaxed and balanced.'
    },
    {
        id: 'torso-rotations-wu',
        name: 'Standing torso rotations',
        sets: '1',
        reps: '8 / side',
        focus: 'Trunk mobility',
        instructions: 'Stand tall and rotate your ribcage gently from side to side.',
        watch: 'Let hips stay mostly forward; keep the range comfortable.',
        easier: 'Make smaller rotations.',
        harder: 'Add a relaxed arm sweep with each turn.',
        snow: 'Encourages comfortable upper-body movement over stable legs.'
    },
    {
        id: 'standing-knee-hugs',
        name: 'Standing knee hugs',
        sets: '1',
        reps: '6 / side',
        focus: 'Hip mobility',
        instructions: 'Lift one knee and gently hug it toward your chest, then switch sides.',
        watch: 'Stand tall and use support if balance is uncertain.',
        easier: 'Lift the knee without holding it.',
        harder: 'Pause for two seconds while balanced.',
        snow: 'Practices balance while moving one leg at a time.'
    },
    {
        id: 'leg-swings-front',
        name: 'Front-to-back leg swings',
        sets: '1',
        reps: '8 / side',
        focus: 'Dynamic mobility',
        instructions: 'Hold a support and swing one relaxed leg forward and back through a small range.',
        watch: 'Keep your trunk still and swing without forcing range.',
        easier: 'Use a very small swing.',
        harder: 'Gradually increase range while staying controlled.',
        snow: 'Prepares the hips for dynamic movement on varied terrain.'
    },
    {
        id: 'leg-swings-side',
        name: 'Side-to-side leg swings',
        sets: '1',
        reps: '8 / side',
        focus: 'Dynamic mobility',
        instructions: 'Hold a support and swing one leg gently across the body and out to the side.',
        watch: 'Keep the pelvis level and movement smooth.',
        easier: 'Reduce the swing range.',
        harder: 'Pause briefly at each end of the swing.',
        snow: 'Gets the hips ready for lateral adjustments while skiing.'
    },
    {
        id: 'easy-skater-step',
        name: 'Easy skater steps',
        sets: '1',
        reps: '8 / side',
        focus: 'Lateral readiness',
        instructions: 'Step side to side, shifting weight onto each leg with a soft knee.',
        watch: 'Keep steps quiet and balanced; no jumping is needed.',
        easier: 'Make the steps narrower and slower.',
        harder: 'Reach the free foot slightly farther behind.',
        snow: 'Introduces a gentle side-to-side weight shift used in turns.'
    }
];

for (const plan of programs) {
    for (const workout of plan.workouts) workout.warmup = warmupExercises;
}

const threeDay = programs.find(plan => plan.id === 'three-day');
const weekOne = threeDay.workouts;
const warmupOnly = (week, day) => ({
    id: `three-${week}-${day.toLowerCase()}-warmup`,
    day: `Week ${week} · ${day}`,
    title: 'Warm-up',
    focus: 'Preparation',
    description: 'A short movement preparation session. Complete the shared warm-up at an easy, comfortable pace.',
    duration: '10 min',
    warmupOnly: true,
    exercises: [],
    warmup: warmupExercises
});
threeDay.duration = '2 weeks';
threeDay.weeks = '2 weeks · 3 training days + warm-up days';
threeDay.workouts = [
    {...weekOne[0], day: 'Week 1 · Monday'}, warmupOnly(1, 'Tuesday'),
    {...weekOne[1], day: 'Week 1 · Wednesday'}, warmupOnly(1, 'Thursday'),
    {...weekOne[2], day: 'Week 1 · Friday'}, warmupOnly(1, 'Saturday'),
    {...weekOne[0], id: 'three-a-week-2', day: 'Week 2 · Monday'}, warmupOnly(2, 'Tuesday'),
    {...weekOne[1], id: 'three-b-week-2', day: 'Week 2 · Wednesday'}, warmupOnly(2, 'Thursday'),
    {...weekOne[2], id: 'three-c-week-2', day: 'Week 2 · Friday'}, warmupOnly(2, 'Saturday')
];
