
import { Routes, Route } from 'react-router-dom';
import LandingPage from '@/pages/user/Home';
import LoginPage from '@/pages/auth/login';
import ForgotPasswordPage from '@/pages/auth/forgot-password';
import ResetPasswordPage from '@/pages/auth/reset-password';
import VerifyEmail from '@/pages/auth/verify-email';
import Shop from '@/pages/user/Cart';
import Listings from '@/pages/user/Listings';
import ShopAddress from '@/pages/user/ShopAddress';
import ShopPayment from '@/pages/user/Payment';
import ClosedOrder from '@/pages/user/Chekout';
import ProductPage from '@/pages/user/ProductDetails';
import Profile from '@/pages/user/Profile';
import About from '@/pages/user/AboutUs';
import ContactUs from '@/pages/user/ContactUs';
import OriginsPage from '@/pages/user/Origins';
import UserCategoriesPage from '@/pages/user/UserCategories';
import VerifyOtp from '@/pages/auth/verify-otp';
import NotAuthorized from '@/pages/admin/NotAuthorized';
import NotFound from '@/pages/auth/NotFound';

const ClientLayout = ( loggedIn: any ) => (
  <Routes>
    <Route index element={<LandingPage status={loggedIn} />} />
    <Route path="login" element={<LoginPage />} />
    <Route path="verify-email" element={<VerifyEmail />} />
    <Route path="forgot-password" element={<ForgotPasswordPage />} />
    <Route path="verify-otp" element={<VerifyOtp />} />
    <Route path="reset-password" element={<ResetPasswordPage />} />
    <Route path="shop" element={<Shop status={loggedIn} />} />
    <Route path="coffee-shop" element={<Listings status={loggedIn} />} />
    <Route path="shipping-address" element={<ShopAddress status={loggedIn} />} />
    <Route path="shop-payment" element={<ShopPayment status={loggedIn} />} />
    <Route path="checkout" element={<ClosedOrder status={loggedIn} />} />
    <Route path="product/:productId" element={<ProductPage status={loggedIn} />} />
    <Route path="profile" element={<Profile status={loggedIn} />} />
    <Route path="about" element={<About status={loggedIn} />} />
    <Route path="contact-us" element={<ContactUs status={loggedIn} />} />
    <Route path="region/:originId" element={<OriginsPage status={loggedIn} />} />
    <Route path="category/:categoryId" element={<UserCategoriesPage status={loggedIn} />} />
    <Route path="not-authorized" element={<NotAuthorized />} />

    {/* Default 404 route */}
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default ClientLayout;
