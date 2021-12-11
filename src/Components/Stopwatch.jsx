import { useEffect, useRef, useState } from "react";

function Stopwatch() {
  const [state, setState] = useState(0);
  const timerRef = useRef(null);
  useEffect(() => {
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);
  const startTimer = () => {
    if (timerRef.current === null)
      timerRef.current = setInterval(() => {
        setState((prev) => prev + 1);
      }, 1000);
  };
  const pauseTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };
  const resetTimer = () => {
    pauseTimer();
    setState(0);
  };
  return (
    <>
      <div>{state}</div>
      <br />
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={pauseTimer}>Pause</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </>
  );
}
export default Stopwatch;
