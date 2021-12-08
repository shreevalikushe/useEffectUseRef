import { useEffect, useState } from "react";

function Countdown({ initial }) {
  const [value, setValue] = useState(initial);

  useEffect(() => {
    const id = setInterval(() => {
      setValue((prev) => {
        if (prev - 1 === 0) {
          clearInterval(id);
        }
        return prev - 1;
      });
    }, 1000);
    return () => {
      console.log("clearing!...");
      clearInterval(id);
    };
  }, []);
  return (
    <>
      <h3>Basic Stopwatch</h3>
      <h4>{value}</h4>
    </>
  );
}
export default Countdown;
