import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginPage from '@/pages/login';
import ForgotPasswordPage from '@/pages/forgot-password';
import LandingPage from '@/pages/landing-page';
import { Toaster } from '@/components/ui/sonner';
import Shop from '@/pages/shop';
import ShopAddress from '@/pages/shop-address';
import ShopPayment from '@/pages/shop-payment';
import ClosedOrder from './pages/close-shop';

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shipping-address" element={<ShopAddress />} />
          <Route path="/shop-payment" element={<ShopPayment />} />
          <Route path="/close-shop" element={<ClosedOrder />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
