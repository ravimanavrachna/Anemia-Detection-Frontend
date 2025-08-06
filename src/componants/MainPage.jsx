 import React, { useEffect, useState } from "react";
import useGet from "../hooks/useGet"; // adjust path if different

const MainPage = () => {
  const { data, loading, error } = useGet("api/admin/doctor/approves"); // pass your actual endpoint
  const [hasAccess, setHasAccess] = useState(false);

  // Update access state based on response
  useEffect(() => {
    if (data?.access === true) {
      setHasAccess(true);
    } else {
      setHasAccess(false);
    }
  }, [data]);

  // Overlay component
  const AccessOverlay = () => (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-90 text-white px-4 text-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">You are not authorized</h1>
      <p className="text-lg md:text-xl mb-6">Wait for admin approval...</p>
      <button
        onClick={() => window.location.reload()}
        className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-white text-lg font-semibold transition"
      >
        Refresh Page
      </button>
    </div>
  );

  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Show overlay only when loading is false and no access */}
      {!loading && !hasAccess && <AccessOverlay />}

      {/* Show actual content only when access is granted */}
      {hasAccess && (
        <div className="p-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to the Main Page</h1>
          <p className="text-lg text-gray-700">You have been approved by the admin.</p>
        </div>
      )}

      {/* Optional: Loading State */}
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-40 text-gray-800 text-xl">
          Loading...
        </div>
      )}

      {/* Optional: Error State */}
      {error && (
        <div className="fixed inset-0 flex items-center justify-center bg-red-600 text-white text-xl z-50">
          Error: {error}
        </div>
      )}
    </div>
  );
};

export default MainPage;
