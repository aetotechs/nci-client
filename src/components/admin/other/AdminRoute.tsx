import { getAuthUser } from '@/utils/cookies/UserCookies';
import React from 'react';
import { Navigate } from 'react-router-dom';

const getUserRole = () => {
  const userRole = getAuthUser();
  const role = userRole.role;
  return role;
};

interface AdminRouteProps {
  children: React.ReactNode;
}

const AdminRoute = ({ children }: AdminRouteProps) => {
  const userRole = getUserRole();

  if (userRole !== 'ADMIN') {
    return <Navigate to="/not-authorized" />;
  }

  return <>{children}</>;
};

export default AdminRoute;
