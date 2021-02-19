import React, { useState } from 'react';
import './App.css';

function App() {
  const questions = [
    {
      questionsText: 'What is the capital of France?', 
      answerOptions: [
        { answerText: 'New York', isCorrect: false }, 
        { answerText: 'London', isCorrect: false }, 
        { answerText: 'Paris', isCorrect: true }, 
        { answerText: 'Dublin', isCorrect: false }, 
      ], 
    }, 
    {
      questionsText: 'Who is the CEO of Tesla?', 
      answerOptions: [
        { answerText: 'Jeff Bezos', isCorrect: false }, 
        { answerText: 'Elon Musk', isCorrect: true }, 
        { answerText: 'Bill Gates', isCorrect: false }, 
        { answerText: 'Tony Stark', isCorrect: false }, 
      ], 
    },
    {
      questionsText: 'The iPhone was created by which company?', 
      answerOptions: [
        { answerText: 'Apple', isCorrect: true }, 
        { answerText: 'Intel', isCorrect: false }, 
        { answerText: 'Amazon', isCorrect: false }, 
        { answerText: 'Microsoft', isCorrect: false }, 
      ], 
    },
    {
      questionsText: 'How many Harry Porter books are there?', 
      answerOptions: [
        { answerText: '1', isCorrect: false }, 
        { answerText: '4', isCorrect: false }, 
        { answerText: '6', isCorrect: false }, 
        { answerText: '7', isCorrect: true }, 
      ], 
    },
  ]

  const [showScore, setShowScore] = useState(false)
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0)
  const [score, setScore] = useState(0)

  const handleOptionButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1)
    }
    const nextQuestion = currentQuestionNumber + 1

    if (nextQuestion < questions.length) {
      setCurrentQuestionNumber(nextQuestion)
    } else {
      setShowScore(true)
    }
  }

  return (
    <div className='app'>
      {showScore ? (
        <div className='score-section'>You scored {score} out of {questions.length}</div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestionNumber + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>{questions[currentQuestionNumber].questionsText}</div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestionNumber].answerOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionButtonClick(option.isCorrect)}
              >
                {option.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
