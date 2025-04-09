import React from 'react';

const TitleAndValue = ({ title, value }) => {
  return (
    <div className="flex items-center justify-between bg-white shadow-sm rounded-xl px-4 py-3 mb-3 border border-[#F6EDED]">
      <p className="w-[40%] text-[#D32F2F] font-semibold text-base">{title}</p>
      <span className="w-[5%] text-center text-gray-400 font-bold">-</span>
      <p className="w-[55%] text-[#222222] font-medium text-base">{value}</p>
    </div>
  );
};

export default TitleAndValue;
