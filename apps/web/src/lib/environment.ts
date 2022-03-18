const environment = Object.freeze({
  supabase: {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL,
    key: process.env.NEXT_PUBLIC_SUPABASE_KEY,
  },
});

export default environment;
