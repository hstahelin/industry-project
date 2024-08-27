import { useState, useEffect } from "react";
import title from "../assets/nyt-logo.svg";
import logo from "../assets/NewYorkTimesMonogram.svg";
import quiz from "../assets/quiz.svg";

function Welcome() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = ["logo", "title", "start"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex + 1 === items.length) {
          clearInterval(interval);
          return prevIndex; // Keep the last item displayed
        }
        return prevIndex + 1;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="container">
      <div className={`logo ${currentIndex === 0 ? "showItem" : "hideItem"} `}>
        <div className="logo-box">
          <img src={logo} alt="New York Times logo" className="nyt-logo" />
        </div>
      </div>
      <div className={`title ${currentIndex === 1 ? "showItem" : "hideItem"} `}>
        <div className="title-box">
          <img src={title} alt="New York Times Title" className="nyt-title" />
        </div>
      </div>
      <div
        className={`start-container  ${
          currentIndex === 2 ? "showItem" : "hideItem"
        } `}
      >
        <div
          className={`${currentIndex === 2 ? "showItem" : "hideItem"} start`}
        >
          {currentIndex === 2 ? (
            <>
              <div className="quiz-logo">
                <img src={quiz} alt="Start" className="quiz-logo__image" />
              </div>
              <div className="cta-copy-section">
                <div className="quiz-welcome">
                  <h1 className="welcome-title">
                    Take The Times Personality Quiz!
                  </h1>
                  <h2 className="welcome-subtitle">
                    Personalize your app experience.
                  </h2>
                  <p className="welcome-text">
                    Whether you’re a Visionary Strategist (ENTJ) or a Creative
                    Artisan (ISFP), this quiz will match you with the perfect
                    NYT features, like the Athletic, Cooking or Audio.
                  </p>
                </div>
              </div>
              <div className="cta-action-section">
                {/* <button className="cta-button">Take the quiz</button> */}
                <a href="/quiz" className="cta-button">
                  Take the quiz
                </a>
                <a href="https://www.nytimes.com/" className="cta-continue">
                  Continue without personalization
                </a>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Welcome;
