import React, { useEffect, useState } from "react";
import PageTitle from "../../componants/PageTitle";
import TitleAndValue from "../../componants/TitleAndValue";
import useGet from "../../hooks/useGet";
import {formatDate} from "../../utils/dateFormatter"
import { useParams } from "react-router";
const InitialUserPersonalDetails = [
  { id: 1, title: "Name", value: "data?.donor?.name" },
  { id: 2, title: "Roll No. / Employee ID", value: "data?.donor?.empID" },
  { id: 3, title: "ID", value: "data?.donor?.donorId " },
  { id: 4, title: "Mobile Number", value: "data?.donor?.mobile" },
  { id: 5, title: "HB Value", value: "data?.donor?.hBValue" },
];
const InitialuserMedicalDetail = [
  { id: 1, title: "Age", value: "data?.donor?.age" },
  { id: 2, title: "Age Group", value: "data?.donor?.ageGroup" },
  { id: 3, title: "Sex", value: "data?.donor?.sex" },
  { id: 4, title: "Height", value: "data?.donor?.height" },
  { id: 5, title: "Weight", value: "data?.donor?.weight" },
];
const PatientDetail = () => {
  const { donorId } = useParams();
  const { data } = useGet(`api/donor/${donorId}`);
  const [UserPersonalDetails, SetUserPersonalDetails] = useState(InitialUserPersonalDetails)
  const [userMedicalDetail, SetuserMedicalDetail] = useState(InitialuserMedicalDetail)
  const [nailbedImage, setNailbedImage] = useState("")
  const [leftPalmImage, setLeftPalmImage] = useState("")
  const [rightPalmImage, setRightPalmImage] = useState("")
  const [leftEyeImage, setLeftEyeImage] = useState("")
  const [rightEyeImage, setRightEyeImage] = useState("")
  const [finalResult,setFinalResult]=useState("")

  useEffect(() => {
    // console.log(data);
    setFinalResult(data?.final_prediction_3_models_combined?.prediction)
    setNailbedImage(data?.detailed_results?.nail_analysis?.image)
    setLeftPalmImage(data?.detailed_results?.palm_analysis?.left_palm?.image)
    setRightPalmImage(data?.detailed_results?.palm_analysis?.right_palm?.image)
    setLeftEyeImage(data?.detailed_results?.eye_analysis?.left_eye.image)
    setRightEyeImage(data?.detailed_results?.eye_analysis?.right_eye.image)
    SetUserPersonalDetails([
      { id: 1, title: "Name", value: data?.name },
      { id: 2, title: "Roll No. / Employee ID", value: data?.employeeId },
      { id: 3, title: "ID", value: data?.donorId },
      { id: 4, title: "Mobile Number", value: data?.mobileNo },
      { id: 5, title: "HB Value", value: data?.hBValue },
    ])
    SetuserMedicalDetail([
      { id: 1, title: "DOB", value: formatDate(data?.dob) },
      { id: 2, title: "Blood Group", value: data?.bloodGroup },
      { id: 3, title: "Sex", value: data?.sex },
      { id: 4, title: "Height", value: data?.height },
      { id: 5, title: "Weight", value: data?.weight },
    ])
  }, [data])
  return (
    <div>
      <PageTitle title={`${data?.name || "NA"} ${!data?.donorId || ""}`} />

      <div className="relative mb-10">
        <div className="md:grid md:grid-cols-2 gap-10">

          {/* Personal Details */}
          <div className="bg-white rounded-lg h-[25rem]">
            <div className="p-4">
              <h1 className="text-[20px] font-bold font-urbanist">Personal Details</h1>
            </div>
            <hr />
            <div className="p-4">
              {UserPersonalDetails.map((item) => (
                <TitleAndValue key={item.id} title={item.title} value={item.value} />
              ))}
            </div>
          </div>

          {/* Palm & Nailbed Images */}
          <div className="bg-white rounded-lg h-[25rem]">
            <div className="p-4">
              <h1 className="text-[20px] font-bold text-center font-urbanist">
                Palm & Nailbed Images
              </h1>
            </div>
            <hr />
            <div className="flex h-[21rem] p-4 overflow-hidden">
              <div className="flex justify-center items-center w-[49%]">
                <img src={leftPalmImage} alt="Palm" className="max-h-full object-contain" />
              </div>
              <div className="w-[1px] border h-full"></div>
              <div className="flex justify-center items-center w-[49%] pl-4">
                <img src={rightPalmImage} alt="Nailbed" className="max-h-full object-contain" />
              </div>
            </div>
          </div>

          {/* Medical Details */}
          <div className="bg-white rounded-lg h-[25rem]">
            <div className="p-4">
              <h1 className="text-[20px] font-bold font-urbanist">Medical Details</h1>
            </div>
            <hr />
            <div className="p-4">
              {userMedicalDetail.map((item) => (
                <TitleAndValue key={item.id} title={item.title} value={item.value} />
              ))}
            </div>
          </div>

          {/* Eyes Images */}
          <div className="bg-white rounded-lg h-[25rem]">
            <div className="p-4">
              <h1 className="text-[20px] text-center font-bold font-urbanist">Eyes Images</h1>
            </div>
            <hr />
            <div className="flex h-[21rem] p-4 overflow-hidden">
              <div className="flex justify-center items-center w-[49%]">
                <img src={leftEyeImage} alt="Left Eye" className="max-h-full object-contain" />
              </div>
              <div className="w-[1px] border h-full"></div>
              <div className="flex justify-center items-center w-[49%] pl-4">
                <img src={rightEyeImage} alt="Right Eye" className="max-h-full object-contain" />
              </div>
            </div>
          </div>
           {/* Nail Images */}
         
        </div>


        {/* Heartbeat Badge */}
        <div
          className="lg:absolute lg:w-[12rem] lg:h-[12rem] lg:rounded-full 
          lg:top-1/2 lg:left-1/2 transform -translate-x-1/2 -translate-y-1/2
          bg-red-600 border-[1rem] border-[#F6EDED] text-white 
          font-bold font-urbanist text-[1.5rem] flex justify-center items-center 
          animate-heartbeat"
        >
         {finalResult}
        </div>
      </div>

      
         <div className="bg-white rounded-lg h-[25rem]">
            <div className="p-4">
              <h1 className="text-[20px] text-center font-bold font-urbanist">Nail Image</h1>
            </div>
            <hr />
            <div className="flex h-[21rem] p-4 overflow-hidden">
              <div className="flex justify-center items-center w-[49%]">
                <img src={nailbedImage} alt="Nail" className="max-h-full object-contain" />
              </div>
              <div className="w-[1px] border h-full"></div>
            
            </div>
          </div>
    </div>
  );
};

export default PatientDetail;
