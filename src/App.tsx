import { HashRouter, Routes, Route } from 'react-router-dom';

import LoginPage from '@/pages/auth/commons/login';
import ForgotPasswordPage from '@/pages/auth/commons/forgot-password';
import LandingPage from '@/pages/user/landing-page';
import { Toaster } from '@/components/common/ui/sonner';
import Shop from '@/pages/user/shop';
import ShopAddress from '@/pages/user/shop-address';
import ShopPayment from '@/pages/user/shop-payment';
import ClosedOrder from '@/pages/user/close-shop';
import { useEffect, useState } from 'react';
import CoffeeShop from '@/pages/user/coffee-shop';
import ProductPage from '@/pages/user/product-page';
import Profile, { User } from '@/pages/user/profile';
import ResetPasswordPage from '@/pages/auth/commons/reset-password';
import VerifyEmail from '@/pages/auth/commons/verify-email';
import About from '@/pages/user/about-us';
import ContactUs from '@/pages/user/contact-us';
import OriginsPage from '@/pages/admin/origins';
import Admin from '@/pages/admin/admin-dashboard';
import Categories from './pages/admin/categories';
import AdminOrigins from './pages/admin/Admin-origins';
import CoffeeListings from './pages/admin/coffee-listings';
import Orders from './pages/admin/Orders';
import Transactions from './pages/admin/transactions';
import Customers from './pages/admin/customers';
import Analytics from './pages/admin/analytics';
import Settings from './pages/user/settings';

import { isAuthenticated } from './utils/cookies/UserCookieManager';
import AdminRoute from './components/admin/other/AdminRoute';
import UserCategoriesPage from './pages/user/UserCategories';
import VerifyOtp from './pages/auth/commons/verify-otp';
export interface IStatus {
  status: boolean;
  user?: User;
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const UserLoggedIn = isAuthenticated();
    setLoggedIn(UserLoggedIn);
  }, []);

  return (
    <>
      <Toaster />
      <HashRouter>
        <Routes>
          <Route index element={<LandingPage status={loggedIn} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/verify-otp" element={<VerifyOtp />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/shop" element={<Shop status={loggedIn} />} />
          <Route path="/coffee-shop" element={<CoffeeShop status={loggedIn} />} />
          <Route path="/shipping-address" element={<ShopAddress status={loggedIn} />} />
          <Route path="/shop-payment" element={<ShopPayment status={loggedIn} />} />
          <Route path="/close-shop" element={<ClosedOrder status={loggedIn} />} />
          <Route path="/product/:productId" element={<ProductPage status={loggedIn} />} />
          <Route path="/profile" element={<Profile status={loggedIn} />} />
          <Route path="/about" element={<About status={loggedIn} />} />
          <Route path="/contact-us" element={<ContactUs status={loggedIn} />} />
          <Route path="/region/:originId" element={<OriginsPage status={loggedIn} />} />
          <Route path="/category/:categoryId" element={<UserCategoriesPage status={loggedIn} />} />

          <Route
            path="/admin"
            element={
              <AdminRoute>
                <Admin />
              </AdminRoute>
            }
          />
          <Route
            path="/categories"
            element={
              <AdminRoute>
                <Categories />
              </AdminRoute>
            }
          />
          <Route
            path="/admin-origins"
            element={
              <AdminRoute>
                <AdminOrigins />
              </AdminRoute>
            }
          />
          <Route
            path="/coffee-listings"
            element={
              <AdminRoute>
                <CoffeeListings />
              </AdminRoute>
            }
          />
          <Route
            path="/orders"
            element={
              <AdminRoute>
                <Orders />
              </AdminRoute>
            }
          />
          <Route
            path="/transactions"
            element={
              <AdminRoute>
                <Transactions />
              </AdminRoute>
            }
          />
          <Route
            path="/customers"
            element={
              <AdminRoute>
                <Customers />
              </AdminRoute>
            }
          />
          <Route
            path="/analytics"
            element={
              <AdminRoute>
                <Analytics />
              </AdminRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <AdminRoute>
                <Settings />
              </AdminRoute>
            }
          />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
