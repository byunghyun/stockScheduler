import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://emeuxaqoxtffperqlhvy.supabase.co';
const supabaseKey = process.env.SUPABASE_API_KEY as string;
export const runSupabase = createClient(supabaseUrl, supabaseKey);
