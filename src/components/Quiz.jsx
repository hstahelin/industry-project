import React from "react";
import questions from "../data/questions";

const Quiz = ({ question, options, onAnswer, step, onNext, onBack }) => {
  const handleAnswer = (option) => {
    const selectedOptionIndex = options.findIndex(
      (opt) => opt.text === option.text
    );
    const category = questions[step - 1].categories[selectedOptionIndex];
    onAnswer(category);
  };

  return (
    <div className="quiz">
      <div className="question">
        <h2 className="heading">{question}</h2>
      </div>
      <ul className="options-grid">
        {options.map((option, index) => (
          <li key={index} className="option-item">
            <div className="overlay">
              <button
                onClick={() => handleAnswer(option)}
                className="option-button"
                style={{ backgroundImage: `url(${option.image})` }}
              >
                <span className="option-text">{option.text}</span>
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="navigation-buttons">
        <button
          onClick={onBack}
          disabled={step === 1}
          className="btn btn--back"
        >
          Back
        </button>
        <button
          className="btn btn--submit"
          onClick={onNext}
          disabled={step > questions.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Quiz;
