import React from "react";
import { CommonBgColor } from "./CommonStyle";

const Pagination = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  // Calculate total pages based on total items and items per page
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Handle page change (ensuring the new page is within valid range)
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="p-4 bg-white border-t border-gray-200">
      <div className="flex justify-between items-center mt-4">
        {/* Previous Button */}
        <button
          className="px-4 py-2 bg-gray-200 rounded-md"
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </button>

        {/* Page Info */}
        <p>
          Page {currentPage} of {totalPages}
        </p>

        {/* Next Button */}
        <button
          className="px-4 py-2 bg-gray-200 rounded-md"
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>

      {/* Page Number Buttons (Optional for quick page access) */}
      <div className="flex justify-center mt-4 gap-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-3 py-1 rounded-md ${
              currentPage === index + 1
                ? `bg-red-500 text-white`
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
