import React from "react";
import "./style.css";

export default function App() {
  const [counter, setCounter] = React.useState(
    Number(localStorage.getItem("counter") || 0)
  );
  const [numGap, setNumGap] = React.useState(Number(1));

  const gapHandler = event => {
    setNumGap(Number(event.target.value));
  };
  const clickHandler = event => {
    event.target.name == "increase"
      ? setCounter(counter + numGap)
      : counter > 0 && counter - numGap >= 0
      ? setCounter(counter - numGap)
      : setCounter(0);
  };
  localStorage.setItem("counter", counter);

  return (
    <div>
      <h1>Hocamiz : {counter}</h1>
      <button name="increase" onClick={clickHandler}>
        Sevgi+
      </button>
      <button name="decrease" onClick={clickHandler}>
        No Sevgi-
      </button>
      <input
        type="number"
        name="gap"
        style={{ width: 50, marginLeft: 15 }}
        min="1"
        onChange={gapHandler}
      />
    </div>
  );
}
