import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const StepNavButtons = ({ prevUrl,isNextRedirect=true, nextEvent, nextUrl, disablePrev = false, disableNext = false }) => {
  const navigate = useNavigate();
  const nextClickHandler = async () => {
    try {
      if (nextEvent) {
        await nextEvent();
        nextUrl &&isNextRedirect&& navigate(nextUrl)
      }
    } catch (error) {

    }
  }

  return (
    <div className="absolute bottom-0 left-0 right-0 px-6 py-4 flex justify-between items-center">
      {/* Previous Button */}
      <button
        onClick={() => { prevUrl && navigate(prevUrl) }}
        disabled={disablePrev || !prevUrl}
        className={`flex items-center gap-2 px-5 py-2 rounded-lg font-semibold shadow-lg transition-all duration-300 
          ${disablePrev || !prevUrl
            ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
            : 'bg-red-600 hover:bg-red-700 text-white'}
        `}
      >
        <FaArrowLeft /> Previous
      </button>

      {/* Next Button */}
      <button
        onClick={nextClickHandler}
        disabled={disableNext || !nextUrl}
        className={`flex items-center gap-2 px-5 py-2 rounded-lg font-semibold shadow-lg transition-all duration-300 
          ${disableNext || !nextUrl
            ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
            : 'bg-red-600 hover:bg-red-700 text-white'}
        `}
      >
        {"Next"} <FaArrowRight />
      </button>
    </div>
  );
};

export default StepNavButtons;
