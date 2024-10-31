import { IStatus } from '@/App';
import Addresses from '@/components/user/other/Addresses';
import BreadCrumb from '@/components/common/other/BreadCrumb';
import Footer from '@/components/user/other/Footer';
import Header from '@/components/user/other/Header';
import MyAccount from '@/components/user/other/MyAccount';
import MyOrders from '@/components/user/other/MyOrders';
import PasswordSecurity from '@/components/common/other/PasswordSecurity';
import PaymentMethods from '@/components/user/other/PaymentMethods';
import Privacy from '@/components/user/other/Privacy';
import Wishlist from '@/components/user/other/Wishlist';
import { FetchUser } from '@/utils/hooks/api-routes';
import { getAuthUser } from '@/utils/cookies/UserCookieManager';

import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface Address {
  id: number;
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  updatedAt: string | null;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  position: string;
  company: string;
  companyWebsiteUrl: string;
  createdAt: string;
  updatedAt: string;
  role: string;
  userId: string;
  verified: boolean;
  workPhone: string;
  address: Address;
}
export interface ProfileProps {
  user?: User | null;
}

function Profile({ status }: IStatus) {
  const [activeLink, setActiveLink] = useState('My Account');
  const [user, setUser] = useState<User | null>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const breadcrumbItems = [{ href: '/profile', label: 'Profile' }];
  const { pathname } = useLocation();

  const email = getAuthUser().email;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        const response = await fetch(FetchUser(email));

        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const data = await response.json();

        setUser(data);
      } catch (err) {
        setError('Error fetching user data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [email]);

  const renderActiveComponent = () => {
    switch (activeLink) {
      case 'My Account':
        return <MyAccount user={user} />;
      case 'Password and Security':
        return <PasswordSecurity user={user} />;
      case 'My Orders':
        return <MyOrders user={user} />;
      case 'Wishlist':
        return <Wishlist status={status} />;
      case 'Addresses':
        return <Addresses user={user} />;
      // case 'Payment Methods':
      //   return <PaymentMethods user={user} />;
      case 'Privacy':
        return <Privacy user={user} />;
      default:
        return <MyAccount user={user} />;
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="md:px-[5vw] md:max-w-[100vw]  ">
        <Header status={status} />

        <div className="flex md:justify-between px-5 md:py-9 md:px-0 py-5 bg-white md:bg-[#fffff0]">
          <h3 className="text-[26px]  font-semibold">Profile</h3>
        </div>

        <div className="md:flex gap-8  ">
          <div className="pb-4 md:pb-0 bg-white ">
            <div className="flex px-5 md:px-0 md:w-[25vw] w-[100vw] overflow-x-auto md:overflow-hidden bg-white md:p-5 rounded-[8px]">
              <div className="flex md:flex-col items-center md:items-start md:px-4  gap-4">
                <div
                  onClick={() => setActiveLink('My Account')}
                  className={`${activeLink === 'My Account' ? 'text-primary w-[116px] text-center md:text-left   md:w-[275px] h-[38px] rounded-[5px] md:rounded-none md:border-l-4 md:px-5 py-2 border-primary bg-outline font-medium ' : 'font-normal w-[100px] '} text-[15px] md:text-base cursor-pointer `}
                >
                  My Account
                </div>
                <div
                  onClick={() => setActiveLink('Password and Security')}
                  className={`${activeLink === 'Password and Security' ? 'text-primary w-[116px] text-center md:text-left   md:w-[275px] h-[38px] rounded-[5px] md:rounded-none md:border-l-4 md:px-5 py-2 border-primary bg-outline font-medium ' : 'font-normal w-[80px]  md:w-full '} text-[15px] md:text-base cursor-pointer   `}
                >
                  <span className="hidden md:inline-flex">Password &</span> <span>Security</span>
                </div>
                <div
                  onClick={() => setActiveLink('My Orders')}
                  className={`${activeLink === 'My Orders' ? 'text-primary w-[116px] text-center md:text-left   md:w-[275px] h-[38px] rounded-[5px] md:rounded-none md:border-l-4 md:px-5 py-2 border-primary bg-outline font-medium ' : 'font-normal w-[80px] '} text-[15px] md:text-base cursor-pointer  `}
                >
                  My Orders
                </div>
                <div
                  onClick={() => setActiveLink('Wishlist')}
                  className={`${activeLink === 'Wishlist' ? 'text-primary w-[116px] text-center md:text-left   md:w-[275px] h-[38px] rounded-[5px] md:rounded-none md:border-l-4 md:px-5 py-2 border-primary bg-outline font-medium ' : 'font-normal w-[100px] '} text-[15px] md:text-base cursor-pointer  `}
                >
                  My Wishlist
                </div>
                <div
                  onClick={() => setActiveLink('Addresses')}
                  className={`${activeLink === 'Addresses' ? 'text-primary w-[116px] text-center md:text-left   md:w-[275px] h-[38px] rounded-[5px] md:rounded-none md:border-l-4 md:px-5 py-2 border-primary bg-outline font-medium ' : 'font-normal w-[100px] '} text-[15px] md:text-base cursor-pointer  `}
                >
                  Addresses
                </div>
                {/* <div
                  onClick={() => setActiveLink('Payment Methods')}
                  className={`${activeLink === 'Payment Methods' ? 'text-primary w-[155px] h-[38px] md:border-l-4 px-1 py-2 rounded-[5px] md:w-[275px] md:rounded-none border-primary bg-outline font-medium ' : 'font-normal w-[150px]  '} text-[15px] md:text-base cursor-pointer `}
                >
                  Payment Methods
                </div> */}
                <div
                  onClick={() => setActiveLink('Privacy')}
                  className={`${activeLink === 'Privacy' ? 'text-primary w-[116px] text-center md:text-left   md:w-[275px] h-[38px] rounded-[5px] md:rounded-none md:border-l-4 md:px-5 py-2 border-primary bg-outline font-medium ' : 'font-normal w-[60px]  '} text-[15px] md:text-base cursor-pointer  `}
                >
                  Privacy
                </div>
                <div className="cursor-pointer font-normal text-[15px] md:text-base  w-[70px]">
                  <Link to="/login">Log Out</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-[60vw] pb-4">{renderActiveComponent()}</div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
