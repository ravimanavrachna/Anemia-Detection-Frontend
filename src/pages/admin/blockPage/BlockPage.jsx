// import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { ArrowBigRightDash } from "lucide-react";
import PageTitle from "../../../componants/PageTitle";
import useGet from "../../../hooks/useGet"; // 👈 your GET hook

const BlockPage = () => {
  const navigate = useNavigate();

  // fetch data from backend
  const { data, loading, error } = useGet("api/admin/doctor/list"); // 👈 update API endpoint as needed

  if (loading) return <div>Loading blocks...</div>;
  if (error) return <div>Error loading blocks: {error.message}</div>;

  return (
    <div>
      <PageTitle title="Blocks" />

      <div className="w-full grid grid-cols-2 gap-4 mb-10 rounded-[24px]">
        {data?.map((block) => (
          <div
            key={block.doctorID}
            className="bg-white rounded-[24px] px-4 py-4"
          >
            <div className="flex justify-between items-center px-1">
              <div className="font-urbanist text-center text-2xl text-red-500 font-semibold">
                {block.name || "Block Name"}
              </div>
              <div onClick={() => navigate(`/admin/block/${block.doctorID}`)}>
                <ArrowBigRightDash />
              </div>
            </div>

            <div className="grid grid-cols-2 h-[50vh]">
              <div className="flex flex-col justify-center items-center">
                <p className="text-xl font-bold text-gray-800">Registered</p>
                <p className="text-[5rem] text-red-500 font-bold">
                  {block.totalRegistered || 0}
                </p>
              </div>

              <div className="flex flex-col justify-center items-center">
                <p className="text-xl font-bold text-gray-800">Visited</p>
                <p className="text-[5rem] text-red-500 font-bold">
                  {block.totalVisited || 0}
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
        ))}
      </div>
    </div>
  );
};

export default BlockPage;