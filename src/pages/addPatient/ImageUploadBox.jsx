import React, { useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const ImageUploadBox = ({ label, onFileSelect = () => {} }) => {
  const [image, setImage] = useState(null);

  const handleFile = (file) => {
    if (file) {
      setImage(URL.createObjectURL(file));
      onFileSelect(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleFile(e.dataTransfer.files[0]);
  };

  const handleChange = (e) => handleFile(e.target.files[0]);

  const handleRemove = (e) => {
    e.stopPropagation();
    setImage(null);
    onFileSelect(null);
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
            <img src={image} alt="preview" className="w-full rounded-lg" />
            <button
              onClick={handleRemove}
              className="absolute top-1 right-1 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm"
            >
              ×
            </button>
          </div>
        ) : (
          <DotLottieReact
            className="w-[10rem] h-[10rem]"
            src="https://lottie.host/0123dc9b-f86e-4925-8b23-8bc549103c3e/53srl3Ac8v.lottie"
            loop
            autoplay
          />
        )}
        <input
          type="file"
          accept="image/*"
          id={`${label}-input`}
          className="hidden"
          onChange={handleChange}
        />
      </div>
      <button
        type="button"
        className="bg-red-600 text-white px-4 py-2 mt-3 rounded-lg w-full text-lg"
        onClick={() => document.getElementById(`${label}-input`).click()}
      >
        Upload {label}
      </button>
    </div>
  );
};

export default ImageUploadBox;
