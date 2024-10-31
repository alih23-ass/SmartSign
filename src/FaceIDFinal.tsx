// src/FaceIDFinal.tsx
import React, { useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import * as faceapi from 'face-api.js';
import { useNavigate } from 'react-router-dom';
import { Button } from "./subframe/components/Button";

const FaceIDFinal: React.FC = () => {
  const [faceDetected, setFaceDetected] = useState(false);
  const navigate = useNavigate();
  const webcamRef = useRef<Webcam>(null);

  useEffect(() => {
    const detectFace = async () => {
      const intervalId = setInterval(async () => {
        if (webcamRef.current && !faceDetected) {
          const detections = await faceapi.detectAllFaces(webcamRef.current.video!, new faceapi.TinyFaceDetectorOptions());
          if (detections.length > 0) {
            setFaceDetected(true);
            clearInterval(intervalId);
            setTimeout(() => navigate('/verification-loading'), 1000);
          }
        }
      }, 1000);
    };
    detectFace();
  }, [faceDetected, navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-100">
      <h1 className="text-2xl font-semibold mb-4">Final Face ID Verification</h1>
      <Webcam 
        ref={webcamRef} 
        audio={false} 
        width="100%" 
        style={{ maxWidth: '600px' }} 
        className="mirrored-video" // Add the mirrored-video class here
      />
      <p>{faceDetected ? "Face Detected! Proceeding..." : "Detecting face..."}</p>
    </div>
  );
};

export default FaceIDFinal;
