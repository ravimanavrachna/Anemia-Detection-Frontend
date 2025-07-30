import React, { useEffect, useState } from "react";
import PageTitle from "../../componants/PageTitle";
import usePut from "../../hooks/usePut";
import useGet from "../../hooks/useGet";

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    firstName: "",  
    lastName: "", 
    email: "",
    phone: "(+91) ",
    doctorId: "",
    designation: "",
    block: "",
    address: "",
    state: "",
    pinCode: "",
    country: "India",
  });

  const [image, setImage] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  // Here we will do the get request from the useGet hook.
  const { data, loading: getLoading, error: getError } = useGet("api/admin/profile");

  // Put request api calling from here using the react hooks usePut request.
  const { putData, loading } = usePut("api/admin/profile");

  // Here the useEffect () used to mount it once the data is fetched and the dependency array will run when ever there is a change.
  useEffect(() => {
    if (data && !getError) {
      setProfile(data);
    } else if (getError) {
      alert("Failed to fetch profile!");
    }
  }, [data, getError]);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  // Here the handleSave will update the data and send it to the backend.
  const handleSave = async () => {
    const result = await putData(profile);
    if (!result.error) {
      alert("Profile updated successfully!");
      setIsEditing(false);
    } else {
      alert("Failed to update profile!");
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const States = [
    "Andhra Pradesh",
    "Bihar",
    "Delhi",
    "Gujarat",
    "Karnataka",
    "Madhya Pradesh",
    "Maharashtra",
    "Rajasthan",
    "Tamil Nadu",
    "Uttar Pradesh",
  ].sort();

  const fields = [
    { label: "First Name", name: "firstName", placeholder: "Enter First Name" },
    { label: "Last Name", name: "lastName", placeholder: "Enter Last Name" },
    {
      label: "Email ID",
      name: "email",
      type: "email",
      placeholder: "Enter your Email",
    },
    { label: "Phone Number", name: "phone" },
    { label: "Doctor ID", name: "doctorId", placeholder: "Enter Doctor ID" },
    {
      label: "Designation",
      name: "designation",
      placeholder: "Enter Designation",
    },
    { label: "Block", name: "block", placeholder: "Enter your Block" },
    {
      label: "Address",
      name: "address",
      placeholder: "Enter your Address",
      colSpan: true,
    },
    { label: "Pin Code", name: "pinCode", placeholder: "Enter Pin Code" },
  ];

  if (getLoading || loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div>
      <PageTitle title="Profile" />

      <div className="w-full mx-auto mb-5 mt-5 bg-white rounded-2xl shadow-2xl p-10">
        <div className="text-center mb-8">
          <label className="relative inline-block cursor-pointer">
            {image ? (
              <img
                src={image}
                alt="Uploaded"
                className="rounded-full mx-auto w-20 h-20 object-cover"
              />
            ) : (
              <div className="rounded-full mx-auto w-20 h-20 border-2 border-dashed flex items-center justify-center text-5xl text-gray-400">
                +
              </div>
            )}
            {isEditing && (
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            )}
          </label>
          <p className="text-lg text-gray-500 mt-2">Upload Photo</p>

          <h2 className="text-2xl font-semibold mt-1">
            {profile.firstName} {profile.lastName}
          </h2>

          <p className="text-lg text-gray-500">{profile.country}</p>
        </div>

        <div className="grid grid-cols-2 gap-6 text-2xl">
          {/* Always First Name, Last Name, Email */}
          {fields.slice(0, 3).map((field) => (
            <div key={field.name}>
              <label className="text-lg font-medium">{field.label}</label>
              <input
                type={field.type || "text"}
                name={field.name}
                value={profile[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder || ""}
                className="w-full border rounded px-3 py-2 mt-2 text-lg"
                disabled={!isEditing}
              />
            </div>
          ))}

          {/* Phone, Doctor ID, Designation, Block, Address */}
          {fields.slice(3, 7).map((field) => (
            <div key={field.name}>
              <label className="text-lg font-medium">{field.label}</label>
              <input
                type={field.type || "text"}
                name={field.name}
                value={profile[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder || ""}
                className="w-full border rounded px-3 py-2 mt-2 text-lg"
                disabled={!isEditing}
              />
            </div>
          ))}

          {/* Address (col-span) */}
          <div className="col-span-1">
            <label className="text-lg font-medium">Address</label>
            <input
              type="text"
              name="address"
              value={profile.address}
              onChange={handleChange}
              placeholder="Enter your Address"
              className="w-full border rounded px-3 py-2 mt-2 text-lg"
              disabled={!isEditing}
            />
          </div>

          {/* State dropdown */}
          <div>
            <label className="text-lg font-medium">State</label>
            <select
              name="state"
              value={profile.state}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 mt-2 text-lg"
              disabled={!isEditing}
            >
              <option value="">Select State</option>
              {States.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>

          {/* Pin Code */}
          <div>
            <label className="text-lg font-medium">Pin Code</label>
            <input
              type="text"
              name="pinCode"
              value={profile.pinCode}
              onChange={handleChange}
              placeholder="Enter Pin Code"
              className="w-full border rounded px-3 py-2 mt-2 text-lg"
              disabled={!isEditing}
            />
          </div>
        </div>

        {isEditing ? (
          <button
            onClick={handleSave}
            className="mt-8 w-full bg-green-500 text-xl font-semibold text-white py-3 rounded shadow hover:bg-green-600 hover:shadow-lg"
          >
            Save Changes
          </button>
        ) : (
          <button
            onClick={handleEdit}
            className="mt-8 w-full bg-orange-500 text-xl font-semibold text-white py-3 rounded shadow hover:bg-orange-600 hover:shadow-lg"
          >
            Update Profile
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;