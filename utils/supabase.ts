import { createClient } from "@supabase/supabase-js";

const development = ["development", "preview"].includes(process.env.NODE_ENV);
const url = development
  ? process.env.SUPABASE_DEV_URL!
  : process.env.SUPABASE_URL!;
const key = development
  ? process.env.SUPABASE_DEV_KEY!
  : process.env.SUPABASE_ANON_KEY!;

export const supabase = createClient(url, key);
