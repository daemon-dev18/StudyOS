import "./AIPlayground.css";

import useCamera from "../../hooks/useCamera";
import useFaceDetection from "../../hooks/useFaceDetection";

const AIPlayground = () => {

  const {
    videoRef,
    cameraOn,
    startCamera,
    stopCamera,
    error,
  } = useCamera();

  const {
    faceDetected,
    loading,
  } = useFaceDetection(
    videoRef,
    cameraOn
  );

  return (

    <div className="ai-playground">

      <h1>🧠 TRINETRA AI Playground</h1>

      <p>
        Internal AI Testing Environment
      </p>

      <div className="camera-container">

        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="camera-video"
        />

      </div>

      <div className="status-panel">

        <div className="status-card">

          <h3>Camera</h3>

          <p>

            {cameraOn
              ? "🟢 ON"
              : "🔴 OFF"}

          </p>

        </div>

        <div className="status-card">

          <h3>Face</h3>

          <p>

            {
              loading
                ? "⏳ Loading..."
                : faceDetected
                ? "🟢 Face Detected"
                : "🔴 No Face"
            }

          </p>

        </div>

        <div className="status-card">

          <h3>FPS</h3>

          <p>

            --

          </p>

        </div>

      </div>

      <div className="control-buttons">

        {

          cameraOn ?

          <button onClick={stopCamera}>

            Stop Camera

          </button>

          :

          <button onClick={startCamera}>

            Start Camera

          </button>

        }

      </div>

      {

        error &&

        <p
          style={{
            color:"red",
            marginTop:"20px"
          }}
        >

          {error}

        </p>

      }

    </div>

  );

};

export default AIPlayground;