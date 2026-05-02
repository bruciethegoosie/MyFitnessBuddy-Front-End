import { useMemo, useState } from "react";

const pages = [
  { id: "dashboard", label: "Dashboard", short: "Home", icon: "dashboard" },
  { id: "log", label: "Log Workout", short: "Log", icon: "add_box" },
  { id: "history", label: "History", short: "History", icon: "history" },
  { id: "progress", label: "Progress", short: "Progress", icon: "insights" },
  { id: "friends", label: "Friends", short: "Social", icon: "group" },
  { id: "shared", label: "Shared Plans", short: "Plans", icon: "handshake" }
];

const workouts = [
  { title: "Heavy Leg Day", time: "Today, 08:30 AM", detail: "Squat, Lunges, Leg Extension", duration: "75 min" },
  { title: "Upper Body Push", time: "Oct 24, 06:15 PM", detail: "Bench Press, Overhead Press, Dips", duration: "62 min" },
  { title: "Active Recovery Flow", time: "Oct 22, 07:00 AM", detail: "Stretching, Light Yoga, Foam Rolling", duration: "45 min" }
];

const historyItems = [
  {
    title: "Power Lifting Session",
    tag: "Leg Day",
    time: "Today at 7:30 AM - 1h 15m",
    chips: ["Squats (5x5)", "Deadlift (3x3)", "+3 more"]
  },
  {
    title: "Morning Endurance Run",
    tag: "Cardio",
    time: "Oct 22 at 6:45 AM - 45m",
    chips: ["Distance: 5.2 miles", "Avg Pace: 8'42\""]
  },
  {
    title: "Upper Body Hypertrophy",
    tag: "Push",
    time: "Oct 20 at 5:15 PM - 1h 05m",
    chips: ["Bench Press (4x10)", "Lateral Raises (3x15)", "+5 more"]
  }
];

const imageUrl =
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=80";

function Icon({ children, filled = false }) {
  return (
    <span className="material-symbols-outlined" style={{ fontVariationSettings: filled ? "'FILL' 1" : undefined }}>
      {children}
    </span>
  );
}

function App() {
  const [activePage, setActivePage] = useState("dashboard");
  const CurrentPage = useMemo(() => {
    return {
      dashboard: Dashboard,
      log: LogWorkout,
      history: History,
      progress: Progress,
      friends: Friends,
      shared: SharedPlans
    }[activePage];
  }, [activePage]);

  return (
    <div className="app">
      <TopBar />
      <SideNav activePage={activePage} onNavigate={setActivePage} />
      <main className="main-canvas">
        <CurrentPage onNavigate={setActivePage} />
      </main>
      <BottomNav activePage={activePage} onNavigate={setActivePage} />
    </div>
  );
}

function TopBar() {
  return (
    <header className="topbar">
      <div className="brand">MyFitnessBuddy</div>
      <div className="top-actions">
        <button className="icon-button" aria-label="Notifications">
          <Icon>notifications</Icon>
        </button>
        <button className="icon-button" aria-label="Account">
          <Icon>account_circle</Icon>
        </button>
      </div>
    </header>
  );
}

function SideNav({ activePage, onNavigate }) {
  return (
    <aside className="sidenav">
      <div className="side-brand">
        <h2>MyFitnessBuddy</h2>
        <p>Collaborative Clarity</p>
      </div>
      <nav>
        {pages.map((page) => (
          <button
            key={page.id}
            className={`nav-link ${activePage === page.id ? "active" : ""}`}
            onClick={() => onNavigate(page.id)}
          >
            <Icon>{page.icon}</Icon>
            <span>{page.label}</span>
          </button>
        ))}
      </nav>
      <button className="primary-button session-button" onClick={() => onNavigate("log")}>
        Start New Session
      </button>
    </aside>
  );
}

function BottomNav({ activePage, onNavigate }) {
  return (
    <nav className="bottom-nav">
      {pages.slice(0, 5).map((page) => (
        <button
          key={page.id}
          className={activePage === page.id ? "active" : ""}
          onClick={() => onNavigate(page.id)}
        >
          <Icon>{page.id === "dashboard" ? "home" : page.icon}</Icon>
          <span>{page.short}</span>
        </button>
      ))}
    </nav>
  );
}

function Dashboard({ onNavigate }) {
  return (
    <>
      <section className="page-header split">
        <div>
          <h1>Welcome back, CPSC 349!</h1>
          <p>
            You have <strong>3 workouts completed</strong> this week. Keep the momentum going with your team goal.
          </p>
        </div>
        <div className="button-row">
          <button className="primary-button" onClick={() => onNavigate("log")}>
            <Icon>add</Icon>Log New Workout
          </button>
          <button className="secondary-button" onClick={() => onNavigate("progress")}>
            <Icon>trending_up</Icon>View Progress
          </button>
        </div>
      </section>

      <section className="dashboard-grid">
        <div className="stats-grid">
          <StatCard icon="fitness_center" label="Total Weight" value="12,450" unit="lbs" note="+12%" />
          <StatCard icon="repeat" label="Most Frequent" value="Bench Press" note="14 sets this week" />
          <StatCard icon="emoji_events" label="PR of the Week" value="315" unit="lbs" note="Squat record" />
        </div>

        <div className="leaderboard-card">
          <h2>Community Leaderboard</h2>
          <p>Your team "Alpha Squat" is currently in 2nd place. Only 150 points to catch up.</p>
          {["The Gain Train - 1,420 pts", "Alpha Squat (You) - 1,270 pts"].map((team, index) => (
            <div className="leader-row" key={team}>
              <span>{index + 1}</span>
              <p>{team}</p>
            </div>
          ))}
        </div>

        <section className="card recent-card">
          <div className="card-title-row">
            <h2>Recent Sessions</h2>
            <button className="text-button" onClick={() => onNavigate("history")}>View All History</button>
          </div>
          {workouts.map((workout) => (
            <WorkoutRow key={workout.title} {...workout} />
          ))}
        </section>
      </section>

      <HeroBanner />
    </>
  );
}

function StatCard({ icon, label, value, unit, note }) {
  return (
    <article className="card stat-card">
      <div className="stat-top">
        <span className="stat-icon"><Icon>{icon}</Icon></span>
        <span>{note}</span>
      </div>
      <p className="eyebrow">{label}</p>
      <h2>{value} {unit && <small>{unit}</small>}</h2>
    </article>
  );
}

function WorkoutRow({ title, time, detail, duration }) {
  return (
    <article className="workout-row">
      <div className="row-icon"><Icon>calendar_today</Icon></div>
      <div>
        <div className="row-heading">
          <h3>{title}</h3>
          <span>{time}</span>
        </div>
        <p>{detail} - 5 Exercises</p>
      </div>
      <strong>{duration}</strong>
    </article>
  );
}

function HeroBanner() {
  return (
    <section className="hero-banner">
      <img src={imageUrl} alt="Modern gym interior" />
      <div>
        <h2>Consistency is King</h2>
        <p>Unlock your next achievement by completing 2 more sessions this week.</p>
        <button>Join Weekend Challenge</button>
      </div>
    </section>
  );
}

function LogWorkout() {
  return (
    <div className="narrow-page">
      <section className="page-header split">
        <div>
          <h1>Log Workout</h1>
          <p>Keep the momentum going. Record your progress.</p>
        </div>
        <button className="primary-button">Save Workout</button>
      </section>

      <section className="log-meta">
        <div className="card form-card">
          <label>Workout Title<input placeholder="Morning Push Day" /></label>
          <div className="form-grid">
            <label>Date<input type="date" defaultValue="2026-05-02" /></label>
            <label>Duration<input placeholder="60 mins" /></label>
          </div>
        </div>
        <div className="streak-card">
          <Icon>trending_up</Icon>
          <h2>Weekly Streak</h2>
          <strong>4 Days</strong>
        </div>
      </section>

      <ExerciseCard name="Bench Press (Barbell)" rows={[["12", "135"], ["10", "155"]]} />
      <ExerciseCard name="Squat (High Bar)" rows={[["8", "225"]]} />

      <button className="add-exercise"><Icon>add_circle</Icon>Add Exercise</button>

      <section className="summary-grid">
        <div className="card form-card">
          <label>Workout Notes<textarea rows="4" placeholder="How did it feel?" /></label>
        </div>
        <div className="summary-card">
          <p className="eyebrow">Summary</p>
          <div><span>Total Sets</span><strong>3 Sets</strong></div>
          <div><span>Estimated Volume</span><strong>4,580 lbs</strong></div>
          <button className="primary-button">Complete & Save</button>
        </div>
      </section>
    </div>
  );
}

function ExerciseCard({ name, rows }) {
  return (
    <section className="card exercise-card">
      <div className="exercise-head">
        <div><Icon>fitness_center</Icon><select defaultValue={name}><option>{name}</option><option>Incline Dumbbell Press</option><option>Deadlift</option></select></div>
        <button className="icon-button"><Icon>delete</Icon></button>
      </div>
      <table>
        <thead><tr><th>Set</th><th>Reps</th><th>Weight</th><th>Action</th></tr></thead>
        <tbody>
          {rows.map(([reps, weight], index) => (
            <tr key={`${name}-${index}`}>
              <td>{index + 1}</td>
              <td><input type="number" defaultValue={reps} /></td>
              <td><input type="number" defaultValue={weight} /></td>
              <td><button className="icon-button"><Icon>close</Icon></button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="text-button"><Icon>add</Icon>Add Set</button>
    </section>
  );
}

function History() {
  return (
    <>
      <section className="page-header split">
        <div>
          <h1>Workout History</h1>
          <p>Your journey documented, set by set.</p>
        </div>
        <div className="search-box"><Icon>search</Icon><input placeholder="Search exercises..." /></div>
      </section>
      <section className="history-layout">
        <aside className="card timeline-card">
          <h2>Timeline</h2>
          {["May 2026", "April 2026", "March 2026", "February 2026"].map((month, index) => (
            <button className={index === 0 ? "selected" : ""} key={month}>{month}</button>
          ))}
        </aside>
        <div className="history-list">
          <p className="date-divider">Saturday, May 2</p>
          {historyItems.map((item) => <HistoryCard key={item.title} item={item} />)}
        </div>
      </section>
    </>
  );
}

function HistoryCard({ item }) {
  return (
    <article className="card history-card">
      <img src={imageUrl} alt="" />
      <div>
        <div className="row-heading">
          <h2>{item.title}</h2>
          <span className="pill">{item.tag}</span>
        </div>
        <p><Icon>schedule</Icon>{item.time}</p>
        <div className="chip-row">
          {item.chips.map((chip) => <span key={chip}>{chip}</span>)}
        </div>
        <button className="text-button">View Details <Icon>arrow_forward</Icon></button>
      </div>
    </article>
  );
}

function Progress() {
  const heat = ["light", "mid", "dark", "", "light", "mid", "dark", "mid", "", "dark", "light", "", "mid", "dark", "mid", "dark", "", "light", "light", "mid", "dark"];
  return (
    <>
      <section className="page-header split">
        <div><h1>Progress Analytics</h1><p>Analyze your performance trends and strength milestones.</p></div>
        <label className="select-label">Select Exercise<select defaultValue="Bench Press"><option>Bench Press</option><option>Squat</option><option>Deadlift</option></select></label>
      </section>
      <section className="stats-grid three">
        <StatCard icon="fitness_center" label="Estimated 1RM" value="225" unit="lbs" note="+5.2%" />
        <StatCard icon="stacks" label="Total Volume" value="12,450" unit="lbs" note="+840 lbs" />
        <StatCard icon="event_repeat" label="Frequency" value="4.2" unit="/ week" note="steady" />
      </section>
      <section className="card chart-card">
        <div className="card-title-row"><h2>Weight Progress Over Time</h2><span className="pill">1M</span></div>
        <svg viewBox="0 0 800 320" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#2563eb" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,280 Q100,240 200,260 T400,180 T600,120 T800,80" fill="transparent" stroke="#2563eb" strokeLinecap="round" strokeWidth="4" />
          <path d="M0,280 Q100,240 200,260 T400,180 T600,120 T800,80 L800,320 L0,320 Z" fill="url(#lineGradient)" />
        </svg>
      </section>
      <section className="insight-grid">
        <div className="card"><h2>Workout Frequency</h2><div className="heatmap">{heat.map((level, index) => <span className={level} key={index} />)}</div></div>
        <div className="card split-focus"><h2>Muscle Focus</h2><div className="donut">80%</div><ul><li>Push 40%</li><li>Pull 25%</li><li>Legs 15%</li><li>Other 20%</li></ul></div>
      </section>
    </>
  );
}

function Friends() {
  return (
    <>
      <section className="page-header split">
        <div><h1>Social Arena</h1><p>Compare progress and stay motivated with your circle.</p></div>
        <div className="search-box"><Icon>search</Icon><input placeholder="Add friend by username or email..." /></div>
      </section>
      <section className="friends-grid">
        <aside className="card friend-list">
          <h2>Active Friends</h2>
          {["Dario Bravo", "Bruce Le", "Bad Bunny"].map((name, index) => (
            <button className={index === 0 ? "selected" : ""} key={name}><Icon>account_circle</Icon>{name}</button>
          ))}
        </aside>
        <div className="compare-area">
          <div className="compare-cards">
            <CompareCard name="Dario Bravo" consistency="94%" level="Elite" />
            <CompareCard name="Bruce Le" consistency="88%" level="Pro" />
          </div>
          <section className="card bar-card">
            <h2>Activity Intensity</h2>
            <div className="bars">{[40, 55, 45, 70, 80, 60, 50, 90, 40, 65, 75, 55].map((height, index) => <span style={{ height: `${height}%` }} key={index} />)}</div>
          </section>
          <section className="record-grid">
            <Record lift="Back Squat" you="315" friend="295" result="+20 lbs Advantage" />
            <Record lift="Deadlift" you="405" friend="425" result="-20 lbs Behind" />
            <Record lift="Bench Press" you="225" friend="225" result="Perfectly Matched" />
          </section>
        </div>
      </section>
    </>
  );
}

function CompareCard({ name, consistency, level }) {
  return (
    <article className="card compare-card">
      <div><p className="eyebrow">{name}</p><h2>{consistency}</h2><span>Consistency</span></div>
      <div><p className="eyebrow">Level</p><h2>{level}</h2></div>
    </article>
  );
}

function Record({ lift, you, friend, result }) {
  return (
    <article className="card record-card">
      <p className="eyebrow">{lift}</p>
      <div><strong>{you}</strong><span>{friend}</span></div>
      <p>{result}</p>
    </article>
  );
}

function SharedPlans() {
  return (
    <>
      <section className="page-header split">
        <div><h1>Shared Workout Plan</h1><p>Collaborate on your next session with your training partner.</p></div>
        <button className="primary-button"><Icon>send</Icon>Send Invite</button>
      </section>
      <section className="shared-grid">
        <div className="card plan-card">
          <div className="card-title-row"><h2>Push Day Plan</h2><span className="pill">Shared with Dario</span></div>
          {["Bench Press - 4 sets x 8 reps", "Overhead Press - 3 sets x 10 reps", "Tricep Dips - 3 sets x 12 reps", "Chest Fly - 3 sets x 15 reps"].map((item) => (
            <div className="plan-row" key={item}><Icon>drag_indicator</Icon><span>{item}</span><button className="icon-button"><Icon>edit</Icon></button></div>
          ))}
          <button className="add-exercise small"><Icon>add_circle</Icon>Add Exercise</button>
        </div>
        <aside className="card invite-card">
          <h2>Collaboration</h2>
          <p>Dario Bravo accepted the invite and can edit this plan.</p>
          <div><span>Last edit</span><strong>Bench Press weight updated</strong></div>
          <div><span>Status</span><strong>Ready for Saturday</strong></div>
        </aside>
      </section>
    </>
  );
}

export default App;
