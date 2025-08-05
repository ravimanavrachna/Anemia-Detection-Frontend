import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import useGet from '../../../hooks/useGet';
import PageTitle from '../../../componants/PageTitle';
import Pagination from '../../../componants/Pagination';
import { calculateAge } from '../../../utils/dateFormatter';

const AdminAllDonor = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('Last 30 days');
 const navigate = useNavigate()


  const limit = pageSize;
  const offset = (currentPage - 1) * pageSize;
//   const { data } = useGet(`api/donor/list?limit=${limit}&offset=${offset}`);
  const { data } = useGet(`api/admin/donor/list`);
  const donors = data?.donors?.donorList || [];

  const searchedDonors = donors.filter((donor) =>
    donor.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const paginatedDonors = searchedDonors.slice(offset, offset + limit);
// console.log(data);

  return (
    <div>
      <PageTitle title="All Donor" />

      <div className="relative  shadow-md sm:rounded-lg bg-white py-10 mt-4 px-4 mb-10">
        <div className="flex flex-col sm:flex-row flex-wrap space-y-4 sm:space-y-0  sm:items-center justify-between pb-4">
          {/* Filter Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="inline-flex items-center text-gray-500 bg-white border border-gray-300 rounded-lg text-sm px-3 py-1.5"
            >
              <svg className="w-3 h-3 me-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
              </svg>
              {selectedFilter}
              <svg className="w-2.5 h-2.5 ms-2.5" fill="none" viewBox="0 0 10 6">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            {dropdownOpen && (
              <div className="absolute z-10 mt-2 w-48 bg-white rounded-lg shadow-sm">
                <ul className="p-3 space-y-1 text-sm text-gray-700">
                  {['Last day', 'Last 7 days', 'Last 30 days', 'Last month', 'Last year'].map(
                    (option, index) => (
                      <li key={index}>
                        <div
                          onClick={() => {
                            setSelectedFilter(option);
                            setDropdownOpen(false);
                          }}
                          className="flex items-center p-2 rounded-sm hover:bg-gray-100 cursor-pointer"
                        >
                          <input
                            type="radio"
                            checked={selectedFilter === option}
                            className="w-4 h-4 text-blue-600"
                            readOnly
                          />
                          <label className="w-full ms-2 text-sm font-medium">{option}</label>
                        </div>
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}
          </div>

          {/* Search Input */}
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
              placeholder="Search for patient"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

       <div className='w-full overflow-x-auto'>
         <table className="w-full  text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th className="p-4">S. No.</th>
              <th className="px-6 py-3">Patient Name</th>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Donor ID</th>
              <th className="px-6 py-3">Age</th>
              <th className="px-6 py-3">Sex</th>
              <th className="px-6 py-3">Blood Group</th>
              <th className="px-6 py-3">HB Levels</th>
            </tr>
          </thead>
          <tbody>

          
            {data&&data.map((donor, index) => (
              <tr key={donor.id} onClick={() =>navigate(`/donor/donor-detail/${donor.donorId}`)} className="bg-white border-b hover:bg-gray-50">
                <td className="px-6 py-4">{offset + index + 1}</td>
                <td className="px-6 py-4">{donor.name || '-'}</td>
                <td className="px-6 py-4">{donor.registrationDate || '-'}</td>
                <td className="px-6 py-4">{donor.donorId || '-'}</td>
                <td className="px-6 py-4">{calculateAge(donor.dob) || '-'}</td>
                <td className="px-6 py-4">{donor.sex || '-'}</td>
                <td className="px-6 py-4">{donor.bloodGroup || '-'}</td>
                <td className="px-6 py-4">{donor.hBValue || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
       </div>

        <Pagination
          currentPage={currentPage}
          totalItems={searchedDonors.length || 0}
          itemsPerPage={pageSize}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default AdminAllDonor;
