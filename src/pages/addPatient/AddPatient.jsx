import React, { useState } from "react";
import PageTitle from "../../componants/PageTitle";
import ImageUploadBox from "../addPatient/ImageUploadBox";
import { useNavigate } from "react-router";
import usePost from "../../hooks/usePost";
import useGet from "../../hooks/useGet";
import StepperProgress from "../../componants/StepperProgress";
import StepNavButtons from "../../componants/StepNavButtons";
import { useDispatch } from "react-redux";
import { saveDonorDetails } from "../../redux/donorReducer";
import { addPatientDetailsValidation } from "../../utils/addPatientValidation";
const validGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

const AddPatient = () => {
  const dispatch = useDispatch()
  //message:"Missing required fields: name, role, mobileNo, dob, height, weight, sex, block, bloodGroup"
  const [error, setError] = useState({})
  const [showBloodGroups, setShowBloodGroups] = useState(false)
  const [form, setForm] = useState({
    name: "Ashwani",
    role: "Student",
    email: "a",
    mobileNo: "9595959595",
    dob: "",
    age: "",
    ageGroup: "",
    sex: "male",
    employeeId: "1212",
    weight: "23",
    bloodGroup: "A+",
    doctorName: "",
    date: Date.now(),
    nailStatus: "",
    palmStatus: "",
    hBValue: "",
  });
const bloodGroupHandler=(value)=>{
  setForm({ ...form, bloodGroup:value });
  setShowBloodGroups(false)
}
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const nextEventHandler = () => {
    const { isValid, errors } = addPatientDetailsValidation(form);
    if (isValid) {
      dispatch(saveDonorDetails(form))
    } else {
      setError(errors)
      console.log(errors);
      // alert("Required all feilds");
      throw new Error("Required all feilds")
    }
  }
  return (
    <div className="relative">
      <StepperProgress />
      <div className="bg-white overflow-auto rounded-lg p-4 mt-4 font-urbanist">
        <h2 className="text-3xl font-bold mb-6 text-center text-red-500">
          Add the Donor Details
        </h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { label: "Name", name: "name" },
            { label: "Roll No. / Employee ID", name: "employeeId" },
            { label: "DOB", name: "dob", type: "date" },
            { label: "Weight", name: "weight", placeholder: "Kg" },
            { label: "Mobile Number", name: "mobileNo" },
          ].map(({ label, name, type = "text", placeholder = "" }) => (
            <div key={name}>
              <label className="block text-red-800 font-semibold mb-1">
                {label}
              </label>
              <input
                type={type}
                name={name}
                placeholder={placeholder}
                className="w-full border rounded-md p-2"
                onChange={handleChange}
              />
              {error[name] && <div className="text-red-400" >{error[name]}</div>}
            </div>
          ))}
          <div>
            <label className="block text-red-800 font-semibold mb-1">
              Blood Group
            </label>
            <div onClick={() => { setShowBloodGroups((pre) => !pre) }} className="w-full border rounded-md p-2" >
              {form.bloodGroup ? form.bloodGroup : "Select blood group"}
            </div>
            {showBloodGroups && <div className="relative w-full" >
              <div  id="" className="absolute top-0 left-0 w-full h-[10rem] overflow-auto border rounded-md bg-white" >
                {validGroups.map((bloodGroup) => {
                  return <div onClick={()=>{bloodGroupHandler(bloodGroup)}} value={"bloodGroup"} name={bloodGroup} className="w-full  hover:bg-blue-100 p-2"
                  >{bloodGroup}</div>
                })}
              </div>
            </div>}

          </div>
          <div>
            <label className="block text-red-800 font-semibold mb-1">Role</label>
            <div className="grid grid-cols-3 mt-1">
              {["Student", "Faculty"].map((value) => (
                <label key={value} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="role"
                    value={value}
                    onChange={handleChange}
                  />
                  <span>{value}</span>
                </label>
              ))}

            </div>
            {error.role && <div className="text-red-400" >{error.role}</div>}

          </div>

          <div>
            <label className="block text-red-800 font-semibold mb-1">Sex</label>
            <div className="grid grid-cols-3 mt-1">
              {["male", "female", "Prefer Not to Say"].map((value) => (
                <label key={value} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="sex"
                    value={value}
                    onChange={handleChange}
                  />
                  <span>{value}</span>
                </label>
              ))}
            </div>
            {error.sex && <div className="text-red-400" >{error.sex}</div>}

          </div>
        </form>
      </div>


     <div className=" w-full">
       <StepNavButtons
        nextEvent={nextEventHandler}
        nextUrl={`/donor/add-donor/upload-palm-image`}
        prevUrl={null}
      />
     </div>

    </div>
  );
};

export default AddPatient;