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
              <div className="w-[49%]">
                <img src="https://www.researchgate.net/publication/347368429/figure/fig1/AS:971980811558912@1608749692087/Multiple-ill-defined-bilaterally-symmetrical-hyperpigmented-discrete-round-macules-of.ppm" alt="" />
              </div>
              <div className="w-[1px] border h-[100%]"></div>
              <div className="w-[49%] flex items-center justify-center pl-4 ">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV4PteKH4i1h1LZXMKic1okJORDl1O2SP1UQ&s" alt="" />
              </div>
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
              <div className=" flex justify-center items-center w-[49%]">
                <img src="data:image/jpeg;base64,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" alt="" />
              </div>
              <div className="w-[1px] border h-[100%]"></div>
              <div className="w-[49%] flex justify-center items-center pl-4 ">
                <img src="data:image/jpeg;base64,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" alt="" />
              </div>
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
          Non Anaemic
        </div>
      </div>
    </div>
  );
};

export default PatientDetail;
