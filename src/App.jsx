import {useEffect, useMemo, useState} from 'react';
import {
    Activity,
    ArrowLeft,
    Check,
    Clock3,
    Dumbbell,
    Mountain,
    Play,
    Snowflake,
    Timer,
    ChevronDown
} from 'lucide-react';
import {programs} from './data/programs.js';

const STORAGE_KEY = 'snowbound-training-v1', MAX_TIMER_MS = 2 * 60 * 60 * 1000;

function normalizeHistory(value) {
    if (Array.isArray(value)) return value.filter(ts => Number.isFinite(ts));
    return Number.isFinite(value) ? [value] : []
}

function readSaved() {
    try {
        const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
        return {
            ...saved,
            completed: Object.fromEntries(Object.entries(saved.completed || {}).map(([key, value]) => [key, normalizeHistory(value)])),
            activeTimer: saved.activeTimer || null
        }
    } catch {
        return {completed: {}, activeTimer: null}
    }
}

function formatDuration(ms) {
    const t = Math.max(0, Math.floor(ms / 1000));
    return `${String(Math.floor(t / 3600)).padStart(2, '0')}:${String(Math.floor(t / 60) % 60).padStart(2, '0')}:${String(t % 60).padStart(2, '0')}`
}

function localDate(ts) {
    return new Intl.DateTimeFormat(undefined, {dateStyle: 'medium'}).format(new Date(ts))
}

export default function App() {
    const [selectedProgramId, setSelectedProgramId] = useState(null), [selectedWorkoutId, setSelectedWorkoutId] = useState(null), [expandedExercise, setExpandedExercise] = useState(null), [warmupOpen, setWarmupOpen] = useState(false), [exercisesOpen, setExercisesOpen] = useState(true), [showInfo, setShowInfo] = useState(false), [saved, setSaved] = useState(readSaved), [now, setNow] = useState(Date.now());
    const program = programs.find(p => p.id === selectedProgramId),
        workout = program?.workouts.find(w => w.id === selectedWorkoutId);
    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(saved))
        } catch {
        }
    }, [saved]);
    useEffect(() => {
        const id = setInterval(() => setNow(Date.now()), 1000);
        return () => clearInterval(id)
    }, []);
    useEffect(() => {
        if (saved.activeTimer && now - saved.activeTimer.startedAt >= MAX_TIMER_MS) finish(saved.activeTimer.workoutKey, saved.activeTimer.startedAt + MAX_TIMER_MS)
    }, [now]);

    function finish(key, ts = Date.now()) {
        setSaved(s => ({
            completed: {...s.completed, [key]: [...normalizeHistory(s.completed[key]), ts]},
            activeTimer: s.activeTimer?.workoutKey === key ? null : s.activeTimer
        }))
    }

    function start() {
        if (!workout || saved.activeTimer) return;
        setSaved(s => ({
            ...s,
            activeTimer: {
                workoutKey: `${selectedProgramId}:${workout.id}`,
                startedAt: Date.now(),
                programId: selectedProgramId,
                workoutId: workout.id
            }
        }))
    }

    function reset(programId = null) {
        setSelectedProgramId(programId);
        setSelectedWorkoutId(null);
        setExpandedExercise(null);
        setShowInfo(false)
    }

    const progress = useMemo(() => programs.map(p => ({
        ...p,
        done: p.workouts.filter(w => normalizeHistory(saved.completed[`${p.id}:${w.id}`]).length > 0).length
    })), [saved.completed]);
    const key = workout ? `${selectedProgramId}:${workout.id}` : null,
        history = key ? normalizeHistory(saved.completed[key]) : [], completed = history.length > 0,
        elapsed = saved.activeTimer ? Math.min(now - saved.activeTimer.startedAt, MAX_TIMER_MS) : 0;
    return <div className="app-shell">
        <header className="topbar">
            <button className="brand" onClick={() => reset()} aria-label="Snowbound home"><span
                className="brand-mark"><Mountain size={19}/></span><span>SNOWBOUND<span
                className="brand-sub">SKI PREP</span></span></button>
            <div className="top-meta"><span className="season-dot"/> YOUR SEASON STARTS HERE</div>
        </header>
        <main className="main-content">
            {!program && !showInfo && <>
                <section className="hero">
                    <div className="hero-copy">
                        <div className="eyebrow"><Snowflake size={14}/> THE MOUNTAIN IS CALLING</div>
                        <h1>Strong legs.<br/><span>Longer days.</span></h1><p>Get mountain-ready with a training plan
                        built for the way you ski.</p>
                        <div className="hero-stats">
                            <div><strong>02</strong><span>PLAN LENGTHS</span></div>
                            <i/>
                            <div><strong>02</strong><span>PLANS</span></div>
                            <i/>
                            <div><strong>01</strong><span>GOAL: SNOW</span></div>
                        </div>
                    </div>
                    <div className="hero-art" aria-hidden="true">
                        <div className="sun-disc"/>
                        <div className="peak peak-back"/>
                        <div className="peak peak-mid"/>
                        <div className="peak peak-front"/>
                        <div className="snow-line"/>
                        <span className="art-label">WINTER<br/>IS A STATE<br/>OF MIND<span className="art-mark">↗</span></span>
                        <div className="art-caption">46° 51′ N &nbsp; 09° 31′ E<br/>READY FOR THE ALPS</div>
                    </div>
                </section>
                <section className="program-section">
                    <div className="section-heading">
                        <div>
                            <div className="eyebrow">CHOOSE YOUR RHYTHM</div>
                            <h2>Your training plan</h2></div>
                        <div className="heading-note"><span className="note-dot"/> 6-DAY · 8 WEEKS &nbsp; / &nbsp; 3-DAY
                            · 2 WEEKS
                        </div>
                    </div>
                    <div className="program-grid">{progress.map((p, i) => <button
                        className={`program-card ${i === 0 ? 'featured' : ''}`} key={p.id} onClick={() => reset(p.id)}>
                        <div className="card-top"><span className="card-index">0{i + 1} / PROGRAM</span><span
                            className="card-arrow">↗</span></div>
                        <div className="card-icon">{i === 0 ? <Activity size={19}/> : <Dumbbell size={19}/>}</div>
                        <h3>{p.name}</h3><p>{p.summary}</p>
                        <div className="card-meta"><span><Clock3 size={14}/>{p.weeks}</span><span
                            className="level-pill">{p.level}</span></div>
                        <div className="card-progress"><span>{p.done} / {p.workouts.length} WORKOUTS DONE</span><span
                            className="progress-track"><i
                            style={{width: `${p.done / p.workouts.length * 100}%`}}/></span></div>
                    </button>)}</div>
                </section>
                <aside className="tip-strip"><span className="tip-icon"><Snowflake size={18}/></span><p><strong>A note
                    before you begin</strong><br/>Start at a level that feels right for you. Consistency beats intensity
                    every time.</p><span className="tip-scribble">✳</span></aside>
                <div className="home-info-link">
                    <button onClick={() => setShowInfo(true)}>ABOUT THIS PROGRAM &amp; ITS AUTHOR <span>↗</span>
                    </button>
                </div>
            </>}
            {showInfo && !program && <>
                <button className="back-link" onClick={() => setShowInfo(false)}><ArrowLeft size={16}/> BACK TO HOME
                </button>
                <section className="info-page">
                    <div className="eyebrow">SNOWBOUND · INFORMATION</div>
                    <h1>About this <span className="title-period">program.</span></h1><p className="info-intro">A little
                    context about the training content, its sources, and the person behind this project.</p>
                    <section className="info-card"><h2>About the training content</h2><p>This application is a personal
                        ski-preparation project. The current program and exercise descriptions are sample content
                        provided to demonstrate the app. They have not been independently validated as a personalized
                        training plan.</p><p>Before publishing or relying on the program, replace this text with an
                        accurate description of how the content was developed and reviewed.</p></section>
                    <section className="info-card"><h2>Sources and attribution</h2><p>Add the actual sources used to
                        create or verify the workouts and exercise instructions. Include the source title, author or
                        organization, link, and any required attribution or license information.</p><p>If an exercise
                        image is used, identify its creator and source, and confirm that you have permission to use it.
                        Do not list a source unless it was actually used.</p></section>
                    <section className="info-card"><h2>About the author</h2><p>This application was created by <strong>Natalia
                        Lelekova</strong> as a personal project to organize ski-preparation workouts.</p><p>You can add
                        a short biography, relevant experience, and a contact or profile link here.</p></section>
                    <section className="info-note"><strong>Important</strong><p>Training needs vary. The sample material
                        is general information and is not medical advice or a substitute for guidance from a qualified
                        professional. Review all content, sources, image rights, and claims before making the app
                        public.</p></section>
                </section>
            </>}
            {program && !workout && <>
                <button className="back-link" onClick={() => reset()}><ArrowLeft size={16}/> ALL PROGRAMS</button>
                <section className="plan-header">
                    <div>
                        <div className="eyebrow">YOUR TRAINING PLAN · {program.duration.toUpperCase()}</div>
                        <h1>{program.name}<span className="title-period">.</span></h1><p>{program.summary}</p></div>
                    <div className="plan-completion">
                        <strong>{progress.find(p => p.id === program.id)?.done ?? 0}<span>/{program.workouts.length}</span></strong><small>WORKOUTS
                        COMPLETE</small></div>
                </section>
                <section className="workout-list">
                    <div className="list-heading">
                        <span>TRAINING SCHEDULE</span><span>{program.workouts.length} SESSIONS</span></div>
                    {program.workouts.map(item => {
                        const done = normalizeHistory(saved.completed[`${program.id}:${item.id}`]);
                        return <button className="workout-row" key={item.id} onClick={() => {
                            setSelectedWorkoutId(item.id);
                            setExpandedExercise(null);
                            setWarmupOpen(Boolean(item.warmupOnly));
                            setExercisesOpen(true)
                        }}><span className="workout-day">{item.day}</span><span
                            className="workout-title">{item.title}<small>{item.warmupOnly ? 'Warm-up only' : `${item.focus} · ${item.exercises.length} exercises`}</small></span><span
                            className="workout-duration"><Clock3 size={14}/>{item.duration}</span>{done.length > 0 &&
                            <span className="done-chip"><Check size={13}/>{localDate(done.at(-1))}</span>}<span
                            className="row-arrow">↗</span></button>
                    })}</section>
            </>}
            {program && workout && <>
            <button className="back-link" onClick={() => {
                setSelectedWorkoutId(null);
                setExpandedExercise(null)
            }}><ArrowLeft size={16}/> BACK TO {program.shortName.toUpperCase()}</button>
            <div className="workout-layout">
                <section className="workout-main">
                    <div className="workout-hero">
                        <div className="eyebrow">{workout.day.toUpperCase()} · {workout.focus.toUpperCase()}</div>
                        <h1>{workout.title}<span className="title-period">.</span></h1>
                        <div className="workout-quick"><span><Clock3 size={15}/>{workout.duration}</span><span><Dumbbell
                            size={15}/>{workout.warmupOnly ? 'Warm-up only' : `${workout.warmup.length} warm-up + ${workout.exercises.length} exercises`}</span>
                        </div>
                        <p>{workout.description}</p>{completed &&
                        <div className="completion-banner"><span className="completion-check"><Check size={17}/></span>
                            <div className="completion-history">
                                <span>WORKOUT HISTORY</span>{history.slice().reverse().map((date, index) => <strong
                                key={`${date}-${index}`}>{localDate(date)}</strong>)}</div>
                        </div>}
                        <button className={`start-button ${saved.activeTimer ? 'is-disabled' : ''}`} onClick={start}
                                disabled={Boolean(saved.activeTimer)}><Play size={15}
                                                                            fill="currentColor"/>{saved.activeTimer ? 'A WORKOUT TIMER IS RUNNING' : 'START THIS WORKOUT'}<span>↗</span>
                        </button>
                        {saved.activeTimer &&
                            <p className="timer-hint">Stop your current timer before starting another workout.</p>}
                    </div>
                    <ExerciseSection title="Warm-up" label="GET READY" exercises={workout.warmup}
                                     expandedExercise={expandedExercise} onToggle={setExpandedExercise}
                                     sectionId="warmup" isOpen={warmupOpen}
                                     onSectionToggle={() => setWarmupOpen(open => !open)}/>{!workout.warmupOnly &&
                    <ExerciseSection exercises={workout.exercises} expandedExercise={expandedExercise}
                                     onToggle={setExpandedExercise} sectionId="exercise" isOpen={exercisesOpen}
                                     onSectionToggle={() => setExercisesOpen(open => !open)}/>}{workout.warmupOnly &&
                        <p className="warmup-only-note">This session is your shared warm-up. Move comfortably and finish
                            feeling
                            ready.</p>}</section><aside className="side-note"><div className="side-note-icon"><Snowflake size={17}/>
            </div>
            <div className="eyebrow">TRAIN SMART</div>
            <p>Quality reps matter more than speed. Take a breather whenever you need one.</p>
            <div className="side-line"/>
            <small>GOOD FORM<br/>FIRST. ALWAYS.</small></aside></div></>}
        </main>
        <footer className="footer"><span>SNOWBOUND <i>✳</i> BUILT FOR THE DAYS YOU REMEMBER.</span><span>MOVE WELL. SKI MORE.</span>
        </footer>
        {saved.activeTimer&&
        <div className="floating-timer" role="status" aria-label="Workout timer">
            <div className="timer-left"><span className="timer-icon"><Timer size={17}/></span><span><small>WORKOUT IN PROGRESS</small><strong>{formatDuration(elapsed)}</strong></span>
            </div>
            <span
                className="timer-workout">{programs.find(p => p.id === saved.activeTimer.programId)?.workouts.find(w => w.id === saved.activeTimer.workoutId)?.title ?? 'Workout'}</span>
            <button className="stop-button" onClick={() => finish(saved.activeTimer.workoutKey)}><span
                className="stop-square"/> FINISH <span className="stop-check"><Check size={14}/></span></button>
        </div>
        }
    </div>
}
function Detail({
    label, text
}){
    return <div className="detail-item">
        <div className="detail-label">{label}</div>
        <p>{text}</p></div>
}

function ExerciseSection({
    title = 'Exercises', label = 'THE WORK', exercises, expandedExercise, onToggle, sectionId, isOpen, onSectionToggle
}){
    const contentId = `${sectionId}-exercise-list`;
    return <section className="exercise-section" aria-label={title}>
        <div className="exercise-heading">
            <div>
                <div className="eyebrow">{label}</div>
                <h2 className="section-title">
                    <button className="section-toggle" aria-expanded={isOpen} aria-controls={contentId}
                            onClick={onSectionToggle}><span>{title} <span>({exercises.length})</span></span><ChevronDown
                        className={`section-chevron ${isOpen ? 'is-open' : ''}`} size={18}/></button>
                </h2>
            </div>
            <span className="expand-note">TAP AN EXERCISE TO LEARN MORE</span></div>
        {isOpen && <div className="exercise-list" id={contentId}>{exercises.map(ex => {
            const key = `${sectionId}:${ex.id}`, open = expandedExercise === key;
            return <article className={`exercise-card ${open ? 'open' : ''}`} key={key}>
                <button className="exercise-summary" aria-expanded={open} onClick={() => onToggle(open ? null : key)}>
                    <span
                        className="exercise-name">{ex.name}<small>{ex.focus || 'CONTROLLED MOVEMENT'}</small></span><span
                    className="exercise-prescription"><strong>{ex.sets}</strong><small>SETS</small></span><span
                    className="exercise-prescription reps"><strong>{ex.reps}</strong><small>REPS / TIME</small></span><span
                    className="expand-toggle"><ChevronDown size={17}/></span></button>
                {open && <div className="exercise-details">{ex.image &&
                    <img className="exercise-image" src={ex.image} alt={`${ex.name} demonstration`} loading="lazy"/>}
                    <div className="detail-grid"><Detail label="HOW TO DO IT" text={ex.instructions}/><Detail
                        label="PAY ATTENTION TO" text={ex.watch}/><Detail label="MAKE IT EASIER"
                                                                          text={ex.easier}/><Detail
                        label="MAKE IT HARDER" text={ex.harder}/></div>
                    <div className="snow-benefit"><span><Mountain size={16}/></span><p><small>WHY IT HELPS ON
                        SNOW</small>{ex.snow}</p></div>
                </div>}</article>
        })}</div>}</section>
}
