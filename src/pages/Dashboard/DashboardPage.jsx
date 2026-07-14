import "./DashboardPage.css";

import StatCard from "../../components/cards/StatCard";
import GoalCard from "../../components/cards/GoalCard";
import ScheduleCard from "../../components/cards/ScheduleCard";
import QuickActions from "../../components/cards/QuickActions";
import FocusChart from "../../components/cards/FocusChart";
import StreakCard from "../../components/cards/StreakCard";

import useTasks from "../../hooks/useTasks";
import useLocalStorage from "../../hooks/useLocalStorage";


function DashboardPage() {


  const {
    total,
    completed,
    progress
  } = useTasks();



  const [focusMinutes] = useLocalStorage(
    "focusMinutes",
    0
  );



  return (

    <div className="dashboard">


      <section className="hero">

        <h1>
          Good Evening 👋
        </h1>


        <p>
          Ready to conquer your goals today?
        </p>


      </section>





      <section className="mode-grid">


        <div className="mode-card dhyan">


          <h2>
            🧘 ध्यान Mode
          </h2>


          <p>
            Deep focus without distractions.
          </p>


          <button>
            Start Session
          </button>


        </div>





        <div className="mode-card trinetra">


          <h2>
            👁️ त्रिनेत्र Mode
          </h2>


          <p>
            Camera based focus tracking.
          </p>


          <button>
            Start Camera
          </button>


        </div>


      </section>







      <section className="progress-card">


        <h2>
          Today's Progress
        </h2>



        <div className="progress-bar">

          <div
            style={{
              width: `${progress}%`
            }}
          ></div>


        </div>



        <p>
          {progress}% completed
        </p>



      </section>







      <section className="stats-grid">



        <StatCard

          icon="📚"

          title="Focus Time"

          value={`${focusMinutes} min`}

        />




        <StatCard

          icon="✅"

          title="Tasks"

          value={`${completed}/${total}`}

        />



      </section>





      <StreakCard />



      <GoalCard />



      <ScheduleCard />



      <QuickActions />



      <FocusChart />



    </div>

  );


}


export default DashboardPage;