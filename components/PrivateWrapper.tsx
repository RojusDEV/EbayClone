import { createClient } from "@/lib/utils/supabase/server/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const PrivateWrapper = async ({ children }: { children: JSX.Element }) => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data, error } = await supabase.auth.getUser();
  if (error || !data.user.id) {
    redirect("/");
  }
  return children;
};

export default PrivateWrapper;
