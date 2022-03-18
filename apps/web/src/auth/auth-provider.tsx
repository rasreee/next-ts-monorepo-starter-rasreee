import { User } from '@supabase/supabase-js';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { loadUser } from '@/lib/supabase/auth';

import { AuthContext } from './auth-context';

export const AuthProvider: React.FC = ({ children }) => {
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setUser(loadUser());
  }, []);

  useEffect(() => {
    if (user) {
      router.push('/dashboard');
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
