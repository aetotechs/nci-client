import { HashRouter, Routes, Route } from 'react-router-dom';
import React, { Suspense, useEffect, useState } from 'react';
import { Toaster } from '@/components/common/ui/sonner';
import { isAuthenticated } from './utils/cookies/UserCookieManager';
import AdminRoute from './components/admin/other/AdminRoute';
import LoadingSpinner from './components/common/ui/LoadingSpinner';

const LoginPage = React.lazy(() => import('@/pages/auth/login'));
const ForgotPasswordPage = React.lazy(() => import('@/pages/auth/forgot-password'));
const LandingPage = React.lazy(() => import('@/pages/user/Home'));
const Cart = React.lazy(() => import('@/pages/user/Cart'));
const ShopAddress = React.lazy(() => import('@/pages/user/ShopAddress'));
const ShopPayment = React.lazy(() => import('@/pages/user/Payment'));
const ClosedOrder = React.lazy(() => import('@/pages/user/Chekout'));
const Listings = React.lazy(() => import('@/pages/user/Listings'));
const ProductPage = React.lazy(() => import('@/pages/user/ProductDetails'));
const Profile = React.lazy(() => import('@/pages/user/Profile'));
const ResetPasswordPage = React.lazy(() => import('@/pages/auth/reset-password'));
const VerifyEmail = React.lazy(() => import('@/pages/auth/verify-email'));
const About = React.lazy(() => import('@/pages/user/AboutUs'));
const ContactUs = React.lazy(() => import('@/pages/user/ContactUs'));
const OriginsPage = React.lazy(() => import('@/pages/user/Origins'));
const Admin = React.lazy(() => import('@/pages/admin/admin-dashboard'));
const Categories = React.lazy(() => import('./pages/admin/categories'));
const AdminOrigins = React.lazy(() => import('./pages/admin/Admin-origins'));
const CoffeeListings = React.lazy(() => import('./pages/admin/coffee-listings'));
const Orders = React.lazy(() => import('./pages/admin/Orders'));
const Transactions = React.lazy(() => import('./pages/admin/transactions'));
const Customers = React.lazy(() => import('./pages/admin/customers'));
const Analytics = React.lazy(() => import('./pages/admin/analytics'));
const Settings = React.lazy(() => import('./pages/user/Settings'));
const UserCategoriesPage = React.lazy(() => import('./pages/user/UserCategories'));
const VerifyOtp = React.lazy(() => import('./pages/auth/verify-otp'));
const NotFound = React.lazy(() => import('./pages/auth/NotFound'));

export interface IStatus {
  status: boolean;
  user?: any;
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
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route index element={<LandingPage status={loggedIn} />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/verify-email" element={<VerifyEmail />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/verify-otp" element={<VerifyOtp />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
            <Route path="/cart" element={<Cart status={loggedIn} />} />
            <Route path="/coffee-shop" element={<Listings status={loggedIn} />} />
            <Route path="/shipping-address" element={<ShopAddress status={loggedIn} />} />
            <Route path="/shop-payment" element={<ShopPayment status={loggedIn} />} />
            <Route path="/close-shop" element={<ClosedOrder status={loggedIn} />} />
            <Route path="/product/:productId" element={<ProductPage status={loggedIn} />} />
            <Route path="/profile" element={<Profile status={loggedIn} />} />
            <Route path="/about" element={<About status={loggedIn} />} />
            <Route path="/contact-us" element={<ContactUs status={loggedIn} />} />
            <Route path="/region/:originId" element={<OriginsPage status={loggedIn} />} />
            <Route path="/category/:categoryId" element={<UserCategoriesPage status={loggedIn} />} />
            <Route path="*" element={<NotFound />} />

            <Route path="/dashboard" element={<AdminRoute><Admin /></AdminRoute>} />
            <Route path="/categories" element={<AdminRoute><Categories /></AdminRoute>} />
            <Route path="/admin-origins" element={<AdminRoute><AdminOrigins /></AdminRoute>} />
            <Route path="/coffee-listings" element={<AdminRoute><CoffeeListings /></AdminRoute>} />
            <Route path="/orders" element={<AdminRoute><Orders /></AdminRoute>} />
            <Route path="/transactions" element={<AdminRoute><Transactions /></AdminRoute>} />
            <Route path="/customers" element={<AdminRoute><Customers /></AdminRoute>} />
            <Route path="/analytics" element={<AdminRoute><Analytics /></AdminRoute>} />
            <Route path="/settings" element={<AdminRoute><Settings /></AdminRoute>} />
          </Routes>
        </Suspense>
      </HashRouter>
    </>
  );
}

export default App;
