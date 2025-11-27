// assets/js/supabase-client.js
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL = "https://supabase.com/dashboard/project/iywxorigrwdguhshqshe"; // replace
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml5d3hvcmlncndkZ3Voc2hxc2hlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQyNDE2MTIsImV4cCI6MjA3OTgxNzYxMn0.-F3JCv75lH0ia29j6PE7WbpLx3zlKSNm0CUBIGTwfcE"; // replace

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
