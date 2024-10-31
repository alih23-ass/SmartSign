import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { Button } from './subframe/components/Button'; // Assuming Subframe Button component is used

const DisplayQRCode: React.FC = () => {
  const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null);

  // Generate QR code when the component mounts
  useEffect(() => {
    const generateQRCode = async () => {
      try {
        const qrCodeDataUrl = await QRCode.toDataURL('Document Verified - SmartSign', { width: 150 });
        setQrCodeUrl(qrCodeDataUrl);
      } catch (error) {
        console.error('Error generating QR code:', error);
      }
    };

    generateQRCode();
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-success-50"> {/* Full height and width for background */}
      <div className="w-full max-w-[320px] flex flex-col items-center justify-center gap-8 px-12 py-12">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex flex-col items-center gap-1">
            <span className="text-heading-2 font-heading-2 text-white">
              Your Notarization is Complete
            </span>
            <span className="text-body font-body text-white">
              A unique QR code has been generated to verify your signature.
              This is your official notarization record.
            </span>
          </div>
        </div>

        {/* Display the QR Code */}
        {qrCodeUrl && (
          <img
            src={qrCodeUrl}
            alt="QR Code for Notarization Verification"
            className="rounded-lg shadow-md"
          />
        )}

        {/* Download QR Code Button */}
        {qrCodeUrl && (
          <div className="flex w-full flex-col items-center justify-center gap-8">
            <a href={qrCodeUrl} download="notarization_qr_code.jpg" className="w-full">
              <Button
                className="h-10 w-full flex-none !text-white"  // Added `text-white` class
                variant="inverse"
                size="large"
                style={{ color: 'white' }} // Adding inline styles to enforce white text
              >
                Download QR Code
              </Button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default DisplayQRCode;
