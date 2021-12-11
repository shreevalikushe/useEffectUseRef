import { useState } from "react";
import Countdown from "./Components/Countdown";
import Focus from "./Components/Focus";
import FormRef from "./Components/FormRef";
import Timer from "./Components/Timer";
import "./styles.css";

export default function App() {
  const [hide, setHide] = useState(false);
  return (
    <div className="App">
      {/* {!hide && <Countdown initial={100} />} */}
      {/* <button onClick={() => setHide(!hide)}>Hide Stopwatch</button> */}
      {/* <Timer initial={0} final={15} /> */}
      {/* <FormRef /> */}
      <Focus />
    </div>
  );
}
