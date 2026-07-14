import "./App.css";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";

import DashboardPage from "./pages/Dashboard/DashboardPage";
import StudyPage from "./pages/Study/StudyPage";
import PlannerPage from "./pages/Planner/PlannerPage";
import TasksPage from "./pages/Tasks/TasksPage";
import NotesPage from "./pages/Notes/NotesPage";
import AnalyticsPage from "./pages/Analytics/AnalyticsPage";
import FocusPage from "./pages/Focus/FocusPage";
import AchievementsPage from "./pages/Achievements/AchievementsPage";
import SettingsPage from "./pages/Settings/SettingsPage";
import HistoryPage from "./pages/History/HistoryPage";
import TrinetraPage from "./pages/Trinetra/TrinetraPage";
import AIPlayground from "./pages/AIPlayground/AIPlayground";

function App() {


  return (

    <div className="app">


      <Sidebar />


      <div className="content">


        <Navbar />


        <Routes>


          <Route path="/" element={<DashboardPage />} />


          <Route path="/study" element={<StudyPage />} />


          <Route path="/planner" element={<PlannerPage />} />


          <Route path="/tasks" element={<TasksPage />} />


          <Route path="/notes" element={<NotesPage />} />


          <Route path="/analytics" element={<AnalyticsPage />} />


          <Route path="/focus" element={<FocusPage />} />


          <Route path="/history" element={<HistoryPage />} />

<Route 
path="/trinetra" 
element={<TrinetraPage />} 
/>
          <Route 
            path="/achievements" 
            element={<AchievementsPage />} 
          />


          <Route path="/settings" element={<SettingsPage />} />

<Route
  path="/ai-playground"
  element={<AIPlayground />}
/>
        </Routes>


      </div>


    </div>

  );

}


export default App;