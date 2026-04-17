import { useSession } from "next-auth/react";
import { createClient } from "@supabase/supabase-js";
import { Database } from "@/types/supabase";

export default function supabase() {
  const {data: session} = useSession();
  const { supabaseAccessToken } = session!;

  return createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      global: {
        headers: {
          Authorization: `Bearer ${supabaseAccessToken}`,
        },
      },
    },
  );
}
