import React, { useState } from 'react';

function Display(props) {
  const question = props.question[0];
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer((prevShowAnswer) => !prevShowAnswer);
  };

  if (props.question[0].question) {
    return (
      <div className='displayContainer'>
        <h1><span className='category'>Category:</span> <span className='categoryAnswer'>{question.category.title}</span></h1>
        <h1><span className='pointsName'>Points:</span> <span className='pointsAmount'>{question.value}</span></h1>
        <h2><span className='questionName'>Question:</span> <span className='questionAnswer'>{question.question}</span></h2>
        <button className='answerButton' onClick={toggleAnswer}>
          {showAnswer ? 'Hide Answer' : 'Click To Reveal Answer'}
        </button>
        {showAnswer && (
          <div className='answerContainer'>
            <h3><span className='shownAnswer'>Answer:</span> <span className='shownAnswerDefined'>{question.answer}</span></h3>
            
          </div>
        )}
      </div>
    );
  } else {
    return <h1>Get a random trivia question</h1>;
  }
}

export default Display;
