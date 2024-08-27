import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const ShareModal = ({
  show,
  onClose,
  selectedCategories,
  personalityType,
  categoryMessages,
  personalityMessages,
}) => {
  if (!show) return null;

  const selectedTitles = selectedCategories.map(
    (category) => categoryMessages[category].title
  );

  const shareText = `Check out these recommendations based on my personality type (${
    personalityMessages[personalityType].title
  }): ${selectedTitles.join(", ")}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareText);
    alert("Text copied to clipboard!");
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3 className="heading">Share Your Recommendations</h3>
        <p className="subheading">{shareText}</p>
        <div className="modal-buttons">
          <button onClick={handleCopyLink} className="btn btn--submit">
            Copy Recommendations
          </button>
          <button
            onClick={() =>
              window.open(
                `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  shareText
                )}`,
                "_blank"
              )
            }
            className="btn btn--submit btn--share"
          >
            Share on &nbsp;
            <FaXTwitter />
          </button>
          <button
            onClick={() =>
              window.open(
                `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  window.location.href
                )}`,
                "_blank"
              )
            }
            className="btn btn--submit btn--share"
          >
            Share on &nbsp;
            <FaFacebook />
          </button>
          <button onClick={onClose} className="btn btn--back">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
