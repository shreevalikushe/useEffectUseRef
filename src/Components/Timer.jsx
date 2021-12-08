import { useEffect, useState } from "react";

function Timer({ initial, final }) {
  const [time, setTime] = useState(initial);
  useEffect(() => {
    const id = setInterval(() => {
      setTime((prev) => {
        if (prev + 1 === final) {
          clearInterval(id);
          alert("Time over");
          console.log("clear");
        }
        return prev + 1;
      });
      return () => {
        console.log("cleanup");
        clearInterval(id);
      };
    }, 1000);
  }, []);
  return (
    <>
      <h1>
        Timer starts at {initial}sec and timer will stop at {final}sec
      </h1>
      <div>
        <h4>Time:{time}</h4>
      </div>
    </>
  );
}
export default Timer;
