import "./StudyPage.css";
function StudyPage() {
  return (
    <div className="dashboard">

      <div className="welcome">
        <h1>📚 Study Hub</h1>
        <p>Select a subject and start learning.</p>
      </div>

      <div className="cards">

        <div className="card">
          <h3>🌐 HTML</h3>
          <h2>0%</h2>
          <p>Progress</p>
        </div>

        <div className="card">
          <h3>🎨 CSS</h3>
          <h2>0%</h2>
          <p>Progress</p>
        </div>

        <div className="card">
          <h3>⚡ JavaScript</h3>
          <h2>0%</h2>
          <p>Progress</p>
        </div>

        <div className="card">
          <h3>⚛ React</h3>
          <h2>0%</h2>
          <p>Progress</p>
        </div>

        <div className="card">
          <h3>💻 DSA</h3>
          <h2>0%</h2>
          <p>Progress</p>
        </div>

        <div className="card">
          <h3>🚀 Projects</h3>
          <h2>0</h2>
          <p>Completed</p>
        </div>

      </div>

    </div>
  );
}

export default StudyPage;