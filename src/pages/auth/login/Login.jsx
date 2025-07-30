import React, { useState } from 'react';
import loginImg from '../../../assets/loginimg.png';
import InputField from '../../../componants/InputField';
import { useNavigate } from 'react-router';
import usePost from '../../../hooks/usePost'; // ✅ adjust path if needed
// import Success from '../../../componants/Success';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ mobile: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });
  const { postData, loading, error } = usePost('api/auth/login');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const validateField = (field) => {
    let tempErrors = { ...errors };
    if (field === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      tempErrors.mobile = !formData.mobile ? '' : (!emailRegex.test(formData.mobile) ? 'Enter a valid Mobile No..' : '');
    }
    if (field === 'password') {
      tempErrors.password = !formData.password ? '' : (formData.password.length < 6 ? 'Password must be at least 6 characters.' : '');
    }
    setErrors(tempErrors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let tempErrors = { mobile: '', password: '' };

    if (!formData.mobile) tempErrors.mobile = 'Mobile is required.';
    // else if (!emailRegex.test(formData.mobile)) tempErrors.mobile = 'Enter a valid mobile.';

    if (!formData.password) tempErrors.password = 'Password is required.';
    else if (formData.password.length < 6) tempErrors.password = 'Password must be at least 6 characters.';

    setErrors(tempErrors);

    const isValid = !tempErrors.mobile && !tempErrors.password;
    if (!isValid) return;

    const result = await postData(formData);

    if (result?.error?.error) {
      console.log("res", result)
      if (result?.error?.error === 'User OTP not verified') {
        navigate('/otp', { state: { mobile: formData.mobile } });
      }
      alert(result?.error?.error || 'Login failed');
    } else {
      const token = result?.token;

      console.log("Token", result)
      console.log("Token", token)
      if (token) {
        sessionStorage.setItem('authToken', token);

        alert(result?.message || "Login Successful");
        navigate('/dashboard');
      }


    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-r from-red-100 to-red-300 px-4 py-8">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl flex flex-col lg:flex-row overflow-hidden h-full lg:h-[85vh]">

        {/* Left - Image + Welcome */}
        <div className="w-full lg:w-1/2 bg-gradient-to-br from-red-500 to-red-400 text-white flex flex-col justify-center items-center p-6 sm:p-10">
          <img src={loginImg} alt="Login" className="w-2/3 mb-4 sm:mb-6 drop-shadow-2xl" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">Welcome Back!</h2>
          <p className="text-sm sm:text-lg mb-1 sm:mb-2">Don't have an account?</p>
          <p className="text-sm sm:text-md mb-4 sm:mb-6">Create one and get started.</p>
          <button
            className="px-4 py-2 sm:px-6 sm:py-2 bg-white text-red-500 rounded-full hover:bg-red-100 transition"
            onClick={() => navigate('/register')}
          >
            Register Now
          </button>
        </div>

        {/* Right - Login Form */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 sm:px-8 md:px-12 py-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-500 mb-4 sm:mb-6 text-center">Login to Your Account</h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
            <InputField
              id="mobile"
              label="Mobile No"
              type="text"
              value={formData.mobile}
              onChange={handleChange}
              onBlur={() => validateField('mobile')}
              error={errors.mobile}
            />
            <InputField
              id="password"
              label="Password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              onBlur={() => validateField('password')}
              error={errors.password}
            />

            <button
              type="submit"
              disabled={loading}
              className={`mt-3 sm:mt-4 px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg transition-all duration-300 ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600 text-white'
                }`}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          {error && <p className="text-sm text-red-500 mt-2 text-center">{error.message || 'Something went wrong.'}</p>}
        </div>
      </div>
    </div>

  );
};

export default Login;
