import "./Dashboard.css";
import StatsCard from "../StatsCard/StatsCard";

function Dashboard() {
  return (
    <div className="dashboard">

      <div className="welcome">
        <h1>Good Morning 👋</h1>
        <p>Consistency beats motivation. Keep going.</p>
      </div>

      <div className="cards">

        <StatsCard
          icon="🔥"
          title="Study Streak"
          value="0 Days"
          subtitle="+0 from yesterday"
        />

        <StatsCard
          icon="⚡"
          title="XP"
          value="0 XP"
          subtitle="Level 1"
        />

        <StatsCard
          icon="🎯"
          title="Today's Goal"
          value="0%"
          subtitle="No progress yet"
        />

      </div>

      <div className="dashboard-bottom">

        <div className="focus-card">
          <h2>🚀 Quick Start</h2>
          <p>
            Start a focus session and build today's streak.
          </p>

          <button>Start Focus Session</button>
        </div>

        <div className="focus-card">
          <h2>📅 Today's Tasks</h2>

          <p>☐ HTML Practice</p>
          <p>☐ CSS Practice</p>
          <p>☐ React Revision</p>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;