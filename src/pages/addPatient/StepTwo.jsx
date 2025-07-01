import React, { useState } from 'react'
import StepperProgress from '../../componants/StepperProgress'
import { useNavigate } from 'react-router';
import StepNavButtons from '../../componants/StepNavButtons';
import ImageUploadSection from '../../componants/ImageUploadSection';

const StepTwo = () => {
    const [currentStep, setCurrentStep] = useState(0);

    const navigate = useNavigate()
  return (
    <div>
       <StepperProgress currentStep={currentStep} />

        <div className="grid grid-cols-2 items-center gap-12 mt-10">
        <ImageUploadSection localKey="LeftConjunctiva" title="Left Conjunctiva" />
        <ImageUploadSection localKey="RightConjunctiva" title="Right Conjunctiva" />
      </div>

      <StepNavButtons
        nextUrl="/donor/add-donor/upload-nailbde-image"
        prevUrl='/donor/add-donor/upload-palm-image' // null/undefined disables the button
      />
    </div>
  )
}

export default StepTwo
