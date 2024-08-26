import React, { useState } from "react";
import { Link } from "react-router-dom";

const Result = ({ userInfo, resultData }) => {
  const { personalityType, topCategories } = resultData;

  const categoryMessages = {
    Audio: {
      title: "The New York Times",
      description:
        "Engage with expert reporting, including culture coverage and analysis.",
      url: "https://www.nytimes.com/ca/",
    },
    Wirecutter: {
      title: "Wirecutter",
      description:
        "Choose products confidently with reviews and real-world testing.",
      url: "https://www.nytimes.com/wirecutter/",
    },
    Cooking: {
      title: "NYT Cooking",
      description: "Explore delicious recipes, kitchen tips, and more.",
      url: "https://cooking.nytimes.com/",
    },
    Games: {
      title: "Games & Puzzles",
      description: "Challenge your mind with intriguing games and puzzles.",
      url: "https://www.nytimes.com/crosswords",
    },
    "The Athletic": {
      title: "The Athletic",
      description:
        "Follow in-depth, personalized coverage of your favorite sports.",
      url: "https://www.nytimes.com/athletic/",
    },
  };

  const personalityMessages = {
    Audio: {
      title: "Story Seeker",
      description:
        "You have a passion for immersive narratives and compelling stories.",
    },
    Wirecutter: {
      title: "Gadget Guru",
      description:
        "You're always ahead of the curve with the latest tech and innovations.",
    },
    Cooking: {
      title: "Culinary Connoisseur",
      description: "Your love for food and cooking knows no bounds.",
    },
    Games: {
      title: "Puzzle Master",
      description:
        "You thrive on solving complex problems and mind-bending challenges.",
    },
    "The Athletic": {
      title: "Sports Fanatic",
      description:
        "Your enthusiasm for sports and physical activity is unmatched.",
    },
  };

  const [selectedCategory, setSelectedCategory] = useState(topCategories[0]);

  return (
    <div className="result">
      <h2 className="heading">
        You’re a <strong>{personalityMessages[personalityType].title}</strong>!
      </h2>
      <p className="subheading">
        {personalityMessages[personalityType].description}
      </p>
      <p className="subheading recommended">
        <strong>Recommended Products ({topCategories.length})</strong>
      </p>
      <p className="para">Select to add to your dashboard.</p>

      <div className="category-tabs">
        {topCategories.map((category, index) => (
          <button
            key={index}
            className={`category-tab ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {categoryMessages[category].title}
          </button>
        ))}
      </div>

      <div className="category-details">
        {categoryMessages[selectedCategory] && (
          <Link
            to={categoryMessages[selectedCategory].url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="category-card">
              <h3 className="card-heading">
                {categoryMessages[selectedCategory].title}
              </h3>
              <p className="card-para">
                {categoryMessages[selectedCategory].description}
              </p>
            </div>
          </Link>
        )}
      </div>

      <div className="action-buttons">
        <button className="btn btn--back">Subscribe</button>
        <button className="btn btn--submit">Save & Share</button>
      </div>
    </div>
  );
};

export default Result;
