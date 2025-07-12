import React, { useState } from 'react'
import StepperProgress from '../../componants/StepperProgress'
import { useNavigate } from 'react-router';
import StepNavButtons from '../../componants/StepNavButtons';
import ImageUploadSection from '../../componants/ImageUploadSection';

const StepThree = () => {
    const [currentStep, setCurrentStep] = useState(0);

    const navigate = useNavigate()
  return (
    <div>
       <StepperProgress currentStep={currentStep} />
  <div className="flex items-center justify-center gap-12 mt-10">
        <ImageUploadSection localKey="Nailbed" title="Nailbed" />
      {/* <ImageUploadSection title="Right Nailbed" /> */}
      </div>
      <StepNavButtons
        // nextUrl="/donor/add-donor"
        nextUrl={`/donor/donor-detail`}
        prevUrl='/donor/add-donor/upload-conjunctiva-image' // null/undefined disables the button
      />
    </div>
  )
}

export default StepThree
