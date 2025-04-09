import React from 'react'
import PageTitle from '../../componants/PageTitle'
import ImageUploadBox from '../addPatient/ImageUploadBox'
import StepperProgress from '../../componants/StepperProgress.jsx'
import { useNavigate } from 'react-router'

const AddPatient = () => {
  
  const navigate = useNavigate()

  return (
    <div>
     <PageTitle title="Add Donor"/>

     {/* <StepperProgress/> */}

     <div className='bg-white rounded-lg p-4 mt-4 font-urbanist'>
      <h2 className="text-3xl font-bold mb-6 text-center text-red-500">
        Add the Donor  Details
      </h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label className="block text-red-800 font-semibold mb-1">Name</label>
          <input type="text" className="w-full border rounded-md p-2" />
        </div>

        {/* Sex */}
        <div>
          <label className="block text-red-800 font-semibold mb-1">Sex</label>
          <div className="grid grid-cols-3 mt-1">
            {['Male', 'Female', 'Prefer Not to Say'].map((label, index) => (
              <label key={index} className="flex items-center space-x-2">
                <input type="radio" name="sex" />
                <span>{label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Roll No / Employee ID */}
        <div>
          <label className="block text-red-800 font-semibold mb-1">
            Roll No. / Employee ID
          </label>
          <input type="text" className="w-full border rounded-md p-2" />
        </div>

        {/* Height */}
        <div>
          <label className="block text-red-800 font-semibold mb-1">Height</label>
          <input
            type="text"
            placeholder={`Feet'inches" / cm`}
            className="w-full border rounded-md p-2"
          />
        </div>

        {/* Age */}
        <div>
          <label className="block text-red-800 font-semibold mb-1">Age</label>
          <input type="number" className="w-full border rounded-md p-2" />
        </div>

        {/* Weight */}
        <div>
          <label className="block text-red-800 font-semibold mb-1">Weight</label>
          <input
            type="text"
            placeholder="Kg"
            className="w-full border rounded-md p-2"
          />
        </div>

        {/* Blood  */}
        <div>
          <label className="block text-red-800 font-semibold mb-1">
            Blood Group
          </label>
          <input
            type="text"
            placeholder=""
            className="w-full border rounded-md p-2"
          />
        </div>

        {/* Mobile Number */}
        <div>
          <label className="block text-red-800 font-semibold mb-1">Mobile Number</label>
          <input type="tel" className="w-full border rounded-md p-2" />
        </div>

        {/* Age Group */}
        <div>
          <label className="block text-red-800 font-semibold mb-1">Age Group</label>
          <div className="grid grid-cols-2 gap-6 mt-1">
            {['16–17 years', '18–60 years', '60–65 years', '65+ years'].map((group, i) => (
              <label key={i} className="flex items-center space-x-1">
                <input type="radio" name="ageGroup" />
                <span className="text-sm">{group}</span>
              </label>
            ))}
          </div>
        </div>
      </form>
     </div>

      <div className="grid grid-cols-4 gap-4 w-full h-[40vh] my-8">
        <ImageUploadBox label="Nail" />
        <ImageUploadBox label="Palm" />
        <ImageUploadBox label="Left Eye" />
        <ImageUploadBox label="Right Eys" />


      </div>

      <div className='flex justify-center my-10'>
        <button onClick={()=>navigate("/donor/patient-detail")} className='bg-red-600 text-white px-8 py-2 rounded-lg'>Submit</button>
      </div>
    
     </div>
            

  )
}

export default AddPatient
