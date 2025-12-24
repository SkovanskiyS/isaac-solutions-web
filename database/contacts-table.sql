-- Contacts table for Isaac Solutions contact form
-- Stores name, phone number, and selected package
-- Run this in your Supabase SQL Editor

CREATE TABLE IF NOT EXISTS public.contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  package TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- If you already have the table and need to add the package column:
-- ALTER TABLE public.contacts ADD COLUMN IF NOT EXISTS package TEXT;

-- No authentication needed - make it publicly writable for contact forms
CREATE POLICY "Anyone can submit contact forms" ON public.contacts
  FOR INSERT WITH CHECK (true);

-- Enable Row Level Security
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;