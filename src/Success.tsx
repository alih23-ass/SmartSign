// src/Success.tsx
import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { Button } from "./subframe/components/Button";

const Success: React.FC = () => {
  const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null);

  useEffect(() => {
    const generateQRCode = async () => {
      const url = await QRCode.toDataURL('Document Verified - SmartSign');
      setQrCodeUrl(url);
    };
    generateQRCode();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-success-600">
      <h1 className="text-2xl font-semibold mb-4 text-white">Success!</h1>
      <p className="text-lg text-white">Your notarization was successful.</p>
      {qrCodeUrl && (
        <>
          <img src={qrCodeUrl} alt="QR Code" className="mt-4" />
          <a href={qrCodeUrl} download="notarization_qr_code.jpg" className="mt-4">
            <Button className="h-10 w-full flex-none" variant="inverse" size="large">
              Download QR Code
            </Button>
          </a>
        </>
      )}
    </div>
  );
};

export default Success;
