// src/SignDocument.tsx
import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import { useNavigate } from 'react-router-dom';
import { Button } from "./subframe/components/Button";

const SignDocument: React.FC = () => {
  const webcamRef = useRef<Webcam>(null);
  const [recording, setRecording] = useState(false);
  const navigate = useNavigate();

  const handleStartRecording = () => {
    setRecording(true);
  };

  const handleStopRecording = () => {
    setRecording(false);
    navigate('/confirm-signature');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-100">
      <h1 className="text-2xl font-semibold mb-4 text-white">Sign Your Document</h1>
      <Webcam 
        ref={webcamRef} 
        audio={false} 
        width="100%" 
        style={{ maxWidth: '600px' }} 
        className="mirrored-video" // Add the mirrored-video class here
      />
      {recording ? (
        <Button className="h-10 w-full flex-none mt-4" variant="brand-secondary" size="large" onClick={handleStopRecording}>
          Stop Recording
        </Button>
      ) : (
        <Button className="h-10 w-full flex-none mt-4" variant="brand-secondary" size="large" onClick={handleStartRecording}>
          Start Recording
        </Button>
      )}
    </div>
  );
};

export default SignDocument;
