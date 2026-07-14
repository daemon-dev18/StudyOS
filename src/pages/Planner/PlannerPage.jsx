import { useState } from "react";
import "./PlannerPage.css";
import useLocalStorage from "../../hooks/useLocalStorage";

function PlannerPage() {

  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");

  const [plans, setPlans] = useLocalStorage(
    "plans",
    []
  );



  function addPlan() {

    if (
      title.trim() === "" ||
      time === ""
    ) return;


    const newPlan = {

      id: Date.now(),

      title,

      time,

      completed:false,

    };


    setPlans([
      ...plans,
      newPlan
    ]);


    setTitle("");
    setTime("");

  }




  function deletePlan(id){

    setPlans(
      plans.filter(
        (plan)=>
          plan.id !== id
      )
    );

  }




  function togglePlan(id){

    setPlans(

      plans.map((plan)=>

        plan.id === id

        ? {
            ...plan,
            completed:
              !plan.completed,
          }

        : plan

      )

    );

  }




  return (

    <div className="planner-page">


      <div className="welcome">

        <h1>
          📅 Planner
        </h1>

        <p>
          Plan your day and stay consistent.
        </p>

      </div>




      <div className="planner-card">


        <div className="planner-input">


          <input

            placeholder="Activity..."

            value={title}

            onChange={(e)=>
              setTitle(e.target.value)
            }

          />


          <input

            type="time"

            value={time}

            onChange={(e)=>
              setTime(e.target.value)
            }

          />


          <button
            onClick={addPlan}
          >
            Add
          </button>


        </div>





        <div className="plan-list">


        {
          plans.length === 0 ? (

            <p>
              No plans yet 🚀
            </p>

          ) : (

            plans.map((plan)=>(


              <div

                className={
                  plan.completed
                  ? "plan-item completed-plan"
                  : "plan-item"
                }

                key={plan.id}

              >


                <input

                  type="checkbox"

                  checked={plan.completed}

                  onChange={() =>
                    togglePlan(plan.id)
                  }

                />



                <span>
                  ⏰ {plan.time}
                </span>


                <strong>
                  {plan.title}
                </strong>



                <button

                  onClick={() =>
                    deletePlan(plan.id)
                  }

                >
                  ❌
                </button>


              </div>


            ))

          )
        }


        </div>


      </div>


    </div>

  );

}

export default PlannerPage;