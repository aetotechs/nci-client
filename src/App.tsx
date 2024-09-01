import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginPage from '@/pages/login';
import ForgotPasswordPage from '@/pages/forgot-password';
import LandingPage from '@/pages/landing-page';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
