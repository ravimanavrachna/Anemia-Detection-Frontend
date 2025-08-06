import React, { useEffect, useState } from "react";
import PageTitle from "../../componants/PageTitle";
import TitleAndValue from "../../componants/TitleAndValue";
import useGet from "../../hooks/useGet";
import { formatDate } from "../../utils/dateFormatter";
import { useParams } from "react-router";
import usePatch from "../../hooks/usePatch";
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
  const { data,fetchdata } = useGet(`api/donor/${donorId}`);
  const {patchData} =usePatch(`api/donor/hb`)
  const [UserPersonalDetails, SetUserPersonalDetails] = useState(
    InitialUserPersonalDetails
  );
  const [userMedicalDetail, SetuserMedicalDetail] = useState(
    InitialuserMedicalDetail
  );
  const [nailbedImage, setNailbedImage] = useState("");
  const [leftPalmImage, setLeftPalmImage] = useState("");
  const [rightPalmImage, setRightPalmImage] = useState("");
  const [leftEyeImage, setLeftEyeImage] = useState("");
  const [rightEyeImage, setRightEyeImage] = useState("");
  const [finalResult, setFinalResult] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [hbValue, setHbValue] = useState("");

  useEffect(() => {
    // console.log(data);
    setFinalResult(data?.final_prediction_3_models_combined?.prediction);
    setNailbedImage(data?.detailed_results?.nail_analysis?.image);
    setLeftPalmImage(data?.detailed_results?.palm_analysis?.left_palm?.image);
    setRightPalmImage(data?.detailed_results?.palm_analysis?.right_palm?.image);
    setLeftEyeImage(data?.detailed_results?.eye_analysis?.left_eye.image);
    setRightEyeImage(data?.detailed_results?.eye_analysis?.right_eye.image);
    SetUserPersonalDetails([
      { id: 1, title: "Name", value: data?.name },
      { id: 2, title: "Roll No. / Employee ID", value: data?.employeeId },
      { id: 3, title: "ID", value: data?.donorId },
      { id: 4, title: "Mobile Number", value: data?.mobileNo },
      { id: 5, title: "HB Value", value: data?.HbValue },
    ]);
    SetuserMedicalDetail([
      { id: 1, title: "DOB", value: formatDate(data?.dob) },
      { id: 2, title: "Blood Group", value: data?.bloodGroup },
      { id: 3, title: "Sex", value: data?.sex },
      { id: 4, title: "Height", value: data?.height },
      { id: 5, title: "Weight", value: data?.weight },
    ]);
    // setHbValue(data?.HbValue)    
  }, [data]);

  const handleUpdate = async () => {
    try {
      await patchData({HbValue:hbValue,_id:data?._id})
      await fetchdata()
    } catch (error) {
      console.log(error);
      
    }
    setShowModal(false);
  };
  return (
    <div>
      <PageTitle title={`${data?.name || "NA"} ${!data?.donorId || ""}`} />

        <div
          className="lg:hidden block w-full   rounded-full transform  bg-red-600 border-[1rem] border-[#F6EDED] text-white 
          font-bold font-urbanist text-[1.5rem] flex items-center justify-center "
        >
          {finalResult}
        </div>

      <div className="relative mb-10">
        <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-10">
          {/* Personal Details */}
          <div className="bg-white rounded-lg ">
            <div className="p-4">
              <h1 className="text-[20px] font-bold font-urbanist">
                Personal Details
              </h1>
            </div>
            <hr />
            <div className="p-4">
              {UserPersonalDetails.map((item) => (
                <TitleAndValue
                  key={item.id}
                  title={item.title}
                  value={item.value}
                />
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg h-[25rem]">
            <div className="px-4 py-3">
              {/* Header */}
              <div className="flex justify-between items-center">
                <h1 className="text-[20px] font-bold font-urbanist">
                  Medical Details
                </h1>
                <button
                  onClick={() => setShowModal(true)}
                  type="button"
                  class="text-white bg-gradient-to-r from-red-500 to-red-900 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  {" "}
                  Add Hb Value
                </button>
                {/* <p
          className="cursor-pointer text-blue-600 hover:underline"
          onClick={() => setShowModal(true)}
        >
          Add Hb Value
        </p> */}
              </div>

              {/* Modal */}
              {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                  <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-md p-6">
                    <h2 className="text-xl text-red-600 font-bold mb-4">
                      Enter Hb Value
                    </h2>
                    <input
                      type="text"
                      value={hbValue}
                      onChange={(e) => setHbValue(e.target.value)}
                      className="w-full border border-gray-300 rounded-md p-2 mb-4"
                      placeholder="Enter Hb value"
                    />
                    <div className="flex justify-end space-x-3">
                      <button
                        onClick={() => setShowModal(false)}
                        className="text-white bg-gradient-to-r from-gray-400 to-gray-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleUpdate}
                        className="text-white bg-gradient-to-r from-red-500 to-red-900 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <hr />
            <div className="p-4">
              {userMedicalDetail.map((item) => (
                <TitleAndValue
                  key={item.id}
                  title={item.title}
                  value={item.value}
                />
              ))}
            </div>
          </div>

          {/* Palm & Nailbed Images */}
          <div className="bg-white rounded-lg h-[25rem]">
            <div className="p-4">
              <h1 className="text-[20px] font-bold text-center font-urbanist">
                Left Palm 
              </h1>
            </div>
            <hr />
            <div className="flex h-[21rem] p-4 overflow-hidden">
              <div className="flex justify-center items-center w-[49%]">
                <img
                  src={leftPalmImage}
                  alt="Palm"
                  className="max-h-full object-contain"
                />
              </div>
              <div className="w-[1px] border h-full"></div>
              <div className="flex justify-center items-center w-[49%] pl-4">
                <img
                  src={rightPalmImage}
                  alt="Nailbed"
                  className="max-h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Medical Details */}

          {/* Eyes Images */}
          <div className="bg-white rounded-lg h-[25rem]">
            <div className="p-4">
              <h1 className="text-[20px] text-center font-bold font-urbanist">
                Right Palm
              </h1>
            </div>
            <hr />
            <div className="flex h-[21rem] p-4 overflow-hidden">
              <div className="flex justify-center items-center w-[49%]">
                <img
                  src={leftEyeImage}
                  alt="Left Eye"
                  className="max-h-full object-contain"
                />
              </div>
              <div className="w-[1px] border h-full"></div>
              <div className="flex justify-center items-center w-[49%] pl-4">
                <img
                  src={rightEyeImage}
                  alt="Right Eye"
                  className="max-h-full object-contain"
                />
              </div>
            </div>
          </div>
          {/* Nail Images */}
        </div>

        {/* Heartbeat Badge */}
       <div className="hidden lg:block">
         <div
          className=" lg:absolute  rounded-full lg:w-[12rem] lg:h-[12rem] lg:rounded-full 
          lg:top-1/2 lg:left-1/2 transform -translate-x-1/2 -translate-y-1/2
          bg-red-600 border-[1rem] border-[#F6EDED] text-white 
          font-bold font-urbanist text-[1.5rem] flex justify-center items-center 
          animate-heartbeat"
        >
          {finalResult}
        </div>
       </div>
      </div>

<div className="grid grid-cols-1 lgL:grid lg:grid-cols-2 gap-10">
                  <div className="bg-white rounded-lg h-[25rem]">
            <div className="p-4">
              <h1 className="text-[20px] font-bold text-center font-urbanist">
                Left Eye
              </h1>
            </div>
            <hr />
            <div className="flex h-[21rem] p-4 overflow-hidden">
              <div className="flex justify-center items-center w-[49%]">
                <img
                  src={leftPalmImage}
                  alt="Palm"
                  className="max-h-full object-contain"
                />
              </div>
              <div className="w-[1px] border h-full"></div>
              <div className="flex justify-center items-center w-[49%] pl-4">
                <img
                  src={rightPalmImage}
                  alt="Nailbed"
                  className="max-h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Medical Details */}

          {/* Eyes Images */}
          <div className="bg-white rounded-lg h-[25rem]">
            <div className="p-4">
              <h1 className="text-[20px] text-center font-bold font-urbanist">
                Right Eye
              </h1>
            </div>
            <hr />
            <div className="flex h-[21rem] p-4 overflow-hidden">
              <div className="flex justify-center items-center w-[49%]">
                <img
                  src={leftEyeImage}
                  alt="Left Eye"
                  className="max-h-full object-contain"
                />
              </div>
              <div className="w-[1px] border h-full"></div>
              <div className="flex justify-center items-center w-[49%] pl-4">
                <img
                  src={rightEyeImage}
                  alt="Right Eye"
                  className="max-h-full object-contain"
                />
              </div>
            </div>
          </div>

     
</div>

 <div className="bg-white rounded-lg mt-10 h-[25rem]">
        <div className="p-4">
          <h1 className="text-[20px] text-center font-bold font-urbanist">
            Nail Image
          </h1>
        </div>
        <hr />
        <div className="flex h-[21rem] p-4 overflow-hidden">
          <div className="flex justify-center items-center w-[49%]">
            <img
              src={nailbedImage}
              alt="Nail"
              className="max-h-full object-contain"
            />
          </div>
          <div className="w-[1px] border h-full"></div>
        </div>
      </div>
    </div>
  );
};

export default PatientDetail;
