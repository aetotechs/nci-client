import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAuthUser } from '@/utils/cookies/UserCookieManager';

import Admin from '@/pages/admin/admin-dashboard';
import Categories from '@/pages/admin/categories';
import AdminOrigins from '@/pages/admin/Admin-origins';
import CoffeeListings from '@/pages/admin/coffee-listings';
import Orders from '@/pages/admin/Orders';
import Transactions from '@/pages/admin/transactions';
import Customers from '@/pages/admin/customers';
import Analytics from '@/pages/admin/analytics';
import Settings from '@/pages/user/Settings';

const getUserRole = () => {
  const userRole = getAuthUser();
  return userRole?.role;
};

const AdminLayout = () => {
  const [userRole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
    const role = getUserRole();
    setUserRole(role);
  }, []);

  if (userRole === null) {
    return <div>Loading...</div>;
  }

  if (userRole !== 'ADMIN') {
    return <Navigate to="/not-authorized" />;
  }

  return (
    <Routes>
      <Route path="" element={<Admin />} />
      <Route path="categories" element={<Categories />} />
      <Route path="admin-origins" element={<AdminOrigins />} />
      <Route path="coffee-listings" element={<CoffeeListings />} />
      <Route path="orders" element={<Orders />} />
      <Route path="transactions" element={<Transactions />} />
      <Route path="customers" element={<Customers />} />
      <Route path="analytics" element={<Analytics />} />
      <Route path="settings" element={<Settings />} />
    </Routes>
  );
};

export default AdminLayout;