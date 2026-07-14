import "./TaskList.css";

function TaskList() {
  return (
    <div className="task-list">

      <h2>📋 Today's Tasks</h2>

      <div className="task">
        <input type="checkbox" />
        <span>Complete HTML Lecture</span>
      </div>

      <div className="task">
        <input type="checkbox" />
        <span>Practice CSS Flexbox</span>
      </div>

      <div className="task">
        <input type="checkbox" />
        <span>Push Project to GitHub</span>
      </div>

      <div className="task">
        <input type="checkbox" />
        <span>30 Minutes DSA</span>
      </div>

    </div>
  );
}

export default TaskList;