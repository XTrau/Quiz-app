import React from 'react'

function Game({ step, setStep, setCorrect, question, percentage }) {
  function selectVariant(index) {
    setStep(step + 1)
    if (index === question.current) setCorrect(prev => prev + 1)
  }

  return (
    <>
      <div className='wrapper'>
        <div className='progress-bar'>
          <div style={{ width: `${percentage}%` }}></div>
        </div>
        <h2>{question.text}</h2>
        <ul>
          {question.variants.map((text, index) => (
            <li onClick={() => selectVariant(index)}>{text}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Game
