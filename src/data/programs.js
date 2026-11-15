// Edit this file to add or update programs, workouts and exercises.
// Image values may be remote URLs or paths under public/.
// Weekday labels are generated from workout order; do not add day fields to workouts.
const strength1 = {
    id: 'strength-1',
    title: 'Strength 1',
    focus: 'Strength',
    description: 'This full-body session builds the leg and core strength you need to stay stable against the forces of skiing.\n' +
        'Complete the warm-up first. Choose weights that make the final few reps challenging without losing your form.',
    duration: '50 min',
    exercises: [
        {
            id: 's1-01-goblet-squat',
            name: 'Goblet squat',
            sets: '4',
            reps: '6',
            measure: 'reps',
            image: 'images/strength1/s1-1.png',
            focus: 'Challenging load with clean form',
            instructions: 'Hold a dumbbell or kettlebell at chest height. Squat while keeping your feet grounded and knees aligned, then stand through your whole foot.',
            watch: 'Do not let your knees collapse inward. Reduce the weight or range if needed.',
            easier: 'Squat to a box or bench.',
            harder: 'Take three seconds to lower.',
            snow: 'Builds leg strength for holding position as the ski loads and bends.'
        },
        {
            id: 's1-02-kettlebell-suitcase-carry',
            name: 'Kettlebell suitcase carry',
            sets: '4',
            reps: '1 length',
            measure: 'length/side',
            image: 'images/strength1/s1-2.png',
            focus: 'Heavy load',
            instructions: 'Hold a heavy kettlebell, dumbbell, or plate in one hand and walk slowly with your torso upright, shoulders level, and ribs down.',
            watch: 'Do not lean away from the weight. Use a lighter load if you cannot stay upright.',
            easier: '',
            harder: '',
            snow: 'Builds core strength to help keep your upper body balanced over the outside ski.'
        },
        {
            id: 's1-03-kettlebell-lateral-lunge',
            name: 'Kettlebell lateral lunge',
            sets: '3',
            reps: '8',
            measure: 'reps/side',
            image: 'images/strength1/s1-3.png',
            focus: 'Kettlebell at chest',
            instructions: 'Hold a kettlebell at your chest, step wide, and sit into the stepping hip while keeping the other leg long. Push back to standing and switch sides.',
            watch: 'Keep the working knee tracking in line with your toes.',
            easier: '',
            harder: '',
            snow: 'Builds lateral strength to support balance over the outside ski and edge control.'
        },
        {
            id: 's1-04-single-arm-row',
            name: 'Kettlebell single-arm row',
            sets: '3',
            reps: '8',
            measure: 'reps/side',
            image: 'images/strength1/s1-4.png',
            focus: 'Heavy load',
            instructions: 'Hinge forward and support one hand on a bench or your knee. Pull the kettlebell toward your ribs with your elbow close, then lower slowly.',
            watch: 'Avoid twisting; keep your shoulders and hips facing the floor.',
            easier: '',
            harder: '',
            snow: 'Builds upper-back and core strength for stable posture and pole planting.'
        },
        {
            id: 's1-05-dumbbell-step-up',
            name: 'Dumbbell step-up',
            sets: '4',
            reps: '6',
            measure: 'reps/side',
            image: 'images/strength1/s1-5.png',
            focus: 'Moderate to heavy',
            instructions: 'Hold dumbbells and place one foot on a stable box or bench. Push through that foot to step up, then lower slowly. Finish the reps before switching sides.',
            watch: 'Avoid pushing off with the trailing foot. Use a lower step or lighter weights if needed.',
            easier: '',
            harder: '',
            snow: 'Builds independent strength in each leg for balance and control over the outside ski.'
        },
        {
            id: 's1-06-single-arm-overhead-press',
            name: 'Single-arm dumbbell overhead press',
            sets: '4',
            reps: '8',
            measure: 'reps/side',
            image: 'images/strength1/s1-6.png',
            focus: 'Moderate load',
            instructions: 'Stand tall with a dumbbell at one shoulder. Keep your ribs down as you press overhead, then lower slowly and switch sides after the set.',
            watch: 'Do not lean back or arch your lower back. Use a lighter weight if needed.',
            easier: '',
            harder: '',
            snow: 'Builds shoulder and core strength under an uneven load for a stable upper body and pole position.'
        },
        {
            id: 's1-07-hollow-body-hold',
            name: 'Hollow body hold',
            sets: '8',
            reps: '20 on / 10 off',
            measure: 'sec',
            image: 'images/strength1/s1-7.png',
            focus: 'Bodyweight',
            instructions: 'Lie on your back, press your lower back into the floor, lift your arms and legs, and hold while breathing normally.',
            watch: 'Keep your lower back on the floor; bring your limbs closer if it lifts.',
            easier: 'Bend your knees and keep your arms across your chest.',
            harder: '',
            snow: 'Builds core endurance to connect your upper and lower body while your legs work.'
        },
        {
            id: 's1-08-half-kneeling-landmine-press',
            name: 'Half-kneeling landmine press',
            sets: '3',
            reps: '10',
            measure: 'reps/side',
            image: 'images/strength1/s1-8.png',
            focus: 'Moderate load',
            instructions: 'Start half-kneeling with the end of a barbell at one shoulder. Press it forward and up until your arm is straight, then lower and switch sides after the reps.',
            watch: 'Resist rotation; keep your shoulders and hips facing forward.',
            easier: '',
            harder: '',
            snow: 'Builds shoulder and core strength to resist unwanted rotation and maintain upper-body stability.'
        }]
};

const strength2 = {
    id: 'strength-2',
    title: 'Strength 2',
    focus: 'Strength',
    description: 'This session focuses on your glutes, hamstrings and core. You\'ll build ' +
        'strength on one leg at a time, while training your upper body to stay stable ' +
        'rather than being pulled or twisted out of position.\n' +
        'Complete the warm-up first. Choose weights that challenge you without ' +
        'losing control of the movement.',
    duration: '50 min',
    exercises: [
        {
            id: 's2-01-pallof-press',
            name: 'Pallof press',
            sets: '3',
            reps: '12',
            measure: 'reps/side',
            image: '',
            focus: 'Band or cable',
            instructions: 'Set a band or cable at chest height and stand side-on. Press it from your chest straight ahead, pause, then bring it back.',
            watch: 'Keep your shoulders and hips facing forward against the pull. Reduce tension if needed.',
            easier: 'Use less tension or stand closer to the anchor.',
            harder: '',
            snow: 'Builds anti-rotation strength to keep your upper body quiet while your legs turn.'
        },
        {
            id: 's2-02-plank-plate-pull-through',
            name: 'Plank with plate pull-through',
            sets: '3',
            reps: '8',
            measure: 'reps/side',
            image: '',
            focus: 'Moderate plate',
            instructions: 'In a high plank, reach one hand under your body to pull a plate from one side to the other. Replace your hand and alternate.',
            watch: 'Keep your hips steady. Widen your feet or use a lighter plate if needed.',
            easier: '',
            harder: '',
            snow: 'Challenges your core to stay stable while one arm moves under load.'
        },
        {
            id: 's2-03-deadlift',
            name: 'Deadlift',
            sets: '5',
            reps: '5',
            measure: 'reps',
            image: '',
            focus: 'Heavy, with room left in the tank',
            instructions: 'Stand with feet about hip-width and the bar over mid-foot. Hinge and bend to grip the bar, brace, push the floor away, and stand tall. Lower with control. Heavy dumbbells can also be used.',
            watch: 'Do not round your back or jerk the weight. Reduce the load or raise the starting position if needed.',
            easier: 'Use a trap bar or raise the weights on stable blocks.',
            harder: '',
            snow: 'Builds glute, hamstring, and back strength for absorbing force and maintaining position.'
        },
        {
            id: 's2-04-dead-bug',
            name: 'Dead bug',
            sets: '5',
            reps: '10',
            measure: 'reps/side',
            image: '',
            focus: 'Bodyweight',
            instructions: 'Slowly extend opposite arm and leg, keeping your lower back gently pressed into the floor.',
            watch: 'Shorten the movement if your lower back starts to lift as you tire.',
            easier: '',
            harder: '',
            snow: 'Builds core strength and coordination while your limbs move independently.'
        },
        {
            id: 's2-05-single-leg-rdl',
            name: 'Single-leg RDL',
            sets: '4',
            reps: '8',
            measure: 'reps/side',
            image: '',
            focus: 'Dumbbell in opposite hand',
            instructions: 'Stand on one leg with a dumbbell in the opposite hand. Hinge at the hips as the free leg reaches behind, lower the weight, then stand through the supporting foot.',
            watch: 'Keep both hips facing the floor and make the movement smaller if balance slips.',
            easier: 'Keep the toes of your back foot lightly on the floor in a kickstand stance.',
            harder: '',
            snow: 'Builds single-leg strength and balance for control over the outside ski.'
        },
        {
            id: 's2-06-dumbbell-biceps-curl',
            name: 'Dumbbell biceps curl',
            sets: '4',
            reps: '10',
            measure: 'reps',
            image: '',
            focus: 'Moderate load',
            instructions: 'Stand tall with dumbbells at your sides. Bend your elbows to curl the weights toward your shoulders, then lower slowly.',
            watch: 'Do not swing or lean back. Use a lighter load if needed.',
            easier: '',
            harder: '',
            snow: 'Builds arm strength to support your position and precise pole plants as you tire.'
        },
        {
            id: 's2-07-bulgarian-split-squat',
            name: 'Bulgarian split squat',
            sets: '4',
            reps: '8',
            measure: 'reps/side',
            image: '',
            focus: 'Dumbbells at sides',
            instructions: 'Rest your rear foot on a bench and set the front foot far enough forward. Lower by bending the front leg, then push through the front foot to stand.',
            watch: 'Let the front leg do most of the work. Avoid pushing up with the rear foot or letting the front knee collapse inward.',
            easier: 'Keep the back foot on the floor for a standard split squat.',
            harder: '',
            snow: 'Builds independent leg strength for pressure management and balance over the outside ski.'
        },
        {
            id: 's2-08-copenhagen-plank',
            name: 'Copenhagen plank',
            sets: '4',
            reps: '8',
            measure: 'reps/side',
            image: '',
            focus: 'Bodyweight',
            instructions: 'Lie on your side with your top leg supported on a bench. Lift into a side plank and raise and lower your bottom leg.',
            watch: 'Keep your hips lifted and facing forward. Stop if you cannot hold the position.',
            easier: 'Rest your top knee on the bench or keep your bottom foot on the floor.',
            harder: '',
            snow: 'Builds inner-thigh, hip, and core strength for angulation and edge control.'
        }]
};

const strength3 = {
    id: 'strength-3',
    title: 'Strength 3',
    focus: 'Strength',
    description: 'The final strength session brings together single-leg strength, knee and\n' +
        'ankle control, and upper-body stability. It\'s designed to help you stay\n' +
        'balanced and maintain your position as the forces and conditions change beneath you.\n' +
        'Complete the warm-up first. Choose weights that challenge you without\n' +
        'losing control of the movement.',
    duration: '50 min',
    exercises: [
        {
            id: 's3-01-back-rack-reverse-lunge',
            name: 'Back-rack reverse lunge',
            sets: '4',
            reps: '6',
            measure: 'reps/side',
            image: '',
            focus: 'Barbell or heavy dumbbells',
            instructions: 'Hold a barbell across your shoulders or dumbbells at your sides. Step one foot back and lower the rear knee, then push through the front foot to stand.',
            watch: 'Use a long enough step to lower with control. Keep your front foot flat and knee aligned.',
            easier: '',
            harder: '',
            snow: 'Builds independent leg strength for pressure management and balance over the outside ski.'
        },
        {
            id: 's3-02-kettlebell-overhead-waiters-carry',
            name: "Kettlebell overhead waiter's carry",
            sets: '4',
            reps: '1 length',
            measure: 'length/side',
            image: '',
            focus: 'Moderate kettlebell',
            instructions: 'Press a kettlebell overhead and walk slowly for one length with your wrist neutral and ribs down. Lower the weight and switch sides.',
            watch: 'Avoid folding your wrist or leaning. Use a lighter kettlebell if needed.',
            easier: '',
            harder: '',
            snow: 'Builds shoulder and core stability under an uneven load for a stable upper body and pole position.'
        },
        {
            id: 's3-03-barbell-rdl',
            name: 'Barbell RDL',
            sets: '4',
            reps: '8',
            measure: 'reps',
            image: '',
            focus: 'Heavy',
            instructions: 'Hold the bar in front of your thighs with knees slightly bent. Push your hips back as the bar travels down your legs, then drive your hips forward to stand.',
            watch: 'Treat it as a hip hinge, not a squat; keep the knee bend slight.',
            easier: '',
            harder: '',
            snow: 'Builds hamstring and glute strength for controlling pressure and bringing your feet back under you between turns.'
        },
        {
            id: 's3-04-dumbbell-lateral-raise',
            name: 'Dumbbell lateral raise',
            sets: '4',
            reps: '8',
            measure: 'reps',
            image: '',
            focus: 'Light to moderate',
            instructions: 'Stand tall with dumbbells and a slight bend in your elbows. Raise your arms out to shoulder height, then lower slowly.',
            watch: 'Avoid swinging the weights or shrugging. Use lighter dumbbells if needed.',
            easier: '',
            harder: '',
            snow: 'Builds shoulder strength for a stable upper-body position and fluid pole plants.'
        },
        {
            id: 's3-05-poliquin-step-down',
            name: 'Poliquin step-down (kettlebells at sides)',
            sets: '3',
            reps: '8',
            measure: 'reps/side',
            image: '',
            focus: 'Kettlebells at sides',
            instructions: 'Stand on a low, stable step on one foot while holding kettlebells. Bend that knee to lower the opposite heel to the floor, tap lightly, then stand.',
            watch: 'Lower with control and keep the working knee aligned.',
            easier: 'Use a lower step or do the movement without weights.',
            harder: '',
            snow: 'Builds quadriceps strength and knee control for absorbing force as terrain changes.'
        },
        {
            id: 's3-06-calf-raises',
            name: 'Calf raises (kettlebells at sides)',
            sets: '3',
            reps: '10',
            measure: 'reps',
            image: '',
            focus: 'Kettlebells at sides',
            instructions: 'Stand tall holding kettlebells. Rise onto the balls of your feet, pause, and lower slowly. On a step, let your heels drop below your toes.',
            watch: 'Avoid bouncing or letting your ankles roll outward. Keep the movement controlled.',
            easier: '',
            harder: '',
            snow: 'Builds ankle and calf strength for precise balance adjustments along the ski.'
        },
        {
            id: 's3-07-landmine-curtsy-lunge',
            name: 'Landmine curtsy lunge',
            sets: '3',
            reps: '6-10',
            measure: 'reps/side',
            image: '',
            focus: 'Bar at chest',
            instructions: 'Hold the end of the landmine bar at your chest. Step one foot behind and across the other, lower into a lunge, then push through the front foot to stand and switch sides.',
            watch: 'Keep the front knee aligned with your toes. Make the step smaller if needed.',
            easier: '',
            harder: '',
            snow: 'Builds hip strength and mobility through a side-to-side range that supports angulation.'
        },
        {
            id: 's3-08-push-ups',
            name: 'Push-ups',
            sets: '3',
            reps: '10',
            measure: 'reps',
            image: '',
            focus: 'Bodyweight',
            instructions: 'Start in a high plank with hands slightly wider than shoulders. Lower your chest with elbows angled back, then press up while keeping your body aligned.',
            watch: 'Keep your hips from sagging and avoid flaring your elbows. Use a comfortable range.',
            easier: 'Put your hands on a bench or do the movement from your knees.',
            harder: '',
            snow: 'Builds upper-body and core strength for maintaining a stable skiing posture.'
        }]
};

const powerConditioning1 = {
    id: 'power-conditioning-1',
    title: 'Power Conditioning 1',
    focus: '4 plyometric exercises + sprint intervals',
    description: 'The first half of this session builds your ability to produce and absorb force ' +
        'quickly, using jumps that challenge your power, balance and control. The ' +
        'second trains you to repeat hard efforts and recover quickly enough to go again.\n' +
        'Complete the full mobility and activation warm-up before you start. With ' +
        'every jump, the quality of the landing matters more than the height or distance',
    duration: '45 min',
    exercises: [
        {
            id: 'pc1-01-depth-drop-vertical-jump',
            name: 'Depth drop to vertical jump',
            sets: '6',
            reps: '3',
            measure: 'reps',
            image: '',
            focus: 'Bodyweight',
            instructions: 'Step off a low, stable box and land softly on both feet. Move straight into a vertical jump and land under control.',
            watch: 'Keep your knees aligned and land quietly. Stop and reset if you lose control.',
            easier: 'Use a lower step or practise the landing without the jump.',
            harder: '',
            snow: 'Trains force absorption followed by a quick response for transitions, bumps, and variable snow.'
        },
        {
            id: 'pc1-02-single-leg-broad-jumps',
            name: 'Single-leg broad jumps',
            sets: '6',
            reps: '3',
            measure: 'reps/side',
            image: '',
            focus: 'Bodyweight',
            instructions: 'Jump forward from one leg and land on the same leg. Hold the landing, reset, and complete the reps before switching.',
            watch: 'Prioritize a controlled landing over distance.',
            easier: '',
            harder: '',
            snow: 'Builds power, balance, and control for managing force on one ski at a time.'
        },
        {
            id: 'pc1-03-box-jumps',
            name: 'Box jumps',
            sets: '6',
            reps: '4',
            measure: 'reps',
            image: '',
            focus: 'Record box height',
            instructions: 'Jump from a standing position onto a stable box, land softly on both feet, stand tall, and step down between repetitions.',
            watch: 'Choose a height that allows a controlled landing without knees collapsing or feet catching the edge.',
            easier: 'Use a lower box or practise vertical jumps from the floor.',
            harder: '',
            snow: 'Builds explosive leg power for quick transitions and reacting to changes in terrain.'
        },
        {
            id: 'pc1-04-lateral-single-leg-hops',
            name: 'Lateral single-leg hops',
            sets: '6',
            reps: '20',
            measure: 'sec/side',
            image: '',
            focus: 'Bodyweight',
            instructions: 'On one leg, make small side-to-side hops and land on the same leg each time.',
            watch: 'Keep the knee aligned and reduce the hop size if balance or landing control slips.',
            easier: 'Use both feet or make the hops shorter.',
            harder: '',
            snow: 'Builds lateral power and balance for controlled edge-to-edge movements.'
        },
        {
            id: 'pc1-05-sprint-intervals',
            name: 'Sprint intervals',
            sets: '10',
            reps: '40 hard / 20 recovery',
            measure: 'sec',
            image: '',
            focus: 'Hard but repeatable effort',
            instructions: 'Jog for 5 minutes, then alternate 40 seconds of hard running and 20 seconds of recovery ten times. Jog for 5 minutes to cool down.',
            watch: 'Your pace should feel hard, but controlled enough to repeat across all ten ' +
                'intervals. The final interval should still look like running, not survival.',
            easier: 'Use a stationary bike or rowing machine with the same work and recovery timing.',
            harder: '',
            snow: 'FROM CARV\'S DATA. Edge similarity is usually the first thing to go. ' +
                'Across those same 90,000 ski days, it dropped between the first hour and ' +
                'the last in 78% of them. Tired legs stop working independently, and the two ' +
                'skis stop matching.'
        }]
};

const powerConditioning2 = {
    id: 'power-conditioning-1',
    title: 'Power Conditioning 1',
    focus: '4 power exercises + running intervals',
    description: 'This session builds your ability to produce force quickly in different ' +
        'directions, while keeping your body stable and controlled. It finishes with ' +
        'longer intervals at a slightly lower intensity than Power/Conditioning 1, training you to ' +
        'sustain hard efforts and recover before going again.\n' +
        'Complete the full mobility and activation warm-up before you start. Keep ' +
        'the jumps controlled and prioritise the quality of every landing',
    duration: '45 min',
    exercises: [
        {
            id: 'pc2-01-broad-jump-vertical-jump',
            name: 'Broad jump to vertical jump',
            sets: '4',
            reps: '4',
            measure: 'reps',
            image: '',
            focus: 'Bodyweight',
            instructions: 'Jump forward and land softly. Once balanced, jump straight upward, land under control, reset, and repeat.',
            watch: 'Do not jump farther than you can control on the first landing.',
            easier: 'Pause fully between jumps or practise each jump separately.',
            harder: '',
            snow: 'Trains force production in a new direction for adapting to unexpected terrain changes.'
        },
        {
            id: 'pc2-02-squat-jump',
            name: 'Squat jump',
            sets: '4',
            reps: '10',
            measure: 'reps',
            image: '',
            focus: 'Bodyweight',
            instructions: 'Lower into a squat, jump upward, and land softly by bending your ankles, knees, and hips. Reset before the next jump.',
            watch: 'Maintain jump and landing quality as you tire; pause when needed.',
            easier: 'Do 5-6 repetitions per set.',
            harder: '',
            snow: 'Builds repeated explosive leg power for managing pressure through successive turns.'
        },
        {
            id: 'pc2-03-lateral-medicine-ball-toss',
            name: 'Lateral medicine ball toss',
            sets: '4',
            reps: '8',
            measure: 'reps/side',
            image: '',
            focus: 'Moderate medicine ball',
            instructions: 'Stand side-on to a solid wall with the ball near the hip farthest from it. Rotate through your hips and trunk to throw, retrieve, reset, and repeat.',
            watch: 'Generate the throw through the floor, hips, and trunk rather than only your arms.',
            easier: '',
            harder: '',
            snow: 'Develops rotational power while coordinating the upper and lower body.'
        },
        {
            id: 'pc2-04-kettlebell-swings',
            name: 'Kettlebell swings',
            sets: '4',
            reps: '10',
            measure: 'reps',
            image: '',
            focus: 'Challenging load with clean form',
            instructions: 'Hold the kettlebell with both hands. Hinge to swing it between your legs, then drive your hips forward to send it toward chest height.',
            watch: 'Make it a hip hinge, not a squat. Let your hips create the power; your arms guide the bell.',
            easier: '',
            harder: '',
            snow: 'Builds glute and hamstring power and endurance for repeated quick movements through turns.'
        },
        {
            id: 'pc2-05-conditioning-intervals',
            name: 'Conditioning intervals',
            sets: '10',
            reps: '1 hard / 1 easy',
            measure: 'min',
            image: '',
            focus: 'Hard, repeatable efforts · 20 minutes',
            instructions: 'For 10 minutes, alternate one minute of hard running at about 80% effort with one minute of easy running.',
            watch: 'Avoid starting so hard that your pace falls apart in later intervals.',
            easier: '',
            harder: '',
            snow: 'Builds the ability to repeat hard efforts and recover between them while maintaining technique.'
        }]
};

const endurance = {
    id: 'endurance',
    title: 'Endurance',
    focus: 'Agility drills + Zone 2 endurance',
    description: 'This session starts with agility drills to improve how quickly and precisely ' +
        'you move your feet. You\'ll then complete 30-45 minutes at a steady pace, ' +
        'building the endurance to keep skiing well as the hours and days stack up.\n' +
        'Complete the mobility and activation warm-up first.',
    duration: '50 min',
    exercises: [
        {
            id: 'end-01-01-forward-hops-both-feet',
            name: 'Forward hops on both feet',
            sets: '1',
            reps: '',
            measure: '',
            image: '',
            focus: 'Agility ladder',
            instructions: 'Follow the forward two-foot hopping pattern shown in the plan. Work both sides where relevant.',
            watch: 'Learn the pattern accurately before adding speed.',
            easier: '',
            harder: '',
            snow: 'Develops agility and coordination for precise edge and pressure movements, helping your feet respond quickly when the terrain changes.'
        },
        {
            id: 'end-01-02-forward-hops-one-foot',
            name: 'Forward hops on one foot',
            sets: '1',
            reps: '',
            measure: '',
            image: '',
            focus: 'Agility ladder',
            instructions: 'Follow the forward single-foot hopping pattern shown in the plan. Practise both legs.',
            watch: 'Learn the pattern accurately before adding speed.',
            easier: '',
            harder: '',
            snow: 'Develops agility and coordination for precise edge and pressure movements, helping your feet respond quickly when the terrain changes.'
        },
        {
            id: 'end-01-03-forward-step-through',
            name: 'Forward step-through',
            sets: '1',
            reps: '',
            measure: '',
            image: '',
            focus: 'Agility ladder',
            instructions: 'Follow the forward step-through pattern, changing which foot leads.',
            watch: 'Learn the pattern accurately before adding speed.',
            easier: '',
            harder: '',
            snow: 'Develops agility and coordination for precise edge and pressure movements, helping your feet respond quickly when the terrain changes.'
        },
        {
            id: 'end-01-04-lateral-step-through',
            name: 'Lateral step-through',
            sets: '1',
            reps: '',
            measure: '',
            image: '',
            focus: 'Agility ladder',
            instructions: 'Follow the lateral step-through pattern in both directions.',
            watch: 'Learn the pattern accurately before adding speed.',
            easier: '',
            harder: '',
            snow: 'Develops agility and coordination for precise edge and pressure movements, helping your feet respond quickly when the terrain changes.'
        },
        {
            id: 'end-01-05-lateral-hops-both-feet',
            name: 'Lateral hops on both feet',
            sets: '1',
            reps: '',
            measure: '',
            image: '',
            focus: 'Agility ladder',
            instructions: 'Follow the lateral two-foot hopping pattern shown in the plan.',
            watch: 'Learn the pattern accurately before adding speed.',
            easier: '',
            harder: '',
            snow: 'Develops agility and coordination for precise edge and pressure movements, helping your feet respond quickly when the terrain changes.'
        },
        {
            id: 'end-01-06-lateral-hops-one-foot',
            name: 'Lateral hops on one foot',
            sets: '1',
            reps: '',
            measure: '',
            image: '',
            focus: 'Agility ladder',
            instructions: 'Follow the lateral single-foot hopping pattern shown in the plan. Practise both legs.',
            watch: 'Learn the pattern accurately before adding speed.',
            easier: '',
            harder: '',
            snow: 'Develops agility and coordination for precise edge and pressure movements, helping your feet respond quickly when the terrain changes.'
        },
        {
            id: 'end-01-07-lateral-carioca',
            name: 'Lateral carioca',
            sets: '1',
            reps: '',
            measure: '',
            image: '',
            focus: 'Agility ladder',
            instructions: 'Follow the lateral carioca pattern shown in the plan in both directions.',
            watch: 'Learn the pattern accurately before adding speed.',
            easier: '',
            harder: '',
            snow: 'Develops agility and coordination for precise edge and pressure movements, helping your feet respond quickly when the terrain changes.'
        },
        {
            id: 'end-01-08-lateral-in-in-out-out',
            name: 'Lateral in-in-out-out',
            sets: '1',
            reps: '',
            measure: '',
            image: '',
            focus: 'Agility ladder',
            instructions: 'Follow the lateral in-in-out-out foot pattern shown in the plan.',
            watch: 'Learn the pattern accurately before adding speed.',
            easier: '',
            harder: '',
            snow: 'Develops agility and coordination for precise edge and pressure movements, helping your feet respond quickly when the terrain changes.'
        },
        {
            id: 'end-01-09-forward-in-in-out',
            name: 'Forward in-in-out',
            sets: '1',
            reps: '',
            measure: '',
            image: '',
            focus: 'Agility ladder',
            instructions: 'Follow the forward in-in-out foot pattern shown in the plan.',
            watch: 'Learn the pattern accurately before adding speed.',
            easier: '',
            harder: '',
            snow: 'Develops agility and coordination for precise edge and pressure movements, helping your feet respond quickly when the terrain changes.'
        },
        {
            id: 'end-02-zone-2',
            name: 'Zone 2',
            sets: '1',
            reps: '30-45',
            measure: 'min',
            image: '',
            focus: 'Steady pace',
            instructions: 'Choose a continuous activity such as jogging, cycling, brisk or uphill walking, swimming, elliptical, or stair-stepper. Maintain the effort for 30-45 minutes.',
            watch: 'Breathe harder than usual but remain able to hold a conversation; slow down if you can only say a few words.',
            easier: '',
            harder: '',
            snow: 'Builds aerobic endurance for recovering between ski days and maintaining technique as the trip continues.'
        }]
};

const restDay = id => ({
    id,
    title: 'Rest day',
    focus: 'Recovery',
    description: 'Take a rest day. If you feel like moving, go for an easy walk; otherwise, take the day off.',
    restDay: true,
    exercises: [],
    warmup: []
});

export const programs = [
    {
        id: 'six-day',
        workoutsPerWeek: 7,
        name: '6 days / week',
        shortName: '6-day plan',
        duration: '6 weeks',
        level: 'Progressive',
        summary: 'For anyone already comfortable training most days of the week. You\'ll ' +
            'complete all six workouts each week, with the mobility and activation ' +
            'warm-up at the start of every session \n' +
            'You can move the sessions around to fit your week. Just don\'t put Strength 1, ' +
            '2 and 3 on consecutive days.',
        weeks: '6 weeks · 45–60 min sessions',
        workouts: [
            strength1,
            powerConditioning1,
            strength2,
            restDay('six-day-rest'),
            strength3,
            powerConditioning2,
            endurance
        ]
    },
    {
        id: 'three-day',
        workoutsPerWeek: 7,
        name: '3 days / week',
        shortName: '3-day plan',
        duration: '6 weeks',
        level: 'Balanced',
        summary: 'For anyone newer to training, returning after time off or unsure where to ' +
            'start. You\'ll complete the six workouts over two weeks, then repeat that ' +
            'cycle three times.',
        weeks: '6 weeks · 45–60 min sessions',
        workouts: []
    }
];

// A shared warm-up is shown before every session in both plans.
const warmupExercises = [
    {
        id: '1-pelvic-tilt',
        name: 'Pelvic tilt',
        sets: '1',
        reps: '10-15',
        measure: 'reps',
        image: 'images/warmup/wu1.png',
        focus: 'Bodyweight',
        instructions: 'Lie on your back with your knees bent and your feet flat on the floor. Gently tilt ' +
            'your pelvis towards you, pressing your lower back into the floor. Release back to ' +
            'neutral and repeat slowly.',
        watch: 'Don\'t force the movement or push through your feet. Keep it small and controlled.',
        snow: 'Builds awareness of your pelvic position, helping you stay ' +
            'aligned over your skis rather than tipping too far forwards or backwards.'
    },
    {
        id: 'wu-02-dead-bug',
        name: 'Dead bug',
        sets: '1',
        reps: '10-15',
        measure: 'reps/side',
        image: 'images/warmup/wu2.png',
        focus: 'Bodyweight',
        instructions: 'Lie on your back with arms above your shoulders and knees bent over your hips. Slowly extend opposite arm and leg, return, then switch sides.',
        watch: 'Keep your lower back gently pressed into the floor. Shorten the reach if it lifts.',
        easier: 'Move one arm or leg at a time.',
        harder: 'Reach your leg closer to the floor or hold a light dumbbell.',
        snow: 'Trains your core to stay stable while your limbs move independently, helping keep your upper body quiet as you steer.'
    },
    {
        id: 'wu-03-bird-dog',
        name: 'Bird dog',
        sets: '1',
        reps: '10-15',
        measure: 'reps/side',
        image: 'images/warmup/wu3.png',
        focus: 'Bodyweight',
        instructions: 'Start on hands and knees. Extend one arm forward and the opposite leg back, pause, return, and switch sides.',
        watch: 'Keep your hips steady and avoid arching your lower back. Make the reach smaller if needed.',
        easier: '',
        harder: '',
        snow: 'Builds core stability so your upper body can remain quiet while your legs move.'
    },
    {
        id: 'wu-04-thoracic-spine-rotation',
        name: 'Thoracic spine rotation',
        sets: '1',
        reps: '10-15',
        measure: 'reps/side',
        image: 'images/warmup/wu4.png',
        focus: 'Bodyweight',
        instructions: 'Start on hands and knees with one hand behind your head. Rotate your upper back to raise that elbow, then bring it down and underneath the opposite arm.',
        watch: 'Keep your hips still and rotate through your upper back rather than your lower back.',
        easier: '',
        harder: '',
        snow: 'Improves upper-body movement so you can face down the hill while your skis turn.'
    },
    {
        id: 'wu-05-90-90-hip-lift',
        name: '90/90s with hip lift',
        sets: '1',
        reps: '8-10',
        measure: 'reps/side',
        image: 'images/warmup/wu5.png',
        focus: 'Bodyweight',
        instructions: 'Sit with knees bent and feet on the floor. Let both knees drop to one side, move them across, then add a small hip lift at the top of each repetition.',
        watch: 'Move slowly; do not swing your legs using momentum.',
        easier: 'Skip the hip lift.',
        harder: 'Hold the lifted position for two seconds on each side.',
        snow: 'Builds hip range for creating angulation and staying balanced over the outside ski.'
    },
    {
        id: 'wu-06-ankle-dorsiflexion-rockers',
        name: 'Ankle dorsiflexion rockers',
        sets: '1',
        reps: '10-15',
        measure: 'reps/side',
        image: 'images/warmup/wu6.png',
        focus: 'Bodyweight',
        instructions: 'In a half-kneeling position with the front foot flat, move the front knee forward over the toes, then rock back.',
        watch: 'Keep your heel down and knee aligned. Move only as far as your whole foot stays grounded.',
        easier: '',
        harder: '',
        snow: 'Supports ankle flexion in ski boots and helps keep your feet under you for centered balance.'
    },
    {
        id: 'wu-07-worlds-greatest-stretch',
        name: "World's greatest stretch",
        sets: '1',
        reps: '8-10',
        measure: 'reps/side',
        image: 'images/warmup/wu7.png',
        focus: 'Bodyweight',
        instructions: 'From a plank, step one foot outside the same-side hand. Lower that elbow toward the floor, then reach the same arm upward. Return to plank and switch sides.',
        watch: 'Keep your front foot flat and use only a comfortable range.',
        easier: 'Put your back knee down or omit the elbow drop.',
        harder: '',
        snow: 'Opens the hips, spine, and hamstrings for angulation and adapting to terrain.'
    },
    {
        id: 'wu-08-calf-raises',
        name: 'Calf raises',
        sets: '1',
        reps: '15-20',
        measure: 'reps',
        image: 'images/warmup/wu8.png',
        focus: 'Bodyweight',
        instructions: 'Stand tall, rise onto the balls of your feet, pause, then lower slowly. Start with both feet; progress to one leg when comfortable.',
        watch: 'Avoid bouncing or letting your ankles roll outward. Keep the movement controlled.',
        easier: '',
        harder: 'Use one leg or stand on a step and lower your heels below your toes.',
        snow: 'Builds ankle strength and control for small fore-and-aft balance adjustments.'
    },
    {
        id: 'wu-09-standing-hip-circles',
        name: 'Standing hip circles',
        sets: '1',
        reps: '25',
        measure: 'reps/side',
        image: 'images/warmup/wu9.png',
        focus: 'Bodyweight',
        instructions: 'Balance on one leg, lift the other knee toward hip height, and slowly draw a large circle with it. Change direction halfway through, then switch legs.',
        watch: 'Keep your upper body still. Make smaller circles or hold support if you sway.',
        easier: '',
        harder: '',
        snow: 'Builds hip mobility for angulation and absorbing changes in terrain without moving your whole upper body.'
    },
    {
        id: 'wu-10-lateral-to-curtsy-lunge',
        name: 'Lateral lunge to curtsy lunge',
        sets: '1',
        reps: '10-12',
        measure: 'reps/side',
        image: 'images/warmup/wu10.png',
        focus: 'Bodyweight',
        instructions: 'Step wide and sit into the stepping hip while keeping the other leg long. Return to standing, then step that foot behind and across into a curtsy lunge. Return to standing.',
        watch: 'Keep the front knee aligned with your toes in both lunges.',
        easier: 'Hold support and make both lunges shallower.',
        harder: '',
        snow: 'Builds hip strength and range for angulation and control under your skis.'
    },
    {
        id: 'wu-11-plank-shoulder-taps',
        name: 'High plank with shoulder taps',
        sets: '1',
        reps: '10-12',
        measure: 'reps/side',
        image: 'images/warmup/wu11.png',
        focus: 'Bodyweight',
        instructions: 'Start in a high plank. Lift one hand to tap the opposite shoulder, return it to the floor, then switch sides.',
        watch: 'Keep your hips from rocking. Widen your feet for more stability.',
        easier: 'Start from your knees.',
        harder: 'Bring your feet closer together.',
        snow: 'Adds an anti-rotation challenge to core stability, helping keep your upper body quiet as your legs move.'
    },
    {
        id: 'wu-12-pogo-jumps',
        name: 'Pogo jumps',
        sets: '1',
        reps: '30',
        measure: 'sec/variation',
        image: 'images/warmup/wu12.png',
        focus: 'Bodyweight',
        instructions: 'Make small, quick jumps from the balls of your feet. Complete 30 seconds on both feet, then 30 seconds on each leg.',
        watch: 'Keep jumps low, contacts quick, and landings quiet.',
        easier: '',
        harder: '',
        snow: 'Trains your feet and ankles to react quickly and absorb repeated impacts.'
    },
    {
        id: 'wu-13-broad-jump-back-pedal',
        name: 'Broad jump with back-pedal',
        sets: '4',
        reps: '4',
        measure: 'jumps',
        image: 'images/warmup/wu13.png',
        focus: 'Bodyweight',
        instructions: 'Jump forward as far as you can while landing under control. Back-pedal to the start and repeat.',
        watch: 'Reset between jumps. Land softly and regain your balance before starting again.',
        easier: '',
        harder: '',
        snow: 'Builds explosive leg power and the control to absorb a landing.'
    },
    {
        id: 'wu-14-depth-drop',
        name: 'Depth drop',
        sets: '1',
        reps: '8',
        measure: 'reps',
        image: 'images/warmup/wu14.png',
        focus: 'Bodyweight',
        instructions: 'Stand on a low, stable step. Step off and land softly on both feet, bending through your ankles, knees, and hips. Hold the landing briefly.',
        watch: 'Avoid landing with straight legs or knees collapsing inward. Aim for a quiet, balanced landing.',
        easier: 'Use a lower step.',
        harder: '',
        snow: 'Rehearses absorbing bumps and terrain changes through your legs.'
    }
];

for (const plan of programs) {
    for (const workout of plan.workouts) {
        workout.warmup = workout.restDay ? [] : warmupExercises;
    }
}

const threeDay = programs.find(plan => plan.id === 'three-day');
const warmupOnly = id => ({
    id,
    title: 'Warm-up',
    focus: 'Preparation',
    description: 'A short movement preparation session. Complete the shared warm-up at an easy, comfortable pace.',
    duration: '10 min',
    warmupOnly: true,
    exercises: [],
    warmup: warmupExercises
});
threeDay.duration = '2 weeks';
threeDay.weeks = '2 weeks · 3 training days per week';
threeDay.workouts = [
    // Week 1: each array position maps to Monday through Sunday.
    {...strength1, id: 'three-week-1-strength-1'},
    warmupOnly('three-week-1-warmup-1'),
    {...powerConditioning1, id: 'three-week-1-power-conditioning-1'},
    warmupOnly('three-week-1-warmup-2'),
    {...strength2, id: 'three-week-1-strength-2'},
    warmupOnly('three-week-1-warmup-3'),
    restDay('three-week-1-rest'),
    // Week 2 is specified independently, so its workouts can differ from week 1.
    {...powerConditioning2, id: 'three-week-2-power-conditioning-2'},
    warmupOnly('three-week-2-warmup-1'),
    {...strength3, id: 'three-week-2-strength-3'},
    warmupOnly('three-week-2-warmup-2'),
    {...endurance, id: 'three-week-2-endurance'},
    warmupOnly('three-week-2-warmup-3'),
    restDay('three-week-2-rest')
];
