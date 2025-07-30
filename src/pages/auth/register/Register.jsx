import React, { useState } from 'react';
import loginImg from '../../../assets/loginimg.png';
import InputField from '../../../componants/InputField';
import { useNavigate } from 'react-router';
import usePost from '../../../hooks/usePost';

const Register = () => {
  const navigate = useNavigate();
  const { postData, loading } = usePost('api/auth/register');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    createPassword: '',
    confirmPassword: '',
    block:'',
    mobile: '',
  });

  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setFormError('');
  };

  const validateField = (field) => {
    const value = formData[field];
    let message = '';

    if (field === 'name' && !value.trim()) message = 'Name is required.';
    if (field === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value) message = 'Email is required.';
      else if (!emailRegex.test(value)) message = 'Enter a valid email.';
    }
    if (field === 'createPassword') {
      if (!value) message = 'Password is required.';
      else if (value.length < 6) message = 'Must be at least 6 characters.';
    }
    if (field === 'confirmPassword' && value !== formData.createPassword)
      message = 'Passwords do not match.';
    if (field === 'mobile') {
      const numberRegex = /^[0-9]{10}$/;
      if (!value) message = 'Mobile number is required.';
      else if (!numberRegex.test(value)) message = 'Enter a valid 10-digit number.';
    }

    setErrors((prev) => ({ ...prev, [field]: message }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = ['name', 'email', 'createPassword', 'confirmPassword', 'mobile'];
    let tempErrors = {};
    fields.forEach((field) => {
      validateField(field);
      if (!formData[field]) tempErrors[field] = `${field} is required.`;
    });

    const hasErrors = Object.values({ ...errors, ...tempErrors }).some((err) => err);
    if (hasErrors) return;

    const doctorID = Math.random().toString(36).substring(2, 10).toUpperCase();
    const payload = {
      name: formData.name,
      email: formData.email,
      password: formData.createPassword,
      mobile: formData.mobile,
      doctorID,
      userType: '2',
      block:formData.block
    };

    const result = await postData(payload);
    console.log("aaaaaaa" ,  result)

    if (result?.error) {
      setFormError(result.error.error || 'Registration failed. Please try again.');
    } else {
      // alert('Registered successfully!');
      navigate('/otp', { state: { email: formData.email } });
    }
  };

  return (
    <div className="bg-gradient-to-tr from-red-100 to-red-300 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-3xl overflow-hidden w-full max-w-5xl flex flex-col md:flex-row">
        {/* Left - Image & Welcome */}
        <div className="md:w-1/2 bg-[#ffe5e5] flex flex-col items-center justify-center p-8">
          <img src={loginImg} alt="Welcome" className="w-4/5 max-w-xs mb-6 animate-fade-in" />
          <h2 className="text-3xl font-bold text-red-500 font-urbanist">Welcome Back!</h2>
          <p className="text-center mt-3 text-gray-700">Already have an account?</p>
          <button
            onClick={() => navigate('/login')}
            className="mt-5 bg-red-500 text-white px-8 py-2 rounded-lg hover:bg-red-600 transition-all"
          >
            Login
          </button>
        </div>

        {/* Right - Registration Form */}
        <div className="md:w-1/2 w-full p-8">
          <h2 className="text-4xl text-red-500 font-bold text-center mb-6">Create Account</h2>
          <form onSubmit={handleSubmit} className="space-y-6 ">
            <InputField
              id="name"
              label="Full Name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              onBlur={() => validateField('name')}
              error={errors.name}
            />
            <InputField
              id="email"
              label="Email Address"
              type="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={() => validateField('email')}
              error={errors.email}
            />
            <div className=' lg:flex flex flex-col  gap-4'>
            <InputField
              id="createPassword"
              label="Password"
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
            </div>
            <InputField
              id="mobile"
              label="Mobile Number"
              type="text"
              value={formData.mobile}
              onChange={handleChange}
              onBlur={() => validateField('mobile')}
              error={errors.mobile}
            />
                      <div>
            {/* <label htmlFor="block" className="block text-sm font-medium text-gray-700">
              Select Block
            </label> */}
            <select
              id="block"
              value={formData.block}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 py-3 px-2 text-gray-500  focus:border-red-500 focus:ring-red-500 sm:text-sm"
            >
              <option value="A">Block A</option>
              <option value="B">Block B</option>
              <option value="C">Block C</option>
              <option value="D">Block D</option>
            </select>
          </div>
            

            {formError && <p className="text-red-500 text-sm">{formError}</p>}

            <button
              type="submit"
              disabled={loading}
              className={`w-full mt-4 py-3 font-semibold rounded-md transition-all ${
                loading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-red-500 text-white hover:bg-red-600'
              }`}
            >
              {loading ? 'Registering...' : 'Register'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
