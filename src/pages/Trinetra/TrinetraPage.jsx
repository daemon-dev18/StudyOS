import "./TrinetraPage.css";

import useCamera from "../../hooks/useCamera";
import useSessionTimer from "../../hooks/useSessionTimer";

function TrinetraPage() {

  const {
    videoRef,
    cameraOn,
    error,
    startCamera,
    stopCamera,
  } = useCamera();

  const {
    running,
    formattedTime,
    startSession,
    pauseSession,
    resetSession,
  } = useSessionTimer();

  function handleStart() {
    startCamera();
    startSession();
  }

  function handleStop() {
    stopCamera();
    resetSession();
  }

  function handlePause() {
    pauseSession();
  }

  return (
    <div className="trinetra-page">

      <div className="trinetra-container">

        <h1>👁️ TRINETRA</h1>

        <p>AI Powered Smart Study Tracking</p>

        <div className="camera-box">

          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="camera-video"
          />

          {!cameraOn && (
            <div className="camera-placeholder">
              Camera Off
            </div>
          )}

        </div>

        <div className="tracking-status">

          <h2>Study Session</h2>

          <h1>{formattedTime}</h1>

          <p>
            {running ? "🟢 Session Running" : "🔴 Session Stopped"}
          </p>

          <p>
            Camera : {cameraOn ? "🟢 ON" : "🔴 OFF"}
          </p>

          <p>
            Focus Score : 100%
          </p>

          <p>
            Distractions : 0
          </p>

        </div>

        <div className="control-buttons">

          {!cameraOn ? (

            <button onClick={handleStart}>
              Start Session
            </button>

          ) : (

            <>
              <button onClick={handlePause}>
                Pause Timer
              </button>

              <button onClick={handleStop}>
                Stop Session
              </button>
            </>

          )}

        </div>

        {error && (
          <p style={{ color: "red" }}>
            {error}
          </p>
        )}

      </div>

    </div>
  );

}

export default TrinetraPage;