import "./SettingsPage.css";
import useTheme from "../../hooks/useTheme";


function SettingsPage() {


  const {
    theme,
    setTheme,
  } = useTheme();



  return (

    <div className="settings-page">


      <div className="welcome">

        <h1>
          ⚙️ Settings
        </h1>

        <p>
          Customize your StudyOS experience.
        </p>

      </div>




      <div className="settings-card">


        <h2>
          Theme
        </h2>



        <div className="theme-buttons">


          <button

            className={
              theme === "dark"
              ? "active"
              : ""
            }

            onClick={() =>
              setTheme("dark")
            }

          >

            🌙 Dark

          </button>




          <button

            className={
              theme === "light"
              ? "active"
              : ""
            }

            onClick={() =>
              setTheme("light")
            }

          >

            ☀️ Light

          </button>



        </div>


      </div>


    </div>

  );

}


export default SettingsPage;