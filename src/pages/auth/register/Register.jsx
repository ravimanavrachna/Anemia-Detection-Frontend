import React, { useState } from 'react';
import loginImg from '../../../assets/loginimg.png';
import InputField from '../../../componants/InputField'; // Reuse the floating input field component
import { useNavigate } from 'react-router';

const Register = () => {
    const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    createPassword: '',
    confirmPassword: '',
    number: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const validateField = (field) => {
    const value = formData[field];
    let message = '';

    if (field === 'name' && !value.trim()) {
      message = 'Name is required.';
    }

    if (field === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value) message = 'Email is required.';
      else if (!emailRegex.test(value)) message = 'Enter a valid email.';
    }

    if (field === 'createPassword') {
      if (!value) message = 'Password is required.';
      else if (value.length < 6) message = 'Must be at least 6 characters.';
    }

    if (field === 'confirmPassword') {
      if (value !== formData.createPassword) message = 'Passwords do not match.';
    }

    if (field === 'number') {
      const numberRegex = /^[0-9]{10}$/;
      if (!value) message = 'Mobile number is required.';
      else if (!numberRegex.test(value)) message = 'Enter a valid 10-digit number.';
    }

    setErrors((prev) => ({ ...prev, [field]: message }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const fields = ['name', 'email', 'createPassword', 'confirmPassword', 'number'];
    fields.forEach((field) => validateField(field));

    const hasErrors = Object.values(errors).some((err) => err);
    if (!hasErrors) {
      console.log('Form Data:', formData);
      navigate("/login")
      alert('Registered successfully!');
    }
  };

  return (
    <div className="bg-red-600 flex h-[100vh] justify-center items-center px-20 ">
      <div className="w-full max-w-full bg-white h-[80vh] rounded-3xl shadow-lg flex flex-col md:flex-row overflow-hidden">
        
        {/* Left Side */}
        <div className="md:w-1/2 bg-[#FFE5E5] flex flex-col justify-center items-center p-6">
          <img src={loginImg} alt="Login Illustration" className="w-[80%] max-w-xs mb-4" />
          <h1 className="text-[30px] md:text-[40px] font-bold font-urbanist text-red-500">WELCOME BACK!</h1>
          <p className="text-center text-base mt-2 font-urbanist">To keep connected, please login or </p>
          <p className="text-center text-base mt-2 font-urbanist"> sign up by filling in your details.</p>
          <button onClick={()=>navigate("/login")} className="mt-6 bg-red-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-red-600 transition">Login</button>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 w-full p-6 md:p-10 flex flex-col justify-center items-center">
          <h1 className="text-[32px] md:text-[40px] font-bold text-red-500 mb-6 text-center">Register</h1>
          <form onSubmit={handleSubmit} className="w-full px-10 flex flex-col gap-4">
            <div className=" flex flex-col gap-4">
              <InputField
                id="name"
                label="Name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                onBlur={() => validateField('name')}
                error={errors.name}
              />
              <InputField
                id="email"
                label="Email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={() => validateField('email')}
                error={errors.email}
              />
              <InputField
                id="createPassword"
                label="Create Password"
                type="password"
                value={formData.createPassword}
                onChange={handleChange}
                onBlur={() => validateField('createPassword')}
                error={errors.createPassword}
              />
              <InputField
                id="confirmPassword"
                label="Confirm Password"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                onBlur={() => validateField('confirmPassword')}
                error={errors.confirmPassword}
              />
              <InputField
                id="number"
                label="Mobile No."
                type="text"
                value={formData.number}
                onChange={handleChange}
                onBlur={() => validateField('number')}
                error={errors.number}
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-red-500 text-white rounded-md font-semibold hover:bg-red-600 transition"
            >
              Register
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Register;
