import "./AchievementsPage.css";

function AchievementsPage() {
  return (
    <div className="dashboard">

      <div className="welcome">
        <h1>🏆 Achievements</h1>
        <p>Unlock rewards by staying consistent.</p>
      </div>

      <div className="cards">

        <div className="card">
          <h3>🔥 First Streak</h3>
          <h2>🔒</h2>
          <p>Study for 3 days</p>
        </div>

        <div className="card">
          <h3>⚡ Focus Master</h3>
          <h2>🔒</h2>
          <p>Complete 10 focus sessions</p>
        </div>

        <div className="card">
          <h3>📚 Study Beast</h3>
          <h2>🔒</h2>
          <p>Study 100 hours</p>
        </div>

      </div>

    </div>
  );
}

export default AchievementsPage;