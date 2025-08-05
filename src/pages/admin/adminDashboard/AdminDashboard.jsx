import React, { useState, useEffect } from "react";
import BloodGroupBarGraph from "../../dashboard/BloodGroupBarGraph.jsx";
import BloodGroupDonutChart from "../../dashboard/BloodGroupDonutChart.jsx";
import PageTitle from "../../../componants/PageTitle.jsx";
import DoctorImage from "../../../assets/DashboardDocterCartoon.png";
import { HoverAnimation } from "../../../componants/CommonStyle.jsx";
import { ArrowBigRightDash } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useGet from "../../../hooks/useGet.js";
const validGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

const AdminDashboard = () => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [bloodSeries, setBloodSeries] = useState([85, 30, 100, 20, 80, 15, 45, 18]);

  // Get logged-in user from localStorage
  useEffect(() => {
    const user =
      // JSON.parse(localStorage.getItem("user")) ||
      JSON.parse(localStorage.getItem("admin"));
    // console.log("LocalStorage User:", user); // Debug
    if (user && user.name) { 
      setUserName(user.name);
    }
  }, []);


  // const { data, loading, error } = useGet("api/admin/doctor/list"); 
  const { data, loading, error } = useGet("api/admin/dashboard");
  useEffect(() => {
    if(data?.bloodGroupStats){
    setBloodSeries(validGroups.map(group => data.bloodGroupStats[group]))

    }
  }, [data])

  //dashboard
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading dashboard: {error}</div>;

  const blocks = data ?? [];
  // console.log(data);


  // Patients section (empty until backend sends data)
  const recentPatients = [];

  return (
    <div>
      <PageTitle title="Admin Dashboard" />

      <div className="lg:flex w-full gap-4 mt-4">
        <div className="lg:w-[60%]">
          {/* Welcome Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 bg-white shadow-lg rounded-[14px] p-6 md:p-10 relative overflow-hidden">
            <div className="flex flex-col justify-center">
              <h1 className="text-[32px] md:text-[45px] font-bold leading-tight">
                Good Morning
                <br />
                <span className="text-red-700">{userName || "Ravi Rana"}</span>
              </h1>
              <p className="text-gray-600 mt-2 text-lg">
                Have a great day ahead!
              </p>
            </div>

            <div className="flex md:justify-end justify-center items-end">
              <img
                className={`w-[180px] md:w-[230px] lg:w-[270px] object-contain ${HoverAnimation}`}
                src={DoctorImage}
                alt="Doctor"
              />
            </div>
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 my-4">
            <div className="bg-white shadow-md rounded-[14px] p-4">
              <h1 className="text-[75px] font-urbanist font-bold text-red-600">
                {data?.totalAnemic}
              </h1>
              <p>Anemic Donor</p>
            </div>
            <div className="bg-white shadow-md rounded-[14px] p-4">
              <h1 className="text-[75px] font-urbanist font-bold text-red-600">
                {data?.totalNonAnemic}
              </h1>
              <p>Non-Anemic Donor</p>
            </div>
            <div className="shadow-md rounded-[14px] bg-gradient-to-br from-red-500 to-red-900 p-4">
              <h1 className="text-[75px] font-urbanist font-bold text-white">
                {data.totalDonor}
              </h1>
              <p className="text-white">Total Donor</p>
            </div>
          </div>

          {/* Recently Visited Patients */}
          <div className="w-full bg-white rounded-[20px] p-4 mb-4">
            <div className="mb-4">
              <h1 className="text-[25px]">Recently Visited Patients</h1>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 bg-gray-50">
                  <tr>
                    <th className="px-6 py-3">Patient Name</th>
                    <th className="px-6 py-3">ID</th>
                    <th className="px-6 py-3">Age</th>
                    <th className="px-6 py-3">Sex</th>
                    <th className="px-6 py-3">Blood Group</th>
                    <th className="px-6 py-3">HB levels</th>
                  </tr>
                </thead>
                <tbody>
                  {recentPatients.length > 0 ? (
                    recentPatients.map((patient, index) => (
                      <tr key={index} className="bg-white">
                        <td className="px-6 py-4 font-medium text-gray-900">
                          {patient.name}
                        </td>
                        <td className="px-6 py-4">{patient.id}</td>
                        <td className="px-6 py-4">{patient.age}</td>
                        <td className="px-6 py-4">{patient.sex}</td>
                        <td className="px-6 py-4">{patient.bloodGroup}</td>
                        <td className="px-6 py-4">{patient.hbValue}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="6"
                        className="px-6 py-4 text-center text-gray-500"
                      >
                        No recent patients found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="w-full lg:w-[40%] rounded-[20px] p-4 mb-4 bg-white">
          <BloodGroupBarGraph categories={validGroups} data={bloodSeries} />
          <BloodGroupDonutChart categories={validGroups} data={bloodSeries} />
        </div>
      </div>

      {/* Block Data */}
      <div className="w-full grid grid-cols-2 mb-10 gap-4 rounded-[24px]">
        {data && data.doctors? (
          data.doctors.map((block, index) => (
            <div
              key={block._id || index}
              className="bg-white rounded-[24px] px-4 py-4"
            >
              <div className="flex justify-between items-center px-1">
                <div className="font-urbanist text-center text-2xl text-red-500 font-semibold">
                  {block.name}
                </div>
                <div
                  onClick={() => navigate(`/admin/block/${block.doctorID}`)}
                  className="cursor-pointer"
                >
                  <ArrowBigRightDash />
                </div>
              </div>

              <div className="grid grid-cols-2 h-[50vh]">
                <div className="flex flex-col justify-center items-center">
                  <p className="text-xl font-bold text-gray-800">Total Donors</p>
                  <p className="text-[5rem] text-red-500 font-bold">
                    {block.totalDonor || 0}
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <p className="text-xl font-bold text-gray-800">Anemic</p>
                  <p className="text-[5rem] text-red-500 font-bold">
                    {block.totalAnemic || 0}
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <p className="text-xl font-bold text-gray-800">Non-Anemic</p>
                  <p className="text-[5rem] text-red-500 font-bold">
                    {block.totalNonAnemic || 0}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-2 text-center text-gray-500 p-8 bg-white rounded-[24px]">
            No block data found.
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;