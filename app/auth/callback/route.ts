import { createClient } from "@/lib/utils/supabase/server/server";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const next = requestUrl.searchParams.get("next") ?? "/";

  if (!code) {
    return NextResponse.redirect(
      new URL("/login?message=Missing OAuth code", requestUrl.origin),
    );
  }

  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { error } = await supabase.auth.exchangeCodeForSession(code);

  if (error) {
    return NextResponse.redirect(
      new URL("/login?message=Could not authenticate user", requestUrl.origin),
    );
  }

  return NextResponse.redirect(new URL(next, requestUrl.origin));
}

