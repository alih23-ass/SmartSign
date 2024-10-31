// src/PostSignCapture.tsx
import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from "./subframe/components/Button";  // Assuming Subframe Button component is used

const PostSignCapture: React.FC = () => {
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const webcamRef = useRef<Webcam>(null);
  const navigate = useNavigate();
  const location = useLocation(); // Get the pre-signed document for comparison

  const preSignedDocument = location.state?.capturedDocument; // Ensure we are passing the captured pre-signed document

  // Function to capture the post-signed document
  const captureImage = () => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      setCapturedImage(imageSrc);
      // After capturing, navigate to final Face ID verification
      setTimeout(() => {
        navigate('/post-capture-authentication', { state: { preSignedDocument, postSignedDocument: imageSrc } });
      }, 1000);
    }
  };

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-neutral-100 px-6 py-6 overflow-hidden">
      <div className="flex w-full max-w-[320px] flex-col items-center justify-center gap-8 px-12 py-12">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex flex-col items-center gap-1">
            <span className="text-heading-2 font-heading-2 text-default-font">
              Capture Post-Signed Document
            </span>
            <span className="text-body font-body text-subtext-color">
              Capture a clear image of the document after signing.
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
            onClick={captureImage}
          >
            Capture Document
          </Button>
        </div>
        {capturedImage && (
          <div className="mt-6">
            <p className="text-lg font-semibold">Captured Post-Signed Document:</p>
            <img src={capturedImage} alt="Post-signed document" className="mt-4 rounded-lg shadow-md" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostSignCapture;
