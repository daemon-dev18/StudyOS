import { useEffect, useState } from "react";
import { createFaceDetector } from "../ai/detectors/FaceDetector";

const useFaceDetection = (videoRef, cameraOn) => {

  const [faceDetected, setFaceDetected] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    if (!cameraOn) return;

    let detector;

    let animationFrameId;

    async function init() {

      detector = await createFaceDetector();

      setLoading(false);

      detect();

    }

    function detect() {

      const video = videoRef.current;

      if (
        detector &&
        video &&
        video.readyState >= 2
      ) {

        const results = detector.detectForVideo(
          video,
          performance.now()
        );

        setFaceDetected(
          results.faceLandmarks.length > 0
        );

      }

      animationFrameId =
        requestAnimationFrame(detect);

    }

    init();

    return () => {

      cancelAnimationFrame(animationFrameId);

    };

  }, [cameraOn]);

  return {

    faceDetected,

    loading,

  };

};

export default useFaceDetection;