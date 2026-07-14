import "./AnalyticsPage.css";

import useTasks from "../../hooks/useTasks";
import useLocalStorage from "../../hooks/useLocalStorage";


function AnalyticsPage() {


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


  const [plans] =
    useLocalStorage(
      "plans",
      []
    );



  const completedPlans =
    plans.filter(
      (plan) =>
        plan.completed
    ).length;



  return (

    <div className="analytics-page">


      <div className="welcome">

        <h1>
          📊 Analytics
        </h1>

        <p>
          Track your productivity.
        </p>

      </div>




      <div className="analytics-grid">


        <div className="analytics-card">

          <h2>
            📚
          </h2>

          <p>
            Total Tasks
          </p>

          <strong>
            {total}
          </strong>

        </div>




        <div className="analytics-card">

          <h2>
            ✅
          </h2>

          <p>
            Completed
          </p>

          <strong>
            {completed}
          </strong>

        </div>




        <div className="analytics-card">

          <h2>
            ⏳
          </h2>

          <p>
            Pending
          </p>

          <strong>
            {pending}
          </strong>

        </div>




        <div className="analytics-card">

          <h2>
            🔥
          </h2>

          <p>
            Progress
          </p>

          <strong>
            {progress}%
          </strong>

        </div>




        <div className="analytics-card">

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




        <div className="analytics-card">

          <h2>
            📅
          </h2>

          <p>
            Completed Plans
          </p>

          <strong>
            {completedPlans}
          </strong>

        </div>



      </div>



    </div>

  );

}


export default AnalyticsPage;