import React from "react";

function App() {
  const questions = [
    {
      text: "React - это ...",
      variants: ["фреймворк", "библиотека", "редактор кода", "не знаю"],
      current: 1,
    },
    {
      text: "хук useState() нужен для",
      variants: [
        "того чтобы запустить сервер",
        "корректной работы браузера",
        "работы с состоянием компонента",
      ],
      current: 2,
    },
    {
      text: "DOM это",
      variants: [
        "Document Object Model",
        "Documentation Objective Modeling",
        "Documention Of Models",
      ],
      current: 0,
    },
  ];
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const question = questions[step];

  function Game() {
    function selectVariant(index) {
      setStep(step + 1);
      if (index === question.current) setCorrect(correct + 1);
    }

    const percentage = ((step / questions.length) * 100).toFixed(0);
    console.log(percentage);
    return (
      <>
        <div className="wrapper">
          <div className="progress-bar">
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
    );
  }

  function Result() {
    function restartGame() {
      setCorrect(0);
      setStep(0);
    }

    return (
      <>
        <div className="wrapper">
          <p className="smile">&#129395;</p>
          <h2>
            Поздравляем, у вас {correct} из {questions.length} правильных
            ответов!
          </h2>
          <div className="restart-button">
            <button onClick={restartGame}>Пройти тест заного</button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {step < questions.length ? (
        <Game
          step={step}
          setStep={setStep}
          correct={correct}
          setCorrect={setCorrect}
          question={question}
          length={questions.length}
        />
      ) : (
        <Result
          correct={correct}
          length={questions.length}
          setStep={setStep}
          setCorrect={setCorrect}
        />
      )}
    </>
  );
}

export default App;
