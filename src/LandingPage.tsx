// src/LandingPage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "./subframe/components/Button";  // Assuming you are using Subframe components

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  // Handlers for both workflows
  const handlePhysicalNotarization = () => {
    navigate('/face-id'); // Redirect to the physical notarization flow (current workflow)
  };

  const handleDigitalNotarization = () => {
    navigate('/confirm-start'); // Redirect to the digital notarization flow (new workflow)
  };

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-neutral-100 px-6 py-6">
      <div className="flex w-full max-w-[320px] flex-col items-center justify-center gap-8 px-12 py-12">
        <div className="flex flex-col items-center justify-center gap-6">
          <img
            className="flex-none"
            src="https://res.cloudinary.com/subframe/image/upload/v1730168621/uploads/4312/ds5jmr34sctb4aw4qejf.png"
            alt="SmartSign Logo"
          />
          <div className="flex flex-col items-center gap-1">
            <span className="text-heading-2 font-heading-2 text-default-font">
              Welcome to SmartSign MVP
            </span>
            <span className="text-body font-body text-subtext-color">
              Your secure and smart way to sign documents.
            </span>
          </div>
        </div>

        {/* Button for physical notarization */}
        <Button
          className="h-10 w-full flex-none"
          variant="brand-secondary"
          size="large"
          onClick={handlePhysicalNotarization}  // Redirect to FaceID verification (physical notarization)
        >
          Login to Notarize Physical Documents
        </Button>

        {/* Button for digital notarization */}
        <Button
          className="h-10 w-full flex-none mt-4"  // Spacing added for the second button
          variant="brand-secondary"
          size="large"
          onClick={handleDigitalNotarization}  // Redirect to the digital workflow
        >
          Login to Notarize Digital Document
        </Button>
      </div>
    </div>
  );
};

export default LandingPage;