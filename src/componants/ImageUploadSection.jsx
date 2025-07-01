import React, { useRef, useState, useEffect } from "react";
import { Camera, X, Trash2 } from "lucide-react";

const ImageUploadSection = ({ title, localKey, onApiCall }) => {
  const [preview, setPreview] = useState(null);
  const [showCamera, setShowCamera] = useState(false);
  const [streaming, setStreaming] = useState(false);
  const [imageUploaded, setImageUploaded] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(localKey);
    if (stored) {
      setPreview(stored);
      setImageUploaded(true);
    }
  }, [localKey]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        localStorage.setItem(localKey, reader.result);
        setPreview(reader.result);
        setImageUploaded(true);
      };
      reader.readAsDataURL(file);
    }
  };

const startCamera = async () => {
  setShowCamera(true); // First show the modal

  setTimeout(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setStreaming(true);
      }
    } catch (error) {
      alert("Camera access denied or unavailable.");
    }
  }, 100); // Wait a short time to ensure video element exists
};


  const stopCamera = () => {
    const stream = videoRef.current?.srcObject;
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
    }
    setShowCamera(false);
    setStreaming(false);
  };

  const captureImage = () => {
    const context = canvasRef.current.getContext("2d");
    context.drawImage(videoRef.current, 0, 0, 300, 200);
    const imageData = canvasRef.current.toDataURL("image/png");
    localStorage.setItem(localKey, imageData);
    setPreview(imageData);
    setImageUploaded(true);
    stopCamera();
  };

  const removeImage = () => {
    localStorage.removeItem(localKey);
    setPreview(null);
    setImageUploaded(false);
  };

  return (
    <div className="w-full max-w-3xl bg-white rounded-2xl shadow-md p-6 transition-all duration-300 hover:shadow-lg">
      <h2 className="text-2xl font-bold text-center text-red-600 mb-6">{title}</h2>

      {/* Animated Preview or Upload Section */}
      <div className="transition-opacity duration-500 ease-in-out">
        {!imageUploaded ? (
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 animate-fadeIn">
            {/* Upload Box */}
            <label className="flex flex-col items-center justify-center border-2 border-dashed border-red-400 rounded-xl p-5 w-64 h-56 cursor-pointer hover:bg-red-50 transition-all">
              <img
                src="/images/hand-placeholder.png"
                alt="Upload Preview"
                className="w-24 h-24 object-contain mb-3"
              />
              <span className="text-sm font-medium text-gray-800">Drag & Drop</span>
              <span className="text-xs text-red-500">OR</span>
              <span className="text-sm text-blue-600 underline">Browse file</span>
              <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
            </label>

            {/* Camera Box */}
            <div
              onClick={startCamera}
              className="flex flex-col items-center justify-center border-2 border-dashed border-red-400 rounded-xl p-5 w-64 h-56 cursor-pointer hover:bg-red-50 transition-all"
            >
              <Camera className="w-12 h-12 text-gray-700 mb-2" />
              <span className="text-sm font-medium text-gray-800 text-center">
                Capture your images <br /> through camera
              </span>
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

      {/* Camera Modal */}
      {showCamera && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-4 w-full max-w-md shadow-lg relative animate-fadeIn">
            <button
              onClick={stopCamera}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
            >
              <X />
            </button>
            <h3 className="text-lg font-semibold text-center mb-4 text-purple-600">Camera Preview</h3>
            <video ref={videoRef} autoPlay playsInline className="w-full h-56 rounded-lg" />
            <canvas ref={canvasRef} width={300} height={200} className="hidden" />
            <div className="mt-4 flex justify-center">
              <button
                onClick={captureImage}
                className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition"
              >
                Capture
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Instructions */}
      {!imageUploaded && (
        <p className="mt-6 text-xs text-center text-gray-500">
          <span className="text-red-500">*</span>
          <a href="#instructions" className="text-blue-600 underline ml-1">
            Click here to know the instructions for uploading images
          </a>
        </p>
      )}
    </div>
  );
};

export default ImageUploadSection;
