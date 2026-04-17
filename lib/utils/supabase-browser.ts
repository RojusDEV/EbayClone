import { Database } from "@/types/supabase";
import { createBrowserClient } from "@supabase/ssr";
import { useMemo } from "react";
import invariant from "tiny-invariant";

let client: ReturnType<typeof createBrowserClient<Database>> | undefined;

export function getSupabaseBrowserClient() {
  if (client) {
    return client;
  }

  invariant(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    `Supabase URL was not provided`,
  );
  invariant(
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    `Supabase Anon key was not provided`,
  );

  client = createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  );

  return client;
}

function useSupabaseBrowser() {
  return useMemo(getSupabaseBrowserClient, []);
}

export default useSupabaseBrowser;
