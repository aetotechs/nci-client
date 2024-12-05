import { useEffect, useState } from 'react';
import { FetchUser } from '@/utils/hooks/api-routes';
import { getAuthUser } from '../cookies/UserCookieManager';
import { IUser } from '../commons/TypeInterfaces';

export function GetUser() {
  const [user, setUser] = useState<IUser>();
  const email = getAuthUser().email;

  useEffect(() => {
    const fetchuser = async () => {
      try {
        const response = await fetch(FetchUser(email));
        if (response.ok) {
          const data = await response.json();
          setUser(data);
        } else {
        }
      } catch (error) {}
    };

    fetchuser();
  }, [user]);

  return user;
}
