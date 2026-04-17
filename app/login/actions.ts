"use server";

import { getURL } from "@/lib/utils/helpers";
import { createClient } from "@/lib/utils/supabase/server/server";
import { Provider } from "@supabase/supabase-js";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);


  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signup(formData: FormData) {
  const cookieStore = cookies();

  const supabase = createClient(cookieStore);

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}


export async function oAuthSignIn(provider: Provider) {
  if (!provider) {
      return redirect('/login?message=No provider selected')
  }
  const cookieStore = cookies();

  const supabase = createClient(cookieStore);
  const redirectUrl = getURL("/auth/callback")
  const { data, error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
          redirectTo: redirectUrl,
      }
  })

  if (error) {
      redirect('/login?message=Could not authenticate user')
  }

  return redirect(data.url)
}