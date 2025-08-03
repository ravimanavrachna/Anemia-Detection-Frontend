import React, { useState } from "react";
import StepperProgress from "../../componants/StepperProgress";
import ImageUploadSection from "../../componants/ImageUploadSection";
import StepNavButtons from "../../componants/StepNavButtons";
import { useDispatch, useSelector } from "react-redux";
import { saveDonorPalmImg } from "../../redux/donorReducer";
import { step1validation } from "../../utils/addPatientValidation";


const StepOne = () => {
  const [currentStep] = useState(0);
  const dispatch = useDispatch();
  const { left_palm, right_palm } = useSelector((state) => state.donorSlice);
  const [images, setImages] = useState({ left_palm, right_palm })
  const [error, setError] = useState({})

  const nextEventHandler = () => {
    const { isValid, errors } = step1validation(images)
    if (isValid) {
      dispatch(saveDonorPalmImg(images))
    } else {
      console.log(errors);
      setError(errors)
      // alert("Required all feilds");
      throw new Error("Required all feilds")
    }
  }
  const saveImage = (name, img) => {
    setImages((pre) => {
      return { ...pre, [name]: img }
    })
  }
  return (
    <div className="">

      <StepperProgress currentStep={currentStep} />

      {/* Upload Sections */}
      <div className="grid grid-cols-1 lg:grid lg:grid-cols-2 items-center gap-12 mt-10">
        <ImageUploadSection img={left_palm} error={error.left_palm} name="left_palm" saveImage={saveImage} title="Left Palm" />
        <ImageUploadSection img={right_palm} error={error.right_palm} name="right_palm" saveImage={saveImage} title="Right Palm" />
      </div>

      {/* Navigation */}
      <div className="flex justify-end mt-10 px-6">
        <StepNavButtons
          nextEvent={nextEventHandler}
          nextUrl="/donor/add-donor/upload-conjunctiva-image"
          prevUrl="/donor/add-donor"
        />
      </div>
    </div>
  );
};

export default StepOne;
