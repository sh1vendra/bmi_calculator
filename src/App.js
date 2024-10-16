import React, { useMemo, useState } from "react";
import './App.css'

const App = () => {
  const [height, setHeight] = useState(70);
  const [weight, setWeight] = useState(180);

  function onWeightChange(event) {
    setWeight(event.target.value);
  }

  function onHeightChange(event) {
    setHeight(event.target.value);
  }

  const output = useMemo(() => {
    const calculateHeight = height / 100;

    return (weight / (calculateHeight * calculateHeight)).toFixed(1);
  }, [weight, height]);

  return (
    <main>
      <h1>BMI CALCULATOR</h1>
      <div className="input-section">
        <p className="slider-output">Weight: {weight} kg</p>
        <input
          className="input-slider"
          type="range"
          step="1"
          min="40"
          max="200"
          value={weight}
          onChange={onWeightChange}
        />
        <p className="slider-output">Height: {height} cm</p>
        <input
          className="input-slider"
          type="range"
          step="1"
          min="100"
          max="250"
          value={height}
          onChange={onHeightChange}
        />
      </div>
      <div className="output-section">
        <p>Your BMI Index is</p>
        <p className="output">{output}</p>
      </div>
    </main>
  );
};

export default App;
