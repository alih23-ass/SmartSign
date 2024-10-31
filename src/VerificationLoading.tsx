// src/VerificationLoading.tsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const VerificationLoading: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/success');
    }, 3000); // Simulate verification process
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-100">
      <h1 className="text-2xl font-semibold mb-4 text-white">Verifying Your Notarization</h1>
      <p className="text-white">Please wait while we verify your document...</p>
    </div>
  );
};

export default VerificationLoading;
