import { useEffect, useState } from "react";
import "./FocusPage.css";
import useLocalStorage from "../../hooks/useLocalStorage";

function FocusPage() {

  const WORK_TIME = 25 * 60;
  const BREAK_TIME = 5 * 60;


  const [time, setTime] = useState(WORK_TIME);

  const [running, setRunning] = useState(false);

  const [mode, setMode] = useState("Focus");

  const [sessions, setSessions] = useLocalStorage(
    "focusSessions",
    0
  );


  const [focusMinutes, setFocusMinutes] =
    useLocalStorage(
      "focusMinutes",
      0
    );



  useEffect(() => {

    let timer;


    if (running) {

      timer = setInterval(() => {


        setTime((prev) => {


          if (prev <= 1) {


            if (mode === "Focus") {

              setSessions(
                sessions + 1
              );

              setFocusMinutes(
                focusMinutes + 25
              );


              setMode("Break");

              return BREAK_TIME;

            }


            else {

              setMode("Focus");

              return WORK_TIME;

            }


          }


          return prev - 1;


        });


      },1000);

    }


    return () =>
      clearInterval(timer);


  }, [
    running,
    mode
  ]);




  function resetTimer(){

    setRunning(false);

    setMode("Focus");

    setTime(WORK_TIME);

  }




  const minutes =
    Math.floor(time / 60);


  const seconds =
    time % 60;




  return (

    <div className="focus-page">


      <h1>
        🍅 Focus Mode
      </h1>


      <div className="timer-card">


        <h3>
          {mode}
        </h3>



        <h2>

          {minutes
          .toString()
          .padStart(2,"0")}

          :

          {seconds
          .toString()
          .padStart(2,"0")}

        </h2>



        <p>
          Sessions:
          {" "}
          {sessions}
        </p>



        <p>
          Focus Minutes:
          {" "}
          {focusMinutes}
        </p>




        <div className="timer-buttons">


          <button
            onClick={() =>
              setRunning(true)
            }
          >
            ▶ Start
          </button>



          <button
            onClick={() =>
              setRunning(false)
            }
          >
            ⏸ Pause
          </button>



          <button
            onClick={resetTimer}
          >
            🔄 Reset
          </button>


        </div>


      </div>


    </div>

  );

}

export default FocusPage;