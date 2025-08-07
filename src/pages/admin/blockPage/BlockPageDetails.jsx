import React, { useEffect, useState } from "react";
import PageTitle from "../../../componants/PageTitle.jsx";
import DoctorImage from "../../../assets/DashboardDocterCartoon.png";
import BloodGroupBarGraph from "../../dashboard/BloodGroupBarGraph.jsx";
import BloodGroupDonutChart from "../../dashboard/BloodGroupDonutChart.jsx";
import { HoverAnimation } from "../../../componants/CommonStyle";
import { useParams } from "react-router-dom";
import useGet from "../../../hooks/useGet";
const validGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

const BlockPageDetails = () => {
  const { doctorID } = useParams();
  const { data, loading, error } = useGet(`api/admin/doctor/dashboard/${doctorID}`);
    const [bloodSeries, setBloodSeries] = useState([85, 30, 100, 20, 80, 15, 45, 18]);
  
  // console.log(data);
   useEffect(() => {
      if(data?.bloodGroupStats){
      setBloodSeries(validGroups.map(group => data.bloodGroupStats[group]))
  
      }
    }, [data])
  if (loading) return <div>Loading block details...</div>;
  if (error) return <div>Error loading block details: {error}</div>;

  return (
    <div>
      <PageTitle title="Block Page Details" />

      <div className="lg:flex w-full gap-4 mt-4">
        <div className="lg:w-[60%]">
          <div className="grid grid-cols-1 md:grid-cols-2 bg-white shadow-lg rounded-[14px] p-6 md:p-10 relative overflow-hidden">
            {/* Left Side Text */}
            <div className="flex flex-col justify-center">
              <h1 className="text-[32px] md:text-[45px] font-bold leading-tight">
                Good Morning
                <br />
                <span className="text-red-700">
                  {data.doctor.name || "Block Name"}
                </span>
              </h1>
              <p className="text-gray-600 mt-2 text-lg">
                Have a great day ahead!
              </p>
            </div>

            {/* Right Side Image */}
            <div className="flex md:justify-end justify-center  items-end">
              <img
                className={`w-[180px] md:w-[230px] lg:w-[270px] object-contain ${HoverAnimation}`}
                src={DoctorImage}
                alt="Doctor"
              />
            </div>
          </div>

          <div className="lg:grid lg:grid-cols-3 grid grid-cols-1 sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 gap-4  my-4">
            <div className={`bg-white shadow-md rounded-[14px] p-4 `}>
              <h1 className="text-[75px] font-urbanist font-bold text-red-600">
                {data?.totalAnemic || 0}
              </h1>
              <p>Anemic Donor</p>
            </div>
            <div className={`bg-white shadow-md rounded-[14px] p-4 `}>
              <h1 className="text-[75px] font-urbanist font-bold text-red-600">
                {data?.totalNonAnemic || 0}
              </h1>

              <p>Non- Anemic Donor</p>
            </div>
            <div className=" shadow-md rounded-[14px] bg-gradient-to-br from-red-500 to-red-900 p-4">
              <h1 className="text-[75px] font-urbanist font-bold text-white">
                {data?.totalDonor || 0}
              </h1>

              <p className="text-white">Total Donor</p>
            </div>
          </div>

          <div className="w-full bg-white rounded-[20px] p-4 mb-4">
            <div className="mb-4">
              <h1 className="text-[25px]"> Recently Visited Patients</h1>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 ">
                <thead className="text-xs text-gray-700 bg-gray-50 ">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Patients Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Age
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Sex
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Blood Group
                    </th>
                    <th scope="col" className="px-6 py-3">
                      HB levels
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data?.patients?.length > 0 ? (
                    data.patients.map((patient, idx) => (
                      <tr key={idx} className="bg-white">
                        <td>{patient.name}</td>
                        <td>{patient.id}</td>
                        <td>{patient.age}</td>
                        <td>{patient.sex}</td>
                        <td>{patient.bloodGroup}</td>
                        <td>{patient.hbLevel}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="text-center">
                        No patients found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[40%] rounded-[20px] p-4 mb-4 bg-white">
          <BloodGroupBarGraph categories={validGroups} data={bloodSeries} />
          <BloodGroupDonutChart categories={validGroups} data={bloodSeries} />
        </div>
      </div>
    </div>
  );
};

export default BlockPageDetails;