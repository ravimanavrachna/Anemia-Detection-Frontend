import React from "react";
import PageTitle from "../../componants/PageTitle";
import TitleAndValue from "../../componants/TitleAndValue";
import useGet from "../../hooks/useGet";
import { useParams } from "react-router";

const PatientDetail = () => {
  const { donorID } = useParams();
  const { data } = useGet(`api/donor/donor/${donorID}`);
  const imgShow = `http://localhost:1010/`

  const UserPersonalDetails = [
    { id: 1, title: "Name", value: data?.donor?.name },
    { id: 2, title: "Roll No. / Employee ID", value: data?.donor?.empID },
    { id: 3, title: "ID", value: data?.donor?.donorID },
    { id: 4, title: "Mobile Number", value: data?.donor?.mobile },
    { id: 5, title: "HB Value", value: data?.donor?.hBValue },
  ];

  const userMedicalDetail = [
    { id: 1, title: "Age", value: data?.donor?.age },
    { id: 2, title: "Age Group", value: data?.donor?.ageGroup },
    { id: 3, title: "Sex", value: data?.donor?.sex },
    { id: 4, title: "Height", value: data?.donor?.height },
    { id: 5, title: "Weight", value: data?.donor?.weight },
  ];

  const palmImage = imgShow + data?.donor?.allImages?.handImage?.filename || "";
  
  const nailbedImage =  imgShow + data?.donor?.allImages?.nailbedImage?.filename || "";
  const leftEyeImage =imgShow + data?.donor?.allImages?.leftEyeImages?.filename || "";
  const rightEyeImage =imgShow + data?.donor?.allImages?.rightEyeImages?.filename || "";
  console.log("asdfasfd" , palmImage , nailbedImage , leftEyeImage , rightEyeImage)

  return (
    <div>
      <PageTitle title={`${data?.donor?.name || "NA"} ${!data?.donor?.donorID || ""}`} />

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
                <img src={palmImage} alt="Palm" className="max-h-full object-contain" />
              </div>
              <div className="w-[1px] border h-full"></div>
              <div className="flex justify-center items-center w-[49%] pl-4">
                <img src={nailbedImage} alt="Nailbed" className="max-h-full object-contain" />
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
        </div>

        {/* Heartbeat Badge */}
        <div
          className="lg:absolute lg:w-[12rem] lg:h-[12rem] lg:rounded-full 
          lg:top-1/2 lg:left-1/2 transform -translate-x-1/2 -translate-y-1/2
          bg-red-600 border-[1rem] border-[#F6EDED] text-white 
          font-bold font-urbanist text-[1.5rem] flex justify-center items-center 
          animate-heartbeat"
        >
          Non Anaemic
        </div>
      </div>
    </div>
  );
};

export default PatientDetail;
