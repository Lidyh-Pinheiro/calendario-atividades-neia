// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://btkehyaxzttrzjcaofav.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ0a2VoeWF4enR0cnpqY2FvZmF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxOTIzNjcsImV4cCI6MjA1ODc2ODM2N30.41vUltVdXwgFobW9GKFKYYPIHApELyjSq600Wm75vDg";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);