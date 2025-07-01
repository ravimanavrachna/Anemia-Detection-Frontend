import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import React, { useEffect, useState } from 'react';

const Success= ({data}) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false); // Hide the modal after 5 seconds
    },3000);
    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  if (!show) return null; // Hide modal when show is false

  return (
    <div className="fixed top-0 left-0 right-0 w-[100%] h-[100%] z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-1/2 p-4 rounded-lg shadow-lg">
        <DotLottieReact
          src="https://lottie.host/8d0aeeb0-0e57-4b31-959d-8f3ff8b341c8/yNdWhHP1om.lottie"
          loop
          autoplay
        />
      
         <div className='flex justify-center'>
         <p className='my-4 s1-text !font-bold text-blue-800'> {data}</p>
         </div>
        
      </div>
     
      <div>
       
      </div>
    </div>
  );
};

export default Success
