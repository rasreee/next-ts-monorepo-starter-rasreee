import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useAuth } from '@/auth/auth-context';
import { signOut } from '@/lib/supabase/auth';

export const DashboardPage = function DashboardPage() {
  const { user, setUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/');
    }
  }, [user]);

  return (
    <div>
      <h1>DASHBOARD PAGE</h1>
      <div>{JSON.stringify(user, null, 2)}</div>
      <div className="flex flex-col items-center justify-center gap-6">
        <button onClick={() => signOut().then(() => setUser(null))}>
          Logout
        </button>
      </div>
    </div>
  );
};
