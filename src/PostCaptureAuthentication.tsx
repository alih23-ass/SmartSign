// src/PostCaptureAuthentication.tsx
import React, { useEffect, useRef, useState, useCallback } from 'react';
import Webcam from 'react-webcam';
import * as faceapi from 'face-api.js';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from "./subframe/components/Button"; // Assuming Subframe Button component is used

const PostCaptureAuthentication: React.FC = () => {
  const [isModelLoaded, setIsModelLoaded] = useState(false);
  const [faceDetected, setFaceDetected] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("Loading face detection models...");
  const webcamRef = useRef<Webcam>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const capturedDocument = location.state?.capturedDocument;

  // Load face-api.js models
  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = '/models'; // Ensure face-api.js models are stored in /public/models
      try {
        await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
        setIsModelLoaded(true);
      } catch (error) {
        console.error("Error loading face-api.js models:", error);
        setLoadingMessage("Error loading models. Please try again later.");
      }
    };
    loadModels();
  }, []);

  // Detect faces using the webcam feed
  const detectFace = useCallback(async () => {
    const intervalId = setInterval(async () => {
      if (webcamRef.current && webcamRef.current.video && !faceDetected) {
        try {
          const detections = await faceapi.detectAllFaces(
            webcamRef.current.video!,
            new faceapi.TinyFaceDetectorOptions()
          );

          if (detections.length > 0) {
            setFaceDetected(true);
            clearInterval(intervalId);

            // Redirect after detection
            setTimeout(() => {
              navigate('/overlay', { state: { capturedDocument } });
            }, 1000);
          }
        } catch (error) {
          console.error("Error detecting face:", error);
        }
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [faceDetected, navigate, capturedDocument]);

  // Start face detection once models are loaded
  useEffect(() => {
    if (isModelLoaded) {
      setLoadingMessage("Detecting face...");
      detectFace();
    }
  }, [isModelLoaded, detectFace]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-100">
      <div className="w-full max-w-[320px] flex flex-col items-center justify-center gap-8 px-6 py-6">
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
          videoConstraints={{ facingMode: { exact: "user" } }} // Front camera for face verification
          className="rounded-lg shadow-md mirrored-video"  // Apply the mirrored-video class here
          width="100%"
          style={{ maxWidth: '600px' }}
        />
        <div className="flex w-full flex-col items-center justify-center gap-8">
          <Button
            className="h-10 w-full flex-none"
            variant="brand-secondary"
            size="large"
            disabled // Disable the button as it's only for display status
          >
            {faceDetected ? "Face Detected! Proceeding..." : loadingMessage}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PostCaptureAuthentication;
