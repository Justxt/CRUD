import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://yzhbffiptkufzmtfiutn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl6aGJmZmlwdGt1ZnptdGZpdXRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQwNzMwMjMsImV4cCI6MjA1OTY0OTAyM30.QN5fiDfJLLXoN3Mv4XLvB56k_ytB24IsworqEWX24cM";

export const supabase = createClient(supabaseUrl, supabaseKey);
