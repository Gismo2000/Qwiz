// import React, { useState } from 'react';
// import questions from './questions';

// const Quiz = () => {
//   const [userAnswers, setUserAnswers] = useState({});
//   const [score, setScore] = useState(null);

//   const handleAnswer = (question, option) => {
//     setUserAnswers(prev => ({ ...prev, [question]: option }));
//   };

//   const calculateScore = () => {
//     let score = 0;
//     questions.forEach(question => {
//       if (question.correctAnswer === userAnswers[question.question]) {
//         score++;
//       }
//     });
//     return score;
//   };

//   const showResults = () => {
//     const userScore = calculateScore();
//     setScore(userScore);
//   };

//   return (
//     <div>
//       {questions.map((q, index) => (
//         <div key={index}>
//           <p>{q.question}</p>
//           {q.options.map(option => (
//             <button key={option} onClick={() => handleAnswer(q.question, option)}>
//               {option}
//             </button>
//           ))}
//         </div>
//       ))}
//       <button onClick={showResults}>Узнать результат</button>
//       {score !== null && <p>Ваш результат: {score} из {questions.length}</p>}
//     </div>
//   );
// };

// export default Quiz;


import React, { useState } from 'react';
import questions from './questions';

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [showCorrectAnswers, setShowCorrectAnswers] = useState(false);

  const handleAnswer = (question, option) => {
    setUserAnswers(prev => ({ ...prev, [question]: option }));
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach(question => {
      if (question.correctAnswer === userAnswers[question.question]) {
        score++;
      }
    });
    return score;
  };

  const showResults = () => {
    const userScore = calculateScore();
    setScore(userScore);
  };

  const toggleCorrectAnswers = () => {
    setShowCorrectAnswers(!showCorrectAnswers);
  };

  return (
    <div>
      {questions.map((q, index) => (
        <div key={index}>
          <p>{q.question}</p>
          {q.options.map(option => (
            <button key={option} onClick={() => handleAnswer(q.question, option)}>
              {option}
            </button>
          ))}
          {showCorrectAnswers && <p>Правильный ответ: {q.correctAnswer}</p>}
        </div>
      ))}
      <button onClick={showResults}>Узнать результат</button>
      {score !== null && <p>Ваш результат: {score} из {questions.length}</p>}
      <button onClick={toggleCorrectAnswers}>Узнать правильные ответы</button>
    </div>
  );
};

export default Quiz;
