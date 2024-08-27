import React, { useState } from "react";
import { Link } from "react-router-dom";
import ShareModal from "./ShareModal";
import { FaExternalLinkAlt } from "react-icons/fa";
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

  const [selectedCategories, setSelectedCategories] = useState(topCategories);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleCategorySelection = (category) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(category)
        ? prevSelected.filter((cat) => cat !== category)
        : [...prevSelected, category]
    );
  };

  const openShareModal = () => {
    setIsModalOpen(true);
  };

  const closeShareModal = () => {
    setIsModalOpen(false);
  };

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
              selectedCategories.includes(category) ? "active" : ""
            }`}
            onClick={() => toggleCategorySelection(category)}
          >
            {categoryMessages[category].title}
          </button>
        ))}
      </div>
      <hr />
      <p className="para">Click on a product below to preview it.</p>
      <div className="category-details">
        {selectedCategories.map((category, index) => (
          <Link
            key={index}
            to={categoryMessages[category].url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="category-card">
              <div className="link-wrapper">
                <FaExternalLinkAlt />
              </div>
              <div className="card-text">
                <h3 className="card-heading">
                  {categoryMessages[category].title}
                </h3>
                <p className="card-para">
                  {categoryMessages[category].description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="result-action-buttons">
        <Link
          to={"https://www.nytimes.com/subscription"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn btn--back">Subscribe</button>
        </Link>
        <button className="btn btn--submit" onClick={openShareModal}>
          Save & Share
        </button>
      </div>

      <ShareModal
        show={isModalOpen}
        onClose={closeShareModal}
        selectedCategories={selectedCategories}
        personalityType={personalityType}
        categoryMessages={categoryMessages}
        personalityMessages={personalityMessages}
      />
    </div>
  );
};

export default Result;
