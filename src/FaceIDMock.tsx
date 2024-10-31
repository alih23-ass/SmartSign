// src/FaceIDMock.tsx
import React, { useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import * as faceapi from 'face-api.js';
import { useNavigate } from 'react-router-dom';
import { Button } from "./subframe/components/Button"; // Assuming Subframe Button component is used

const FaceIDMock: React.FC = () => {
  const [isModelLoaded, setIsModelLoaded] = useState(false);
  const [faceDetected, setFaceDetected] = useState(false);
  const webcamRef = useRef<Webcam>(null);
  const navigate = useNavigate();

  // Load Face API models
  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = '/models'; // Path to the face-api.js models (place in public/models)
      await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
      setIsModelLoaded(true);
    };
    loadModels();
  }, []);

  // Detect face in real-time
  useEffect(() => {
    const detectFace = async () => {
      const intervalId = setInterval(async () => {
        if (webcamRef.current && !faceDetected) {
          const videoElement = webcamRef.current.video!;
          const detections = await faceapi.detectAllFaces(
            videoElement,
            new faceapi.TinyFaceDetectorOptions()
          );
          
          if (detections.length > 0) {
            setFaceDetected(true);
            clearInterval(intervalId); // Stop face detection once face is found
            setTimeout(() => navigate('/pre-sign-capture'), 1000); // Redirect after detection
          }
        }
      }, 1000); // Run detection every second
    };
    if (isModelLoaded) detectFace();
  }, [isModelLoaded, faceDetected, navigate]);

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center rounded-md bg-neutral-100 px-6 py-6">
      <div className="flex w-full max-w-[320px] flex-col items-center justify-center gap-8 px-12 py-12">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex flex-col items-center gap-1">
            <span className="text-heading-2 font-heading-2 text-default-font">
              Face ID Verification
            </span>
            <span className="text-body font-body text-subtext-color">
              Verifying your identity securely.
            </span>
          </div>
        </div>
        <Webcam
          ref={webcamRef}
          audio={false}
          screenshotFormat="image/jpeg"
          videoConstraints={{ facingMode: { exact: "user" } }} // Front camera for iPhone
          className="rounded-lg shadow-md mirrored-video" // Add mirrored-video class here
          width="100%"
          style={{ maxWidth: '600px' }}
        />
        <div className="flex w-full flex-col items-center justify-center gap-8">
          <Button
            className="h-10 w-full flex-none"
            variant="brand-secondary"
            size="large"
            disabled // Disable the button
          >
            {faceDetected ? "Face Detected! Proceeding..." : "Detecting face..."}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FaceIDMock;
