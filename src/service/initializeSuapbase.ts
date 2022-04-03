import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_API_URL as string;
const supabaseKey = process.env.SUPABASE_API_KEY as string;
export const runSupabase = createClient(supabaseUrl, supabaseKey);
