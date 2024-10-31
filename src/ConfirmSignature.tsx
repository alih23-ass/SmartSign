// src/ConfirmSignature.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "./subframe/components/Button";

const ConfirmSignature: React.FC = () => {
  const navigate = useNavigate();

  const handleConfirm = () => {
    navigate('/face-id-final');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-100">
      <h1 className="text-2xl font-semibold mb-4 text-white">Confirm Your Signature</h1>
      <p className="text-lg mb-8 text-white">Have you signed the document?</p>
      <Button className="h-10 w-full flex-none" variant="brand-secondary" size="large" onClick={handleConfirm}>
        Yes, I Have Signed
      </Button>
    </div>
  );
};

export default ConfirmSignature;
