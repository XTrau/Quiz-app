import React from 'react'

function Result({ correct, setStep, setCorrect, length }) {
  function restartGame() {
    setCorrect(0)
    setStep(0)
  }

  return (
    <>
      <div className='wrapper'>
        <p className='smile'>&#129395;</p>
        <h2>
          Поздравляем, у вас {correct} из {length} правильных ответов!
        </h2>
        <div className='restart-button'>
          <button onClick={restartGame}>Пройти тест заного</button>
        </div>
      </div>
    </>
  )
}

export default Result
