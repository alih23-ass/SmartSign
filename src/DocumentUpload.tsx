// src/DocumentUpload.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "./subframe/components/Button";

const DocumentUpload: React.FC = () => {
  const [document, setDocument] = useState<File | null>(null);
  const navigate = useNavigate();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDocument(e.target.files ? e.target.files[0] : null);
  };

  const handleProceed = () => {
    if (document) {
      navigate('/sign-document', { state: { document } });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-100">
      <h1 className="text-2xl font-semibold mb-4 text-white">Upload Your Document</h1>
      <input type="file" onChange={handleFileChange} accept="application/pdf, image/*" />
      <Button className="h-10 w-full flex-none mt-4" variant="brand-secondary" size="large" onClick={handleProceed} disabled={!document}>
        Upload and Proceed
      </Button>
    </div>
  );
};

export default DocumentUpload;
