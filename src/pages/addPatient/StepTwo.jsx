import React, { useState } from 'react'
import StepperProgress from '../../componants/StepperProgress'
import { useNavigate } from 'react-router';
import StepNavButtons from '../../componants/StepNavButtons';
import ImageUploadSection from '../../componants/ImageUploadSection';
import { useDispatch, useSelector } from 'react-redux';
import { saveDonorEyeImg } from '../../redux/donorReducer';
import { step2validation } from '../../utils/addPatientValidation';

const StepTwo = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const dispatch = useDispatch();
  const { left_eye, right_eye } = useSelector((state) => state.donorSlice);
  const [images, setImages] = useState({ left_eye, right_eye })
    const [error, setError] = useState({})
  
  const nextEventHandler = () => {
    const { isValid, errors } = step2validation(images)
    if (isValid) {
      dispatch(saveDonorEyeImg(images))
    } else {
      console.log(errors);

      setError(errors)
      throw new Error("Required all feilds")
    }
  }
  const saveImage = (name, img) => {
    setImages((pre) => {
      return { ...pre, [name]: img }
    })
  }
  return (
    <div>
      <StepperProgress currentStep={currentStep} />

      <div className="grid grid-cols-1 lg:grid lg:grid-cols-2 items-center gap-12 mt-10">
        <ImageUploadSection img={left_eye} name="left_eye" error={error.left_eye} saveImage={saveImage} localKey="LeftConjunctiva" title="Left Conjunctiva" />
        <ImageUploadSection img={right_eye} name="right_eye" error={error.right_eye} saveImage={saveImage} localKey="RightConjunctiva" title="Right Conjunctiva" />
      </div>

      <StepNavButtons
        nextEvent={nextEventHandler}
        nextUrl="/donor/add-donor/upload-nailbde-image"
        prevUrl='/donor/add-donor/upload-palm-image' // null/undefined disables the button
      />
    </div>
  )
}

export default StepTwo
