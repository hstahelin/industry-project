import React from "react";

const ProgressBar = ({ currentStep, totalSteps }) => {
  const steps = Array.from({ length: totalSteps }, (_, i) => i + 1);

  return (
    <div className="progress-bar">
      {steps.map((step) => (
        <div
          key={step}
          className={`ellipse ${step <= currentStep ? "active" : ""}`}
        ></div>
      ))}
    </div>
  );
};

export default ProgressBar;
