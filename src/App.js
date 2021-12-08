import { useState } from "react";
import Countdown from "./Components/Countdown";
import "./styles.css";

export default function App() {
  const [hide, setHide] = useState(false);
  return (
    <div className="App">
      {!hide && <Countdown initial={100} />}
      <button onClick={() => setHide(!hide)}>Hide Stopwatch</button>
    </div>
  );
}
