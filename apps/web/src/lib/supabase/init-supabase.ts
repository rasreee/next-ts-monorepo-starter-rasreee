import { createClient, SupabaseClient } from '@supabase/supabase-js';

export function initSupabase(url: string, apiKey: string): SupabaseClient {
  if (!url) throw new Error(`NEXT_PUBLIC_SUPABASE_URL was undefined`);
  if (!apiKey) throw new Error(`NEXT_PUBLIC_SUPABASE_API_KEY was undefined`);

  return createClient(url, apiKey);
}
