import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginPage from '@/pages/login';
import ForgotPasswordPage from '@/pages/forgot-password';
import LandingPage from '@/pages/landing-page';
import { Toaster } from '@/components/ui/sonner';
import Shop from '@/pages/shop';
import ShopAddress from '@/pages/shop-address';
import ShopPayment from '@/pages/shop-payment';
import ClosedOrder from '@/pages/close-shop';
import ShopItems from '@/pages/shop-items';
import { useState } from 'react';
import CoffeeShop from '@/pages/coffee-shop';
import ProductPage from '@/pages/product-page';
import Profile from '@/pages/profile';
import ResetPasswordPage from '@/pages/reset-password';
import VerifyEmail from '@/pages/verify-email';
import About from '@/pages/about-us';
import ContactUs from '@/pages/contact-us';
import OriginsPage from '@/pages/origins';
import Admin from '@/pages/admin-dashboard';
import Categories from './pages/categories';
import AdminOrigins from './pages/Admin-origins';
import CoffeeListings from './pages/coffee-listings';
import Orders from './pages/Orders';
import Transactions from './pages/transactions';
import Customers from './pages/customers';

export interface IStatus {
  status: boolean;
}

function App() {
  const [loggedIn] = useState(true);
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage status={loggedIn} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/shop" element={<Shop status={loggedIn} />} />
          <Route path="/coffee-shop" element={<CoffeeShop status={loggedIn} />} />
          <Route path="/shop-items" element={<ShopItems status={loggedIn} />} />
          <Route path="/shipping-address" element={<ShopAddress status={loggedIn} />} />
          <Route path="/shop-payment" element={<ShopPayment status={loggedIn} />} />
          <Route path="/close-shop" element={<ClosedOrder status={loggedIn} />} />
          <Route path="/product/:productId" element={<ProductPage status={loggedIn} />} />
          <Route path="/profile" element={<Profile status={loggedIn} />} />
          <Route path="/about" element={<About status={loggedIn} />} />
          <Route path="/contact-us" element={<ContactUs status={loggedIn} />} />
          <Route path="/origins" element={<OriginsPage status={loggedIn} />} />
          <Route path='/admin' element={<Admin status={loggedIn} />} />
          <Route path ='/categories' element={<Categories />} />
          <Route path='/admin-origins' element={<AdminOrigins  />} />
          <Route path='/coffee-listings' element={<CoffeeListings />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/transactions' element={<Transactions />} />
          <Route path='/customers' element={<Customers />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
