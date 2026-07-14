import { useEffect, useState } from "react";

const useSessionTimer = () => {

  const [running, setRunning] = useState(false);

  const [seconds, setSeconds] = useState(0);

  useEffect(() => {

    if (!running) return;

    const interval = setInterval(() => {

      setSeconds((prev) => prev + 1);

    }, 1000);

    return () => clearInterval(interval);

  }, [running]);

  const startSession = () => {

    setRunning(true);

  };

  const pauseSession = () => {

    setRunning(false);

  };

  const resetSession = () => {

    setRunning(false);

    setSeconds(0);

  };

  const formattedTime = new Date(seconds * 1000)
    .toISOString()
    .substring(11, 19);

  return {

    running,

    seconds,

    formattedTime,

    startSession,

    pauseSession,

    resetSession,

  };

};

export default useSessionTimer;