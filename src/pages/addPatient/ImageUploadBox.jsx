import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import React, { useState } from 'react';

const ImageUploadBox = ({ label }) => {
  const [image, setImage] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleRemove = () => {
    setImage(null);
  };

  return (
    <div className="flex flex-col items-center bg-white rounded-2xl shadow-md p-4 w-full">
      <div
        className="w-full h-full border-2 border-dashed border-gray-400 rounded-lg flex justify-center items-center cursor-pointer relative"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        onClick={() => document.getElementById(`${label}-input`).click()}
      >
        {image ? (
          <div className="relative w-full">
            <img
              src={image}
              alt="preview"
              className=" w-full rounded-lg"
            />
            <button
              onClick={handleRemove}
              className="absolute top-1 right-1 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm"
            >
              ×
            </button>
          </div>
        ) : (
          <span className=" text-gray-400">



    <DotLottieReact
      className='w-[20rem] overflow-hidden'
      src="https://lottie.host/0123dc9b-f86e-4925-8b23-8bc549103c3e/53srl3Ac8v.lottie"
      loop
      autoplay
    />



          </span>
        )}
        <input
          type="file"
          accept="image/*"
          id={`${label}-input`}
          className="hidden"
          onChange={handleImageChange}
        />
      </div>
      <button className="bg-red-600 text-white px-4 py-3 mt-3 rounded-lg w-full text-lg">Upload {label}</button>
      {/* <p className="mt-2 text-sm font-semibold"></p> */}
    </div>
  );
};

export default ImageUploadBox
