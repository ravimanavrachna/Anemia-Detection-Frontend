import React, { useRef, useState, useEffect } from "react";
import { Camera, X, Trash2 } from "lucide-react";

const ImageUploadSection = ({ title, img, name, saveImage, onApiCall, error }) => {
  const [preview, setPreview] = useState(null);
  const [imageUploaded, setImageUploaded] = useState(false);

  useEffect(() => {
    const stored = img;
    if (stored) {
      setPreview(stored);
      setImageUploaded(true);
    }
  }, [img]);

  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        saveImage(name, reader.result);
        setPreview(reader.result);
        setImageUploaded(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    saveImage(name, null);
    setPreview(null);
    setImageUploaded(false);
  };

  const openNativeCamera = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="w-full max-w-3xl bg-white rounded-2xl shadow-md p-6 transition-all duration-300 hover:shadow-lg">
      <h2 className="text-2xl font-bold text-center text-red-600 mb-6">{title}</h2>

      <div className="transition-opacity duration-500 ease-in-out">
        {!imageUploaded ? (
          <div className="flex  flex-col md:flex-row items-center justify-center gap-10 animate-fadeIn">
            {/* Upload Box */}
            <label className="flex hidden lg:block flex-col items-center justify-center border-2 border-dashed border-red-400 rounded-xl p-5 w-64 h-56 cursor-pointer hover:bg-red-50 transition-all">
              <img
                src="/images/hand-placeholder.png"
                alt="Upload Preview"
                className="w-24 h-24 object-contain mb-3"
              />
              <span className="text-sm font-medium text-gray-800">Drag & Drop</span>
              <span className="text-xs text-red-500">OR</span>
              <span className="text-sm text-blue-600 underline">Browse file</span>

              {/* Hidden File Input with Native Camera */}
              <input
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>

            {/* Camera Box */}
            <div
              onClick={openNativeCamera}
              className="flex flex-col items-center justify-center border-2 border-dashed border-red-400 rounded-xl p-5 w-64 h-56 cursor-pointer hover:bg-red-50 transition-all"
            >
              <Camera className="w-12 h-12 text-gray-700 mb-2" />
              <span className="text-sm font-medium text-gray-800 text-center">
                Capture your images <br /> through camera
              </span>

              {/* Hidden input that opens camera */}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center animate-fadeIn">
            <img
              src={preview}
              alt="Uploaded"
              className="w-64 h-56 object-cover rounded-xl shadow-md"
            />
            <button
              onClick={removeImage}
              className="mt-4 flex items-center gap-2 text-red-600 text-sm hover:text-red-800"
            >
              <Trash2 className="w-4 h-4" />
              Remove & Re-upload
            </button>
          </div>
        )}
      </div>

      {/* Instructions */}
      {!imageUploaded && (
        <p className="mt-6 text-xs text-center text-gray-500">
          <span className="text-red-500">*</span>
          <a href="#instructions" className="text-blue-600 underline ml-1">
            Click here to know the instructions for uploading images
          </a>
        </p>
      )}
      {error && <div className="text-red-400">{error}</div>}
    </div>
  );
};

export default ImageUploadSection;
