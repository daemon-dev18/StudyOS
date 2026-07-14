import "./DashboardPage.css";
import useTasks from "../../hooks/useTasks";
import useLocalStorage from "../../hooks/useLocalStorage";

function DashboardPage() {

  const {
    total,
    completed,
    pending,
    progress,
  } = useTasks();


  const [focusMinutes] =
    useLocalStorage(
      "focusMinutes",
      0
    );


  const [sessions] =
    useLocalStorage(
      "focusSessions",
      0
    );



  return (

    <div className="dashboard">


      <div className="welcome">

        <h1>
          Good Morning 👋
        </h1>

        <p>
          Let's make today productive.
        </p>

      </div>



      <div className="stats">


        <div className="stat-card">
          <h2>📚</h2>
          <p>Total Tasks</p>
          <strong>{total}</strong>
        </div>



        <div className="stat-card">
          <h2>✅</h2>
          <p>Completed</p>
          <strong>{completed}</strong>
        </div>



        <div className="stat-card">
          <h2>⏳</h2>
          <p>Pending</p>
          <strong>{pending}</strong>
        </div>



        <div className="stat-card">
          <h2>🔥</h2>
          <p>Progress</p>
          <strong>{progress}%</strong>
        </div>


      </div>



      <div className="stats">


        <div className="stat-card">

          <h2>
            🍅
          </h2>

          <p>
            Focus Minutes
          </p>

          <strong>
            {focusMinutes}
          </strong>

        </div>



        <div className="stat-card">

          <h2>
            🎯
          </h2>

          <p>
            Sessions
          </p>

          <strong>
            {sessions}
          </strong>

        </div>


      </div>




      <div className="focus-card">

        <h2>
          Today's Focus 🎯
        </h2>

        <p>
          Keep building consistency every day.
        </p>

      </div>



    </div>

  );

}


export default DashboardPage;