import React from "react";

const App = () => {
  const [hieght, setHeight] = useState(70);
  const [wieght, setWeight] = useState(180);

  function onWeightChange(event){

  }
  function onHeightChange(event){
    
  }
  return (
    <main>
      <h1>BMI CALCULATOR</h1>
      <div className=" input-section ">
        <p className="slider-output"> Weight: {weight} kg </p>
        <input
          className="input-slider"
          type="range"
          step="1"
          min="40"
          max="200"
          onChange={onWeightChange}

        />
        <p className="slider-output"> Height: {height} cm</p>
        <input className="input-slider" type="range"
         onChange={onHeightChange} />
      </div>
      <div className="output-section">
        <p>Your BMI Index is</p>
        <p className="output">100</p>
      </div>
    </main>
  );
};

export default App;
