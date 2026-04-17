import { createClient } from "@/lib/utils/supabase/server/server";
import { cookies } from "next/headers";

export default async function isAuthenticated(
  cookieStore: ReturnType<typeof cookies>,
) {
  const supabase = createClient(cookieStore);
  try {
    const { data, error } = await supabase.auth.getUser();
    if (data && !error) {
      return true;
    }
  } catch (error) {
    if (error) {
      return false;
    }
  }
  return true;
}
