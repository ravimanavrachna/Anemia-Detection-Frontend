import React from 'react';
import { useLocation } from 'react-router-dom';
import { GiPalm } from 'react-icons/gi';
import { FaEye, FaHandHoldingMedical, FaPaperPlane } from 'react-icons/fa';

const StepperProgress = () => {
  const location = useLocation();

  // Define route-to-step mapping
  const stepRoutes = ['/donor/add-donor/upload-palm-image', '/donor/add-donor/upload-conjunctiva-image', '/donor/add-donor/upload-nailbde-image', '/donor/add-donor'];
  const currentPath = location.pathname;

  // Get the index of the current step
  const currentStep = stepRoutes.indexOf(currentPath);

  const steps = [
    { label: 'Palm', icon: <GiPalm className="w-6 h-6" /> },
    { label: 'Conjunctiva', icon: <FaEye className="w-6 h-6" /> },
    { label: 'Nailbed', icon: <FaHandHoldingMedical className="w-6 h-6" /> },
    { label: 'Submit', icon: <FaPaperPlane className="w-6 h-6" /> },
  ];

  return (
    <div className="w-1/2 stick top-[8rem] m-auto flex justify-between mt-6 items-center mb-6 px-2">
      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isCurrent = index === currentStep;
        return (
          <React.Fragment key={index}>
            {/* Step circle */}
            <div className="flex flex-col items-center relative z-10">
              <div
                className={`flex items-center justify-center w-14 h-14 rounded-full text-white transition-all duration-300 ${
                  isCompleted
                    ? 'bg-red-700'
                    : isCurrent
                    ? 'bg-red-500'
                    : 'bg-gray-300 text-gray-700'
                }`}
              >
                {step.icon}
              </div>
              <span className="text-xs mt-1 text-center text-gray-600">{step.label}</span>
            </div>

            {/* Line */}
            {index < steps.length - 1 && (
              <div className="flex-1 h-1 mx-2 relative">
                <div className="absolute -top-2 left-0 w-full h-1 bg-gray-300 rounded" />
                {currentStep > index && (
                  <div className="absolute -top-2 left-0 h-1 bg-red-600 rounded transition-all duration-300" style={{ width: '100%' }} />
                )}
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default StepperProgress;
