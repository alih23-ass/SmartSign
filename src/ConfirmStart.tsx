// src/ConfirmStart.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "./subframe/components/Button";

const ConfirmStart: React.FC = () => {
  const navigate = useNavigate();

  const handleConfirm = () => {
    navigate('/face-scan');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-100">
      <h1 className="text-2xl font-semibold mb-4 text-white">Ready to Start Notarization?</h1>
      <p className="text-lg mb-8 text-white">Click below to begin the notarization process.</p>
      <Button
        className="h-10 w-full flex-none"
        variant="brand-secondary"
        size="large"
        onClick={handleConfirm}
      >
        Start Notarization
      </Button>
    </div>
  );
};

export default ConfirmStart;
