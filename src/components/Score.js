import React, { useState } from 'react';

function Score(props) {
  const [score, setScore] = useState(0);

  const addPoints = () => {
    setScore((prevScore) => prevScore + 100);
  };

  const subtractPoints = () => {
    setScore((prevScore) => prevScore - 100);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <div className="App-header">
      <h2><span id='scoreName'>Score:</span> <span id='scoreAmount'>{score}</span></h2>
      <div className="buttons-container">
        <button className="addButton" onClick={addPoints}>Increase</button>
        <button className="subtractButton" onClick={subtractPoints}>Decrease</button>
        <button className="resetButton" onClick={resetScore}>Reset</button>
      </div>
    </div>
  );
}

export default Score;
