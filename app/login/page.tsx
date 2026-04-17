import { cookies } from "next/headers";

import { login, signup } from "./actions";
import { createClient } from "@/lib/utils/supabase/server/action";
import { redirect } from "next/navigation";
import { OAuthButtons } from "./oauth-signin";
import Link from "next/link";
import logo from "@/public/logo.svg";
import Image from "next/image";
import Logo from "@/components/UI/Logo";
export default async function LoginPage() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data } = await supabase.auth.getUser();
  if (data.user) {
    return redirect("/");
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut();
    return redirect("/");
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white to-slate-50">
      <Logo customStyles="absolute left-6 top-6 sm:left-8 sm:top-8" />

      <div className="mx-auto flex min-h-screen w-full max-w-6xl items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                Welcome back
              </h1>
              <p className="mt-2 text-sm text-slate-600">
                Sign in to eBay or{" "}
                <Link
                  href="/signup"
                  className="font-medium text-blue-600 underline-offset-4 hover:underline"
                >
                  create an account
                </Link>
                .
              </p>
            </div>

            <form className="mt-6 grid gap-4">
              <div className="grid gap-1.5 text-left">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-slate-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                />
              </div>

              <div className="grid gap-1.5 text-left">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-slate-700"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  placeholder="Your password"
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                />
              </div>

              <button
                formAction={login}
                className="mt-1 inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-4 py-2.5 font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500/20 active:translate-y-px"
              >
                Sign in
              </button>

              <div className="relative my-2">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200" />
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-white px-2 text-xs font-medium text-slate-500">
                    OR
                  </span>
                </div>
              </div>

              <div className="grid gap-2">
                <OAuthButtons showLoginMessage={true} />
              </div>
            </form>
          </div>

          <p className="mt-6 text-center text-xs text-slate-500">
            By continuing, you agree to our Terms and acknowledge our Privacy
            Policy.
          </p>
        </div>
      </div>
    </div>
  );
}
