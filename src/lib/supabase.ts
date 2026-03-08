import { createClient } from '@supabase/supabase-js';

// Configuration directe pour assurer le fonctionnement sur l'hébergement OVH
const supabaseUrl = 'https://aliajrntigcslxpcehev.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFsaWFqcm50aWdjc2x4cGNlaGV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI4MTY5ODcsImV4cCI6MjA4ODM5Mjk4N30.eH2w47MKWRfivmiej0C1dQUqw2zxCxsBZvd_IlJFImw';

// Exportation du client Supabase configuré
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
