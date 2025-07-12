import React, { useState } from "react";
import PageTitle from "../../componants/PageTitle";
import ImageUploadBox from "../addPatient/ImageUploadBox";
import { useNavigate } from "react-router";
import usePost from "../../hooks/usePost";
import useGet from "../../hooks/useGet";
import StepperProgress from "../../componants/StepperProgress";
import StepNavButtons from "../../componants/StepNavButtons";

const AddPatient = () => {
  const navigate = useNavigate();
  const { postData } = usePost("api/donor/add-donor"); // ✅ Your API endpoint
  const {data} = useGet('')
  const [form, setForm] = useState({
    name: "",
    email:"",
    mobile:"",
    dob:"",
    age:"",
    ageGroup:"",
    sex:"",
    empID:"",
    height:"",
    weight:"",
    bloodGroup:"",
    doctorName:"",
    doctorID:"12",
    date:Date.now(),
    donorID:Math.random()+Date.now(),
    nailStatus:"",
    palmStatus:"",
    hBValue:"",
    totalAnemicStatus:"Anemic",
    
    
  });

  const [images, setImages] = useState({
    leftEyeImages: null,
    rightEyeImages: null,
    handImage: null,
    nailbedImage: null,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageSelect = (key) => (file) => {
    setImages((prev) => ({ ...prev, [key]: file }));
  };

  const handleSubmit = async () => {
    const formData = new FormData();

    // Add text fields
    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value);
    });

    // Add images
    Object.entries(images).forEach(([key, file]) => {
      if (file) formData.append(key, file);
    });

    console.log("FormDAta", formData);

    const res = await postData(formData);
    console.log('formdatatatata'  , form)
    if (!res.error) navigate(`/donor/donor-detail/${form?.donorID}`);
  };

  console.log("dataa", form);
  console.log("images", images);

  return (
    <div>
      <StepperProgress />
      {/* <PageTitle title="Add Donor" /> */}
      
         <div className="bg-white h-[55vh] overflow-auto rounded-lg p-4 mt-4 font-urbanist">
        <h2 className="text-3xl font-bold mb-6 text-center text-red-500">
          Add the Donor Details
        </h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { label: "Name", name: "name" },
            { label: "Roll No. / Employee ID", name: "empID" },
            {
              label: "Height",
              name: "height",
              placeholder: `Feet'inches" / cm`,
            },
            { label: "Age", name: "age", type: "number" },
            { label: "Weight", name: "weight", placeholder: "Kg" },
            { label: "Blood Group", name: "bloodGroup" },
            { label: "Mobile Number", name: "mobile" },
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
            </div>
          ))}

          <div>
            <label className="block text-red-800 font-semibold mb-1">Sex</label>
            <div className="grid grid-cols-3 mt-1">
              {["Male", "Female", "Prefer Not to Say"].map((value) => (
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
          </div>

          <div>
            <label className="block text-red-800 font-semibold mb-1">
              Age Group
            </label>
            <div className="grid grid-cols-2 gap-6 mt-1">
              {["16–17 years", "18–60 years", "60–65 years", "65+ years"].map(
                (value) => (
                  <label key={value} className="flex items-center space-x-1">
                    <input
                      type="radio"
                      name="ageGroup"
                      value={value}
                      onChange={handleChange}
                    />
                    <span className="text-sm">{value}</span>
                  </label>
                )
              )}
            </div>
          </div>
        </form>
      </div>

    
      <StepNavButtons
        // nextUrl={`/donor/donor-detail/${form?.donorID}`}
        nextUrl={`/donor/add-donor/upload-palm-image`}
prevUrl={null}
        // prevUrl='/donor/add-donor/upload-nailbde-image' // null/undefined disables the button
      />
    

      

      {/* <div className="flex justify-center my-10">
        <button
          type="button"
          onClick={handleSubmit}
          className="bg-red-600 text-white px-8 py-2 rounded-lg"
        >
          Submit
        </button>
      </div> */}
    </div>
  );
};

export default AddPatient;
