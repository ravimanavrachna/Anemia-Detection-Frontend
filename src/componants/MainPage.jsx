 import React, { useEffect, useState } from "react";
import useGet from "../hooks/useGet"; // adjust path if different

const MainPage = () => {


  // Overlay component

  return (
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
};

export default MainPage;
