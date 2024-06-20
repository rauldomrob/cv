import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://elgzwvmweuxqgpubyjoj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVsZ3p3dm13ZXV4cWdwdWJ5am9qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg4ODUwMzksImV4cCI6MjAzNDQ2MTAzOX0.SoNv5XrtLNcHWgT05Tahed0N2-LptFyB1ZjIAK3_C94';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
