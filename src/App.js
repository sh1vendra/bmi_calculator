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
          max="200"  />
          <p className ='slider-output'> Height: 180 cm</p>
          <input 
          className= 'input-slider'
          type='range' />
          

       
      </div>
    </main>
  );
};

export default App;
