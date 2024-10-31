// src/PreSignCapture.tsx
import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import { useNavigate } from 'react-router-dom';
import { Button } from "./subframe/components/Button";  // Assuming Subframe Button component is used

const PreSignCapture: React.FC = () => {
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const webcamRef = useRef<Webcam>(null);
  const navigate = useNavigate();

  // Function to capture an image from the webcam
  const captureImage = () => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      setCapturedImage(imageSrc);
      // Navigate to the post-sign capture after pre-sign document is captured
      setTimeout(() => {
        navigate('/post-sign-capture', { state: { capturedDocument: imageSrc } });
      }, 1000);
    }
  };

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-neutral-100 px-6 py-6 overflow-hidden">
      <div className="flex w-full max-w-[320px] flex-col items-center justify-center gap-8 px-12 py-12">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex flex-col items-center gap-1">
            <span className="text-heading-2 font-heading-2 text-default-font">
              Capture Pre-Signed Document
            </span>
            <span className="text-body font-body text-subtext-color">
              Capture a clear image of the document before signing.
            </span>
          </div>
        </div>
        <Webcam
          ref={webcamRef}
          audio={false}
          screenshotFormat="image/jpeg"
          videoConstraints={{ facingMode: { exact: "environment" } }} // Back camera for document capture
          className="rounded-lg shadow-md"
          width="100%"
          style={{ maxWidth: '600px' }}
        />
        <div className="flex w-full flex-col items-center justify-center gap-8">
          <Button
            className="h-10 w-full flex-none"
            variant="brand-secondary"
            size="large"
            onClick={captureImage}  // Capture document when button is clicked
          >
            Capture Document
          </Button>
        </div>
        {capturedImage && (
          <div className="mt-6">
            <p className="text-lg font-semibold">Captured Pre-Signed Document:</p>
            <img src={capturedImage} alt="Pre-signed document" className="mt-4 rounded-lg shadow-md" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PreSignCapture;
