import React from "react";
import PageTitle from "../../componants/PageTitle";
import TitleAndValue from "../../componants/TitleAndValue";

const PatientDetail = () => {
  const UserPersonalDetails = [
    {
      id: 1,
      title: "Name",
      value: "Sahil Kumar",
    },
    {
      id: 2,
      title: "Roll No. / Employee ID",
      value: "3456789876545",
    },
    {
      id: 3,
      title: "ID",
      value: "+91 9898989839",
    },
    {
      id: 4,
      title: "Mobile Number",
      value: "+91 9898989839",
    },
    {
      id: 5,
      title: "HB Value",
      value: "12.5",
    },
  ];

  const userMedicalDetail = [
    {
      id: 1,
      title: "Age",
      value: "23",
    },
    {
      id: 2,
      title: "Age Group",
      value: "18-20 year",
    },

    {
      id: 3,
      title: "Sex",
      value: "Male",
    },
    {
      id: 4,
      title: "Height",
      value: "170cm",
    },
    {
      id: 5,
      title: "Weight",
      value: "65kg",
    },
  ];

  return (
    <div>
      <PageTitle title="Sahil Kumar" />

      <div className="relative mb-10">
        <div className="grid grid-cols-2 gap-10">
          <div className="bg-white rounded-lg h-[25rem]">
            <div className="p-4">
              <h1 className="text-[20px] font-bold font-urbanist">
                Persnal Details
              </h1>
            </div>
            <hr />

            <div className="p-4">
              {UserPersonalDetails?.map((item) => {
                return (
                  <TitleAndValue title={item?.title} value={item?.value} />
                );
              })}
            </div>
          </div>
         
          <div className="bg-white rounded-lg h-[25rem] ">
              
          <div className="p-4">
              <h1 className="text-[20px] font-bold text-center font-urbanist">
                Palm & Nailbed Images
              </h1>
            </div>
            <hr />

            <div className="flex h-[21rem] p-4 overflow-hidden">
              <div className="w-[49%]"></div>
              <div className="w-[1px] border h-[100%]"></div>
              <div className="w-[49%] pl-4 "></div>
            </div>

          </div>
          <div className="bg-white rounded-lg h-[25rem]">
            <div className="p-4">
              <h1 className="text-[20px] font-bold font-urbanist">
                Medical Details
              </h1>
            </div>
            <hr />

            <div className="p-4">
              {userMedicalDetail?.map((item) => {
                return (
                  <TitleAndValue title={item?.title} value={item?.value} />
                );
              })}
            </div>
          </div>
          <div className="bg-white rounded-lg h-[25rem]">
          <div className="p-4">
              <h1 className="text-[20px] text-center font-bold font-urbanist">
                Eyes Images
              </h1>
            </div>
            <hr />

            <div className="flex h-[21rem] p-4 overflow-hidden">
              <div className="w-[49%]"></div>
              <div className="w-[1px] border h-[100%]"></div>
              <div className="w-[49%] pl-4 "></div>
            </div>
          </div>
        </div>
        <div
          className="absolute w-[12rem] h-[12rem] rounded-full 
                  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                  bg-red-600 border-[1rem] border-[#F6EDED] text-white 
                  font-bold font-urbanist text-[1.5rem] flex justify-center items-center 
                  animate-heartbeat"
        >
          Non Anamic
        </div>
      </div>
    </div>
  );
};

export default PatientDetail;
