import React, { useEffect, useState } from "react";
import useGet from "../../../hooks/useGet";
// import { apiHost } from "../../../config";
import usePatch from "../../../hooks/usePatch";

const ApprovedPage = () => {
  const limit = 1000;
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  // const url = ${apiHost}/api/admin/approvals;

  const { data, loading, error } = useGet("api/admin/doctor/approval/list", {
    params: { limit, offset },
  });

  const { patchData, loading: patchLoading } = usePatch("api/admin/doctor/approve");

  // console.log("data", data); for checking purpose only.

  const [localData, setLocalData] = useState([]);

  useEffect(() => {
    if (data) {
      const normalized = (data?.results || data || []).map((item) => ({
        ...item,
        status: item.adminVerified === undefined ? false : item.adminVerified,
      }));
      setLocalData(normalized);
    }
  }, [data]);

  // const toggleStatus = (index) => {
  //   const updated = [...localData];
  //   const item = updated[index];
  //   item.adminVerified = !item.adminVerified;
  //   item.isVerified = !item.isVerified;
  //   setLocalData(updated);
  // };

  const handleAdminVerify = async (doctorID, status) => {
    const payload = { doctorID, status };
    const result = await patchData(payload);

    if (result && !result.error) {
      const updated = localData.map((item) =>
        item.doctorID === doctorID ? { ...item, status } : item
      );
      setLocalData(updated);
    } else {
      alert("Failed to update status");
    }
  };

  // const toggleStatusYes = (index) => {
  //   const updated = [...localData];
  //   const item = updated[index];
  //   item.adminVerified = true;
  //   item.isVerified = true;
  //   setLocalData(updated);
  // };

  // const toggleStatusNo = (index) => {
  //   const updated = [...localData];
  //   const item = updated[index];
  //   item.adminVerified = false;
  //   item.isVerified = false;
  //   setLocalData(updated);
  // };

  if (loading) return <div>Loading approvals...</div>;
  if (error) return <div>Error loading data: {error}</div>;

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th className="px-6 py-3">S.No</th>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Date</th>
            <th className="px-6 py-3">Doctor ID</th>
            <th className="px-6 py-3">Block</th>
            <th className="px-6 py-3 text-center">Status</th>
          </tr>
        </thead>
        <tbody>
          {localData.slice(0, limit).map((item, index) => (
            <tr
              key={item._id || index}
              className="bg-white border-b hover:bg-gray-50"
            >
              <td className="px-6 py-4">{offset + index + 1}</td>
              <td className="px-6 py-4">{item.name || "-"}</td>
              <td className="px-6 py-4">
                {item.createdAt
                  ? new Date(item.createdAt).toLocaleDateString()
                  : "-"}
              </td>
              <td className="px-6 py-4">{item.doctorID || "-"}</td>
              <td className="px-6 py-4">{item.block || "-"}</td>

              <td className="px-6 py-4">
                <div className="flex gap-2">
                  <button
                    onClick={() => handleAdminVerify(item.doctorID, true)}
                    className={`px-4 py-1 rounded-md text-white ${
                      item.status === true ? "bg-green-700" : "bg-gray-400"
                    }`}
                    disabled={patchLoading}
                  >
                    Yes
                  </button>

                  <button
                    onClick={() => handleAdminVerify(item.doctorID, false)}
                    className={`px-4 py-1 rounded-md text-white ${
                      item.status === false ? "bg-red-700" : "bg-gray-400"
                    }`}
                    disabled={patchLoading}
                  >
                    No
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-center mt-4">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          className="px-4 py-2 mx-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Prev
        </button>
        <button
          disabled={localData.length < limit}
          onClick={() => setPage((p) => p + 1)}
          className="px-4 py-2 mx-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ApprovedPage;