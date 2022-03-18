import { User } from '@supabase/supabase-js';
import { createContext, Dispatch, SetStateAction, useContext } from 'react';

interface IAuthContext {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const useAuth = (): IAuthContext => useContext(AuthContext);
