import { createBrowserClient } from "@supabase/ssr";
// import type { Database } from "@packages/types/db";

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
