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
      <h2>Score: {score}</h2>
      <div className="buttons-container">
        <button className="score-button" onClick={addPoints}>Add 100 Points</button>
        <button className="score-button" onClick={subtractPoints}>Subtract 100 Points</button>
        <button className="reset-button" onClick={resetScore}>Reset</button>
      </div>
    </div>
  );
}

export default Score;
