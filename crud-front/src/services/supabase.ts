import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zzfmsxqipydxxdxhjetz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJeyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp6Zm1zeHFpcHlkeHhkeGhqZXR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM0MzgxODksImV4cCI6MjA1OTAxNDE4OX0.SPDQ6CcNO71i0E-cEWPrfabvteN8M3URsHn-F2nOcQ8";

export const supabase = createClient(supabaseUrl, supabaseKey);
