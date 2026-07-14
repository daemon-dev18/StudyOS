import { useRef, useState } from "react";

const useCamera = () => {
  const videoRef = useRef(null);

  const [cameraOn, setCameraOn] = useState(false);
  const [error, setError] = useState(null);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "user",
          width: { ideal: 1280 },
          height: { ideal: 720 },
        },
        audio: false,
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }

      setCameraOn(true);
      setError(null);
    } catch (err) {
      setError("Unable to access camera.");
      console.error(err);
    }
  };

  const stopCamera = () => {
    if (!videoRef.current?.srcObject) return;

    videoRef.current.srcObject
      .getTracks()
      .forEach((track) => track.stop());

    videoRef.current.srcObject = null;

    setCameraOn(false);
  };

  return {
    videoRef,
    cameraOn,
    error,
    startCamera,
    stopCamera,
  };
};

export default useCamera;