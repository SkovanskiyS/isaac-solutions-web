-- Secure RLS setup for contacts table
-- Allows anonymous form submissions but restricts viewing to authenticated users

-- Step 1: Drop all existing policies
DROP POLICY IF EXISTS "Anyone can submit contact forms" ON public.contacts;
DROP POLICY IF EXISTS "Enable insert for anonymous users" ON public.contacts;
DROP POLICY IF EXISTS "Enable read for authenticated users only" ON public.contacts;

-- Step 2: Enable RLS
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Step 3: Create policy to allow anyone to INSERT (submit contact form)
CREATE POLICY "Allow public contact form submissions" 
ON public.contacts
FOR INSERT 
TO public
WITH CHECK (true);

-- Step 4: Create policy to allow authenticated users to SELECT (view contacts)
CREATE POLICY "Allow authenticated users to view contacts" 
ON public.contacts
FOR SELECT 
TO authenticated
USING (true);

-- Step 5: Create policy to allow authenticated users to UPDATE (manage contacts)
CREATE POLICY "Allow authenticated users to update contacts" 
ON public.contacts
FOR UPDATE 
TO authenticated
USING (true)
WITH CHECK (true);

-- Step 6: Create policy to allow authenticated users to DELETE
CREATE POLICY "Allow authenticated users to delete contacts" 
ON public.contacts
FOR DELETE 
TO authenticated
USING (true);

-- Summary:
-- ✅ Anyone can submit contact forms (anonymous INSERT)
-- ✅ Only logged-in users can view contacts (authenticated SELECT)
-- ✅ Only logged-in users can update/delete contacts (authenticated UPDATE/DELETE)
-- ✅ Contact form submissions are secure and protected