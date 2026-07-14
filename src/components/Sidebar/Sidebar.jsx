import "./Sidebar.css";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const navClass = ({ isActive }) =>
    isActive ? "menu-item active" : "menu-item";

  return (
    <aside className="sidebar">
      <div className="logo">StudyOS</div>

      <nav>
        <NavLink to="/" end className={navClass}>
          🏠 Dashboard
        </NavLink>

        <NavLink to="/study" className={navClass}>
          📚 Study
        </NavLink>

        <NavLink to="/planner" className={navClass}>
          📅 Planner
        </NavLink>

        <NavLink to="/tasks" className={navClass}>
          ✅ Tasks
        </NavLink>

        <NavLink to="/notes" className={navClass}>
          📝 Notes
        </NavLink>

        <NavLink to="/analytics" className={navClass}>
          📊 Analytics
        </NavLink>

        <NavLink to="/focus" className={navClass}>
          🎵 Focus
        </NavLink>

        <NavLink to="/achievements" className={navClass}>
          🏆 Achievements
        </NavLink>

        <NavLink to="/settings" className={navClass}>
          ⚙️ Settings
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;