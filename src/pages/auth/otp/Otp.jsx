import React, { useRef, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import usePost from '../../../hooks/usePost';

const Otp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const mobile = location?.state?.mobile;



  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputsRef = useRef([]);
  const { postData, loading } = usePost('api/auth/verify-otp');
  const [errorMsg, setErrorMsg] = useState('');


  const handleChange = async (index, value) => {
    if (!/^[0-9]?$/.test(value)) return;
  
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setErrorMsg('');
  
    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  
    // Check if all OTP fields are filled
    if (newOtp.every((digit) => digit !== '')) {
      const fullOtp = newOtp.join('');
  
      try {
        const result = await postData({ mobile, otp: fullOtp }); // ✅ send mobile with OTP
        
        console.log( 'asdfasdf' , result)
        if (result?.error) {
          setErrorMsg(result.error.message || 'Invalid OTP. Please try again.');
          setOtp(['', '', '', '', '', '']);
          inputsRef.current[0].focus();
        } else {
          console.log("Tokennnnn" , result)
          const token = result?.token; // ✅ extract token from API response
          if (token) {
            sessionStorage.setItem('authToken', token); // ✅ save token in session storage
            alert('OTP Verified Successfully!');
            navigate('/dashboard')
          }
  
          
        }
      } catch (err) {
        setErrorMsg('Something went wrong. Please try again.');
      }
    }
  };
  

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-red-100 to-red-300 p-4">
      <div className="bg-white shadow-xl rounded-3xl p-8 w-full max-w-md text-center">
        <h2 className="text-3xl font-bold text-red-500 mb-4">Enter OTP</h2>
        <p className="text-gray-600 mb-6">We’ve sent a 6-digit code to <strong>{mobile}</strong></p>

        <div className="flex justify-center gap-3 mb-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              ref={(el) => (inputsRef.current[index] = el)}
              className="w-12 h-12 text-xl text-center border rounded-md shadow focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          ))}
        </div>

        {errorMsg && <p className="text-sm text-red-500 mb-2">{errorMsg}</p>}
        {loading && <p className="text-sm text-gray-500">Verifying...</p>}

        <p className="text-sm text-gray-500 mt-4">
          Didn't receive the code? <span className="text-red-500 cursor-pointer hover:underline">Resend</span>
        </p>
      </div>
    </div>
  );
};

export default Otp;
