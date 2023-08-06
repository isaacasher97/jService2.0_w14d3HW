import React, { useState } from 'react';

function Display(props) {
  const question = props.question[0];
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer((prevShowAnswer) => !prevShowAnswer);
  };

  if (props.question[0].question) {
    return (
      <div>
        <h1><span>Category:</span> {question.category.title}</h1>
        <h1><span>Points:</span> {question.value}</h1>
        <h2><span>Question:</span> {question.question}</h2>
        <button onClick={toggleAnswer}>
          {showAnswer ? 'Hide Answer' : 'Show Answer'}
        </button>
        {showAnswer && (
          <div>
            <h3>Answer:</h3>
            <p>{question.answer}</p>
          </div>
        )}
      </div>
    );
  } else {
    return <h1>Get a random trivia question</h1>;
  }
}

export default Display;
