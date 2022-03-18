import { supabase } from '@/lib/supabase/supabase';

export async function signUp(args: { email: string; password: string }) {
  console.log('SIGNING UP...');
  const response = await supabase.auth.signUp(args);
  console.log('RESPONSE: ', response);
  return response;
}

export async function signIn(args: { email: string; password: string }) {
  console.log('LOGGING IN...');
  const response = await supabase.auth.signIn(args);
  console.log('RESPONSE: ', response);
  return response;
}

export async function signOut(): Promise<void> {
  console.log('SIGNING OUT.');
  await supabase.auth.signOut();
}

export function loadUser() {
  console.log('LOADING AUTH USER...');
  const user = supabase.auth.user();

  console.log('AUTH USER: ', user);
  return user;
}
