import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import UserInfoForm from "./components/UserInfoForm";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import { useState } from "react";
import questions from "./data/questions";
import Welcome from "./components/Welcome";
const App = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [userInfo, setUserInfo] = useState({
    name: "",
    age: "",
    gender: "",
    occupation: "",
    email: "",
    location: "",
  });

  const handleAnswer = (category) => {
    setAnswers([...answers, category]);
    handleNextStep();
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleFormSubmit = (userData) => {
    setUserInfo(userData);
    handleNextStep();
  };

  const calculatePersonalityType = () => {
    const frequency = {};
    answers.forEach((answer) => {
      frequency[answer] = (frequency[answer] || 0) + 1;
    });

    const sortedCategories = Object.keys(frequency).sort(
      (a, b) => frequency[b] - frequency[a]
    );

    const primaryPersonalityType = sortedCategories[0];

    return {
      personalityType: primaryPersonalityType,
      topCategories: sortedCategories.slice(0, 3),
    };
  };

  return (
    <div className="App">
      <header className="navbar">
        <Navbar />
      </header>
      <main>
        <TransitionGroup>
          <CSSTransition key={step} timeout={300} classNames="fade">
            <Routes>
              <Route
                path="/quiz"
                element={
                  step === 0 ? (
                    <UserInfoForm onSubmit={handleFormSubmit} />
                  ) : step <= questions.length ? (
                    <Quiz
                      step={step}
                      question={questions[step - 1]?.question}
                      options={questions[step - 1]?.options}
                      onAnswer={handleAnswer}
                      onNext={handleNextStep}
                      onBack={handlePreviousStep}
                    />
                  ) : (
                    <Result
                      userInfo={userInfo}
                      resultData={calculatePersonalityType()}
                    />
                  )
                }
              />

              <Route path="*" element={<Welcome />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </main>
    </div>
  );
};

export default App;
