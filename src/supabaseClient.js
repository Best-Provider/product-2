import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cwaggcgdlmcjnuiwumvn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN3YWdnY2dkbG1jam51aXd1bXZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI3NTkxMjMsImV4cCI6MjA1ODMzNTEyM30.dXJJ7eigrAzlSi6SOrYgBY5GJJvWWVYjTQM_66DRjJY';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;