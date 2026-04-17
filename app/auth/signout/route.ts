import { createClient } from "@/lib/utils/supabase/server/server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);


  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    await supabase.auth.signOut();
  }

  revalidatePath("/", "layout");
  return NextResponse.redirect(new URL("/login", req.url), {
    status: 302,
  });
}
