import React from "react";

const App = () => {
  return (
    <main>
      <h1>BMI CALCULATOR</h1>
      <div className=" input-section ">
        <p className="slider-output"> Weight: 80 kg </p>
        <input
          className="input-slider"
          type="range"
          step="1"
          min="40"
          max="200"
        />
      </div>
    </main>
  );
};

export default App;
