// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import FaceIDMock from './FaceIDMock';
import PreSignCapture from './PreSignCapture';
import PostSignCapture from './PostSignCapture';
import PostCaptureAuthentication from './PostCaptureAuthentication';
import OverlayQRCode from './OverlayQRCode';

// New Digital Notarization Components
import ConfirmStart from './ConfirmStart';
import FaceScan from './FaceScan';
import DocumentUpload from './DocumentUpload';
import SignDocument from './SignDocument';
import ConfirmSignature from './ConfirmSignature';
import FaceIDFinal from './FaceIDFinal';
import VerificationLoading from './VerificationLoading';
import Success from './Success';

const App: React.FC = () => {
  return (
    <Router basename="/SmartSign">  {/* Added basename here */}
      <Routes>
        {/* Landing page, default route */}
        <Route path="/" element={<LandingPage />} />

        {/* Physical Notarization Workflow Routes */}
        <Route path="/face-id" element={<FaceIDMock />} />
        <Route path="/pre-sign-capture" element={<PreSignCapture />} />
        <Route path="/post-sign-capture" element={<PostSignCapture />} />
        <Route path="/post-capture-authentication" element={<PostCaptureAuthentication />} />
        <Route path="/overlay" element={<OverlayQRCode />} />

        {/* Digital Notarization Workflow Routes */}
        <Route path="/confirm-start" element={<ConfirmStart />} />
        <Route path="/face-scan" element={<FaceScan />} />
        <Route path="/document-upload" element={<DocumentUpload />} />
        <Route path="/sign-document" element={<SignDocument />} />
        <Route path="/confirm-signature" element={<ConfirmSignature />} />
        <Route path="/face-id-final" element={<FaceIDFinal />} />
        <Route path="/verification-loading" element={<VerificationLoading />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
};

export default App;
