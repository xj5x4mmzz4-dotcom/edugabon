import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wczbusdtzldtnaakjkeb.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndjemJ1c2R0emxkdG5hYWtqa2ViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE4ODE4NTksImV4cCI6MjA5NzQ1Nzg1OX0.vvBIukq58blX2mtvwmgsj-1IIf6BJ45BSur5YSY7gOc'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
