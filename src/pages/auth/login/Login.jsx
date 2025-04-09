import React, { useState } from 'react';
import loginImg from '../../../assets/loginimg.png';
import InputField from '../../../componants/InputField'; // Make sure this is the same floating input we made earlier
import { useNavigate } from 'react-router';

const Login = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const validateField = (field) => {
    let tempErrors = { ...errors };
  
    if (field === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.email) {
        tempErrors.email = '';
      } else if (!emailRegex.test(formData.email)) {
        tempErrors.email = 'Enter a valid email.';
      } else {
        tempErrors.email = '';
      }
    }
  
    if (field === 'password') {
      if (!formData.password) {
        tempErrors.password = '';
      } else if (formData.password.length < 6) {
        tempErrors.password = 'Password must be at least 6 characters.';
      } else {
        tempErrors.password = '';
      }
    }
  
    setErrors(tempErrors);
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
  
    let tempErrors = { email: '', password: '' };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!formData.email) {
      tempErrors.email = 'Email is required.';
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = 'Enter a valid email.';
    }
  
    if (!formData.password) {
      tempErrors.password = 'Password is required.';
    } else if (formData.password.length < 6) {
      tempErrors.password = 'Password must be at least 6 characters.';
    }
  
    setErrors(tempErrors);
  
    const isValid = !tempErrors.email && !tempErrors.password;
    if (isValid) {
      console.log('Login Success:', formData);
      navigate("/dashboard")
      alert('Logged in successfully!');
    }
  };
  

  return (
    <div className='bg-red-600 h-[100vh] flex justify-center items-center w-full'>
      <div className='w-[70%] h-[70vh] bg-white rounded-[30px] flex '>
        {/* Left Side (Form) */}
        <div className='w-[55%] bg-white rounded-[30px]'>
          <div>
            <h1 className='text-[40px] text-red-500 p-6'>LOGO</h1>
          </div>

          <div className='flex justify-center'>
            <h1 className='text-[40px] text-red-500'>Login</h1>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md flex flex-col gap-5 mx-auto mt-10 p-4 bg-white dark:bg-gray-800 rounded">
            <InputField
              id="email"
              label="Email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={() => validateField()}
              error={errors.email}
            />
            
            <InputField
              id="password"
              label="Password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              onBlur={() => validateField()}
              error={errors.password}
            />

            <button
              type="submit"
              className="mt-4 w-full px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Login
            </button>
          </form>
        </div>

        {/* Right Side (Image & Info) */}
        <div className='w-[45%] bg-[#FFE5E5] rounded-[30px]'>
          <div className='flex justify-center mt-10'>
            <img src={loginImg} alt="Login Illustration" />
          </div>
          <div className='flex justify-center'>
            <h1 className='text-[45px] font-urbanist font-bold text-red-500'>Hello there !</h1>
          </div>
          <div className='flex justify-center '>
            <p className='text-[18px] font-urbanist'>{`Don’t have an account?`}</p>
          </div>
          <div className='flex justify-center '>
            <p className='text-[18px] font-urbanist'>{`Enter your personal details and`}</p>
          </div>
          <div className='flex justify-center '>
            <p className='text-[18px] font-urbanist'>{`create one by signing in.`}</p>
          </div>

          <div className='flex justify-center mt-10'>
            <button className='bg-red-500 text-white font-urbanist px-10 rounded-lg py-2 ' onClick={()=>navigate('/register')}>Register Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
