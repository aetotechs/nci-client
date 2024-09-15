import { IStatus } from '@/App';
import Addresses from '@/components/Addresses';
import BreadCrumb from '@/components/BreadCrumb';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import MyAccount from '@/components/MyAccount';
import MyOrders from '@/components/MyOrders';
import PasswordSecurity from '@/components/PasswordSecurity';
import PaymentMethods from '@/components/PaymentMethods';
import Privacy from '@/components/Privacy';
import Wishlist from '@/components/Wishlist';

import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Profile({ status }: IStatus) {
  const [activeLink, setActiveLink] = useState('My Account');
  const breadcrumbItems = [{ href: '/profile', label: 'Profile' }];
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const renderActiveComponent = () => {
    switch (activeLink) {
      case 'My Account':
        return <MyAccount />;
      case 'Password and Security':
        return <PasswordSecurity />;
      case 'My Orders':
        return <MyOrders />;
      case 'Wishlist':
        return <Wishlist status={status} />;
      case 'Addresses':
        return <Addresses />;
      case 'Payment Methods':
        return <PaymentMethods />;
      case 'Privacy':
        return <Privacy />;
      default:
        return <MyAccount />;
    }
  };

  return (
    <div className="max-w-full  ">
      <div className="mb-10 md:my-10 mx-auto max-w-[100vw] md:w-[1232px]">
        <Header status={status} />

        <div className="mt-10 px-3 hidden md:flex">
          <BreadCrumb items={breadcrumbItems} />
        </div>

        <div className="flex  md:justify-between px-3 md:px-0    py-5">
          <h3 className="text-[26px] font-semibold">Profile</h3>
        </div>
        <div className="md:flex gap-12">
          <div className="">
            <div className="flex px-3 md:px-0 md:w-[311px] w-[100vw] overflow-x-auto md:overflow-hidden bg-white md:p-5 rounded-[8px]">
              <div className="flex md:flex-col md:px-4 gap-6">
                <div
                  onClick={() => setActiveLink('My Account')}
                  className={`${activeLink === 'My Account' ? 'text-primary w-[275px] h-[38px] border-l-4 px-5 py-2 border-primary bg-outline font-medium ' : 'font-normal'} text-base cursor-pointer `}
                >
                  My Account
                </div>
                <div
                  onClick={() => setActiveLink('Password and Security')}
                  className={`${activeLink === 'Password and Security' ? 'text-primary w-[295px] md:w-[275px] h-[38px] border-l-4 px-2 py-2 border-primary bg-outline font-medium ' : 'font-normal py-3 md:py-0'} text-base cursor-pointer`}
                >
                  <span className="hidden md:inline-flex">Password &</span> <span>Security</span>
                </div>
                <div
                  onClick={() => setActiveLink('My Orders')}
                  className={`${activeLink === 'My Orders' ? 'text-primary w-[275px] h-[38px] border-l-4 px-5 py-2 border-primary bg-outline font-medium ' : 'font-normal'} text-base cursor-pointer`}
                >
                  My Orders
                </div>
                <div
                  onClick={() => setActiveLink('Wishlist')}
                  className={`${activeLink === 'Wishlist' ? 'text-primary w-[275px] h-[38px] border-l-4 px-5 py-2 border-primary bg-outline font-medium ' : 'font-normal'} text-base cursor-pointer`}
                >
                  My Wishlist
                </div>
                <div
                  onClick={() => setActiveLink('Addresses')}
                  className={`${activeLink === 'Addresses' ? 'text-primary w-[275px] h-[38px] border-l-4  py-2 px-5 border-primary bg-outline font-medium ' : 'font-normal md:px-0 '} text-base cursor-pointer px-5 py-2 `}
                >
                  Addresses
                </div>
                <div
                  onClick={() => setActiveLink('Payment Methods')}
                  className={`${activeLink === 'Payment Methods' ? 'text-primary w-[275px] h-[38px] border-l-4 px-5 py-2 border-primary bg-outline font-medium ' : 'font-normal'} text-base cursor-pointer `}
                >
                  Payment Methods
                </div>
                <div
                  onClick={() => setActiveLink('Privacy')}
                  className={`${activeLink === 'Privacy' ? 'text-primary w-[275px] h-[38px] border-l-4 px-5 py-2 border-primary bg-outline font-medium ' : 'font-normal'} text-base cursor-pointer`}
                >
                  Privacy
                </div>
                <div className="cursor-pointer font-normal text-base">
                  <Link to="/login">Log Out</Link>
                </div>
              </div>
            </div>
          </div>

          <div>{renderActiveComponent()}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
