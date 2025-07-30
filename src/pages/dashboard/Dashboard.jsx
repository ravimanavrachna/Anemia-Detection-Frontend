import React from 'react'
import PageTitle from '../../componants/PageTitle'
import { DashboardDoctorImg } from '../../componants/IconsSVG'
import DoctorImage from '../../assets/DashboardDocterCartoon.png'
import BloodGroupBarGraph from './BloodGroupBarGraph'
import BloodGroupDonutChart from './BloodGroupDonutChart'
import { HoverAnimation } from '../../componants/CommonStyle'

const Dashboard = () => {
  return (
    <div>
        <PageTitle title="Dashboard"/>

        <div className='lg:flex w-full gap-4 mt-4'>
            <div className='lg:w-[60%]'>
            <div className="grid grid-cols-1 md:grid-cols-2 bg-white shadow-lg rounded-[14px] p-6 md:p-10 relative overflow-hidden">
  {/* Left Side Text */}
  <div className="flex flex-col justify-center">
    <h1 className="text-[32px] md:text-[45px] font-bold leading-tight">
      Good Morning<br />
      <span className="text-red-700">Ravi Rana</span>
    </h1>
    <p className="text-gray-600 mt-2 text-lg">Have a great day ahead!</p>
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

                <div className='lg:grid lg:grid-cols-3 grid grid-cols-1 sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 gap-4  my-4'>
                <div className={`bg-white shadow-md rounded-[14px] p-4 }`}>
                        <h1 className='text-[75px] font-urbanist font-bold text-red-600'>
                            30
                        </h1>

                        <p>
                        Anemic Donor
                        </p>
                    </div>
                    <div className={`bg-white shadow-md rounded-[14px] p-4 `}>
                        <h1 className='text-[75px] font-urbanist font-bold text-red-600'>
                            20
                        </h1>

                        <p>
                        Non- Anemic Donor
                        </p>
                    </div>
                    <div className=' shadow-md rounded-[14px] bg-gradient-to-br from-red-500 to-red-900 p-4'>
                        <h1 className='text-[75px] font-urbanist font-bold text-white'>
                            50
                        </h1>

                        <p className='text-white'>
                        Total Donor 
                        </p>
                    </div>
                </div>

                <div className='w-full bg-white rounded-[20px] p-4 mb-4'> 
                         <div className='mb-4'>
                        <h1 className='text-[25px]'> Recently Visited Patients</h1>
                         </div>  

                         <div class="overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 ">
        <thead class="text-xs text-gray-700 bg-gray-50 ">
            <tr>
                <th scope="col" class="px-6 py-3">
                Patients Name 
                </th>
                <th scope="col" class="px-6 py-3">
                ID
                </th>
                <th scope="col" class="px-6 py-3">
                Age
                </th>
                <th scope="col" class="px-6 py-3">
                Sex
                </th>
                <th scope="col" class="px-6 py-3">
                Blood Group
                </th>
                <th scope="col" class="px-6 py-3">
                HB levels
                </th>
            </tr>
        </thead>
        <tbody>
       
      
        <tr class="bg-white">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Ravi
                </th>
                <td class="px-6 py-4">
                    89878979897
                </td>
                <td class="px-6 py-4">
                    25
                </td>
                <td class="px-6 py-4">
                    Male
                </td>
                <td class="px-6 py-4">
                    AB
                </td>
                <td class="px-6 py-4">
                    13.5
                </td>
            </tr>

            
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Ravi
                </th>
                <td class="px-6 py-4">
                    89878979897
                </td>
                <td class="px-6 py-4">
                    25
                </td>
                <td class="px-6 py-4">
                    Male
                </td>
                <td class="px-6 py-4">
                    AB
                </td>
                <td class="px-6 py-4">
                    13.5
                </td>
            </tr>
            
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Ravi
                </th>
                <td class="px-6 py-4">
                    89878979897
                </td>
                <td class="px-6 py-4">
                    25
                </td>
                <td class="px-6 py-4">
                    Male
                </td>
                <td class="px-6 py-4">
                    AB
                </td>
                <td class="px-6 py-4">
                    13.5
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Ravi
                </th>
                <td class="px-6 py-4">
                    89878979897
                </td>
                <td class="px-6 py-4">
                    25
                </td>
                <td class="px-6 py-4">
                    Male
                </td>
                <td class="px-6 py-4">
                    AB
                </td>
                <td class="px-6 py-4">
                    13.5
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Ravi
                </th>
                <td class="px-6 py-4">
                    89878979897
                </td>
                <td class="px-6 py-4">
                    25
                </td>
                <td class="px-6 py-4">
                    Male
                </td>
                <td class="px-6 py-4">
                    AB
                </td>
                <td class="px-6 py-4">
                    13.5
                </td>
            </tr>
        </tbody>
    </table>
</div>
                </div>
            </div>
            <div className='w-full lg:w-[40%] rounded-[20px] p-4 mb-4 bg-white'>

                <BloodGroupBarGraph/>
                <BloodGroupDonutChart/>
            </div>
        </div>

      
    </div>
  )
}

export default Dashboard
