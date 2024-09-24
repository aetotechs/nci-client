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
import { FetchUser } from '@/lib/api-routes';
import { getAuthUser } from '@/lib/cookie';

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
  const [user, setUser] = useState<User | null>( );
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
        return <Wishlist status={status}  />;
      case 'Addresses':
        return <Addresses user={user} />;
      case 'Payment Methods':
        return <PaymentMethods user={user} />;
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
    <div className="md:px-[5vw]">
      <div className="mb-10 md:my-10   ">
      <Header status={status} /> 

        <div className="mt-10 px-3 hidden md:flex">
          <BreadCrumb items={breadcrumbItems} />
        </div>

        <div className="flex md:justify-between px-3 md:px-0 py-5">
          <h3 className="text-[26px] font-semibold">Profile</h3>
        </div>

        <div className="md:flex gap-12">
          <div className="">
            <div className="flex px-3 md:px-0 md:w-[311px] w-[100vw] overflow-x-auto md:overflow-hidden bg-white md:p-5 rounded-[8px]">
              <div className="flex md:flex-col md:px-4 gap-6">
                <div
                  onClick={() => setActiveLink('My Account')}
                  className={`${activeLink === 'My Account' ? 'text-primary w-[275px] h-[38px] border-l-4 px-5 py-2 border-primary bg-outline font-medium ' : 'font-normal'} text-base cursor-pointer `}>
                  My Account
                </div>
                <div
                  onClick={() => setActiveLink('Password and Security')}
                  className={`${activeLink === 'Password and Security' ? 'text-primary w-[295px] md:w-[275px] h-[38px] border-l-4 px-2 py-2 border-primary bg-outline font-medium ' : 'font-normal py-3 md:py-0'} text-base cursor-pointer`}>
                  <span className="hidden md:inline-flex">Password &</span> <span>Security</span>
                </div>
                <div
                  onClick={() => setActiveLink('My Orders')}
                  className={`${activeLink === 'My Orders' ? 'text-primary w-[275px] h-[38px] border-l-4 px-5 py-2 border-primary bg-outline font-medium ' : 'font-normal'} text-base cursor-pointer`}>
                  My Orders
                </div>
                <div
                  onClick={() => setActiveLink('Wishlist')}
                  className={`${activeLink === 'Wishlist' ? 'text-primary w-[275px] h-[38px] border-l-4 px-5 py-2 border-primary bg-outline font-medium ' : 'font-normal'} text-base cursor-pointer`}>
                  My Wishlist
                </div>
                <div
                  onClick={() => setActiveLink('Addresses')}
                  className={`${activeLink === 'Addresses' ? 'text-primary w-[275px] h-[38px] border-l-4 py-2 px-5 border-primary bg-outline font-medium ' : 'font-normal md:px-0 '} text-base cursor-pointer px-5 py-2 `}>
                  Addresses
                </div>
                <div
                  onClick={() => setActiveLink('Payment Methods')}
                  className={`${activeLink === 'Payment Methods' ? 'text-primary w-[275px] h-[38px] border-l-4 px-5 py-2 border-primary bg-outline font-medium ' : 'font-normal'} text-base cursor-pointer `}>
                  Payment Methods
                </div>
                <div
                  onClick={() => setActiveLink('Privacy')}
                  className={`${activeLink === 'Privacy' ? 'text-primary w-[275px] h-[38px] border-l-4 px-5 py-2 border-primary bg-outline font-medium ' : 'font-normal'} text-base cursor-pointer`}>
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
