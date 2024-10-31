// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage'; // Landing Page component
import FaceIDMock from './FaceIDMock'; // Mock Face ID component
import PreSignCapture from './PreSignCapture'; // Component to capture document before signing
import PostSignCapture from './PostSignCapture'; // Component to capture the signed document
import PostCaptureAuthentication from './PostCaptureAuthentication'; // Final Face ID verification component
import OverlayQRCode from './OverlayQRCode'; // QR code overlay component after signing

// New Digital Notarization Components
import ConfirmStart from './ConfirmStart'; // Confirmation page for digital notarization
import FaceScan from './FaceScan';
import DocumentUpload from './DocumentUpload' ; // Upload document page
import SignDocument from './SignDocument'; // Document signing with webcam
import ConfirmSignature from './ConfirmSignature'; // Confirm document is signed
import FaceIDFinal from './FaceIDFinal'; // Final Face ID check
import VerificationLoading from './VerificationLoading'; // Loading page for verification
import Success from './Success'; // Success page with QR code

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Landing page, default route */}
        <Route path="/" element={<LandingPage />} />

        {/* Route for the first Face ID verification (physical notarization) */}
        <Route path="/face-id" element={<FaceIDMock />} />

        {/* Route for capturing the document before it is signed (physical notarization) */}
        <Route path="/pre-sign-capture" element={<PreSignCapture />} />

        {/* Route for capturing the document after it is signed (physical notarization) */}
        <Route path="/post-sign-capture" element={<PostSignCapture />} />

        {/* Route for final Face ID verification after document capture (physical notarization) */}
        <Route path="/post-capture-authentication" element={<PostCaptureAuthentication />} />

        {/* Route for overlaying the QR code on the signed document (physical notarization) */}
        <Route path="/overlay" element={<OverlayQRCode />} />

        {/* Digital Notarization Workflow Routes */}
        
        {/* Confirmation to start the digital notarization process */}
        <Route path="/confirm-start" element={<ConfirmStart />} />

        <Route path="/face-scan" element={<FaceScan />} />

        {/* Digital document upload page */}
        <Route path="/document-upload" element={<DocumentUpload />} />

        {/* Page to sign the document with webcam */}
        <Route path="/sign-document" element={<SignDocument />} />

        {/* Confirm that the document is signed */}
        <Route path="/confirm-signature" element={<ConfirmSignature />} />

        {/* Final Face ID verification after document signing */}
        <Route path="/face-id-final" element={<FaceIDFinal />} />

        {/* Verification loading page for digital notarization */}
        <Route path="/verification-loading" element={<VerificationLoading />} />

        {/* Success page with a downloadable QR code for digital notarization */}
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
};

export default App;
