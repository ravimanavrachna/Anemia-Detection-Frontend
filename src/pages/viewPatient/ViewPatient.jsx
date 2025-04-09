import React, { useState } from 'react';
import PageTitle from '../../componants/PageTitle';
import Pagination from '../../componants/Pagination';

const Donors = [
    { id: 1, name: 'Amit Sharma', date: "12 Aug 2025", donorId: 'D001', age: 28, sex: 'Male', bloodGroup: "A+", HbLevel: 13.5 },
    { id: 2, name: 'Pooja Verma', date: "12 Aug 2025", donorId: 'D002', age: 32, sex: 'Female', bloodGroup: "B+", HbLevel: 12.8 },
    { id: 3, name: 'Rajeev Kumar', date: "12 Aug 2025", donorId: 'D003', age: 45, sex: 'Male', bloodGroup: "O+", HbLevel: 14.2 },
    { id: 4, name: 'Sneha Gupta', date: "12 Aug 2025", donorId: 'D004', age: 25, sex: 'Female', bloodGroup: "AB-", HbLevel: 11.9 },
    { id: 5, name: 'Ankit Joshi', date: "12 Aug 2025", donorId: 'D005', age: 30, sex: 'Male', bloodGroup: "A-", HbLevel: 13.1 },
    { id: 6, name: 'Neha Singh', date: "12 Aug 2025", donorId: 'D006', age: 29, sex: 'Female', bloodGroup: "B-", HbLevel: 12.6 },
    { id: 7, name: 'Ravi Mehta', date: "12 Aug 2025", donorId: 'D007', age: 35, sex: 'Male', bloodGroup: "O-", HbLevel: 14.0 },
    { id: 8, name: 'Divya Rai', date: "12 Aug 2025", donorId: 'D008', age: 27, sex: 'Female', bloodGroup: "A+", HbLevel: 12.4 },
    { id: 9, name: 'Manoj Pandey', date: "12 Aug 2025", donorId: 'D009', age: 42, sex: 'Male', bloodGroup: "AB+", HbLevel: 13.7 },
    { id: 10, name: 'Kiran Yadav', date: "12 Aug 2025", donorId: 'D010', age: 31, sex: 'Female', bloodGroup: "O+", HbLevel: 12.9 },
  ];

const ViewPatient = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDonors = Donors.filter(donors =>
    donors.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (

    <div>
    <PageTitle title="All Donor"/>
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white py-10 mt-4 px-4 mb-10">
      <div className="flex flex-col sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
        {/* Filter Dropdown */}
        <FilterDropdown />
        {/* Search */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <input
            type="text"
            className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search for items"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Table */}
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th className="p-4">S. No.</th>
            <th className="px-6 py-3">Patients Name </th>
            <th className="px-6 py-3">Date </th>

            <th className="px-6 py-3">ID</th>
            <th className="px-6 py-3">Age</th>
            <th className="px-6 py-3">Sex</th>
            <th className="px-6 py-3">Blood Group</th>
            <th className="px-6 py-3">HB levels</th>

          </tr>
        </thead>
        <tbody>
          {filteredDonors.map((donors) => (
            <tr key={donors.id} className="bg-white border-b hover:bg-gray-50">
              <td className="px-6 py-4">{donors.id}</td>
              <td className="px-6 py-4">{donors.name}</td>
              <td className="px-6 py-4">{donors.date}</td>

              <td className="px-6 py-4">{donors.donorId}</td>
              <td className="px-6 py-4">{donors.age}</td>
              <td className="px-6 py-4">{donors.sex}</td>
              <td className="px-6 py-4">{donors.bloodGroup}</td>
              <td className="px-6 py-4">{donors.HbLevel}</td>


            </tr>
          ))}
        </tbody>
      </table>

      <div>
          <Pagination
            currentPage={1}
            totalItems={ 10}
            itemsPerPage={10}
            onPageChange={10}
          />
        </div>
    </div>
    </div>

  );
};

const FilterDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selected, setSelected] = useState("Last 30 days");

  const options = ["Last day", "Last 7 days", "Last 30 days", "Last month", "Last year"];

  return (
    <div className="relative">
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="inline-flex items-center text-gray-500 bg-white border border-gray-300 rounded-lg text-sm px-3 py-1.5"
      >
        <svg className="w-3 h-3 me-3" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
        </svg>
        {selected}
        <svg className="w-2.5 h-2.5 ms-2.5" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
        </svg>
      </button>

      {dropdownOpen && (
        <div className="absolute z-10 mt-2 w-48 bg-white rounded-lg shadow-sm">
          <ul className="p-3 space-y-1 text-sm text-gray-700">
            {options.map((option, index) => (
              <li key={index}>
                <div
                  onClick={() => {
                    setSelected(option);
                    setDropdownOpen(false);
                  }}
                  className="flex items-center p-2 rounded-sm hover:bg-gray-100 cursor-pointer"
                >
                  <input
                    type="radio"
                    checked={selected === option}
                    className="w-4 h-4 text-blue-600"
                    readOnly
                  />
                  <label className="w-full ms-2 text-sm font-medium">{option}</label>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ViewPatient;
