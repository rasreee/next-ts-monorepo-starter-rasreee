import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useAuth } from '@/auth/auth-context';
import { signIn, signUp } from '@/lib/supabase/auth';

const creds = { email: 'cleaner@test.com', password: 'asdfasdf' };

export const HomePage = function HomePage() {
  const { user, setUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/dashboard');
    }
  }, [user]);

  return (
    <div>
      <h1>HOME PAGE</h1>
      <div>{JSON.stringify(user, null, 2)}</div>
      <div className="flex flex-col items-center justify-center gap-6">
        <button
          onClick={() =>
            signUp(creds).then((response) => setUser(response.user))
          }
        >
          Sign up
        </button>
        <button
          onClick={() =>
            signIn(creds).then((response) => setUser(response.user))
          }
        >
          Log in
        </button>
      </div>
    </div>
  );
};
