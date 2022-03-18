import environment from '../environment';
import { initSupabase } from './init-supabase';

export const supabase = initSupabase(
  environment.supabase.url,
  environment.supabase.key,
);
