import React, { useState } from "react";
import StepperProgress from "../../componants/StepperProgress";
import ImageUploadSection from "../../componants/ImageUploadSection";
import StepNavButtons from "../../componants/StepNavButtons";


const StepOne = () => {
  const [currentStep] = useState(0);
  const [data , setData] = useState(localStorage.getItem(""))

  return (
    <div className="">
   
      <StepperProgress currentStep={currentStep} />

      {/* Upload Sections */}
      <div className="grid grid-cols-1 lg:grid lg:grid-cols-2 items-center gap-12 mt-10">
        <ImageUploadSection localKey="LeftPalm" title="Left Palm" />
        <ImageUploadSection localKey="RightPalm" title="Right Palm" />
      </div>

      {/* Navigation */}
      <div className="flex justify-end mt-10 px-6">
        <StepNavButtons
          nextUrl="/donor/add-donor/upload-conjunctiva-image"
          prevUrl="/donor/add-donor"
        />
      </div>
    </div>
  );
};

export default StepOne;
