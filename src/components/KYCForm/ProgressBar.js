import React from 'react';

const ProgressBar = ({ currentStep, totalSteps }) => {
  return (
    <div className="progress-bar">
      {[...Array(totalSteps)].map((_, index) => (
        <div
          key={index}
          className={`step ${
            currentStep > index + 1 
              ? 'completed' 
              : currentStep === index + 1 
              ? 'active' 
              : ''
          }`}
        >
          {index + 1}
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;