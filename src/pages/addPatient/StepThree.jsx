import React, { useState } from 'react'
import StepperProgress from '../../componants/StepperProgress'
import { useNavigate } from 'react-router';
import StepNavButtons from '../../componants/StepNavButtons';
import ImageUploadSection from '../../componants/ImageUploadSection';
import { base64ToBlob } from '../../utils/base64tobuffer';
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux';
import { saveDonorNailImg, resetDonorData } from '../../redux/donorReducer';
import usePost from '../../hooks/usePost';
import Loading from '../../componants/Loading';
import { step3validation } from '../../utils/addPatientValidation';
import Error from '../../componants/Error';
const StepThree = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const { postData, loading, error, responseData } = usePost("api/donor/predict_anemia")
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const donorData = useSelector((state) => state.donorSlice);
  const doctorID = useSelector((state) => state.doctorSlice.doctorID);
  const nail_image = useSelector((state) => state.donorSlice.nail_image);
  const [images, setImages] = useState({ nail_image });
  const [imgerror, setError] = useState({})
  
  const nextEventHandler = async () => {
    const { isValid, errors } = step3validation(images)
    if (isValid) {
      dispatch(saveDonorNailImg(images))
    } else {
      console.log(errors);
      setError(errors)

      // alert("Required all feilds");
      throw new Error("Required all feilds")
    }
    const formData = new FormData();

    const nail_image = images.nail_image;
    const { donorDetails, left_eye, right_eye, left_palm, right_palm } = donorData;
    // Append image fields (base64 → Blob → File)
    formData.append("doctorID", doctorID);
    formData.append('left_eye', base64ToBlob(left_eye), 'left_eye.jpg');
    formData.append('right_eye', base64ToBlob(right_eye), 'right_eye.jpg');
    formData.append('left_palm', base64ToBlob(left_palm), 'left_palm.jpg');
    formData.append('right_palm', base64ToBlob(right_palm), 'right_palm.jpg');
    formData.append('nail_image', base64ToBlob(nail_image), 'nail_image.jpg');
    for (const key in donorDetails) {
      if (
        typeof donorDetails[key] !== 'object') {
        formData.append(key, donorDetails[key]);
      }
    }
    try {
      let res = await postData(formData)
      console.log({res});
      
      if (!res.data.donorId) {
        throw new Error("Didn't get DONOR ID from server")
      }
      const { donorId } = res.data;
      dispatch(resetDonorData())
      navigate(`/donor/donor-detail/${donorId}`)
    } catch (err) {
      
      console.log(err.response.data)
    }
    
  }
  const saveImage = (name, img) => {
    setImages((pre) => {
      return { ...pre, [name]: img }
    })
  }
  return (
    <div>
      {loading && <Loading />}
      {error&&<Error msg={error.message} />}
      <StepperProgress currentStep={currentStep} />
      <div className="flex itßems-center justify-center gap-12 mt-10">
        <ImageUploadSection img={nail_image} name="nail_image" error={imgerror.nail_image} saveImage={saveImage} localKey="Nailbed" title="Nailbed" />
      </div>
      <StepNavButtons
        nextEvent={nextEventHandler}
        nextUrl={`/donor/add-donor/upload-nailbde-image`}
        isNextRedirect={false}
        // nextUrl={`/donor/add-donor/upload-conjunctiva-image`}
        prevUrl={"/donor/add-donor/upload-conjunctiva-image"} // null/undefined disables the button
      />
    </div>
  )
}

export default StepThree
