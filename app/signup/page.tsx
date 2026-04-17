import Image from "next/image";
import Link from "next/link";
import React from "react";
import { OAuthButtons } from "../login/oauth-signin";
import Logo from "@/components/UI/Logo";
import { signup } from "../login/actions";

const page = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-neutral-200">
        <div className="mx-auto flex max-w-8xl items-center justify-between px-6 py-4">
          <Logo />
          <span className="text-sm text-neutral-600">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-[#3665f3] hover:underline"
            >
              Sign in
            </Link>
          </span>
        </div>
      </header>
      <div className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-12 px-6 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
        <section className="hidden lg:block">
          <div className="relative overflow-hidden rounded-[32px] bg-[#f5f7ff] p-8">
            <div className="absolute inset-x-0 top-0 h-32 bg-[linear-gradient(135deg,#e8efff_0%,#f5f7ff_55%,transparent_100%)]" />
            <div className="relative space-y-5">
              <span className="inline-flex rounded-full bg-white px-4 py-1 text-sm font-medium text-[#3665f3] shadow-sm">
                Join the marketplace
              </span>
              <h1 className="max-w-xl text-5xl font-bold tracking-tight text-neutral-900">
                Create your eBay account and start shopping smarter.
              </h1>
              <p className="max-w-lg text-lg leading-8 text-neutral-600">
                Save favorite items, follow sellers, and check out faster with a
                personal account built for everyday buying.
              </p>
            </div>
            <div className="relative mt-10 overflow-hidden rounded-[28px] bg-white p-4 shadow-[0_24px_80px_rgba(54,101,243,0.12)]">
              <Image
                src="https://plus.unsplash.com/premium_photo-1676140621026-5c10ec3a875f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Shoppers browsing products together"
                width={900}
                height={1100}
                className="h-[520px] w-full rounded-[22px] object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[460px]">
          <div className="rounded-[28px] border border-neutral-200 bg-white p-6 shadow-[0_10px_40px_rgba(0,0,0,0.06)] sm:p-8">
            <div className="mb-8">
              <div className="mb-6 inline-flex w-full rounded-full bg-neutral-100 p-1">
                <button
                  type="button"
                  className="flex-1 rounded-full bg-white px-4 py-2 text-sm font-semibold text-neutral-900 shadow-sm"
                >
                  Personal
                </button>
                <button
                  type="button"
                  className="flex-1 rounded-full px-4 py-2 text-sm font-semibold text-neutral-500"
                >
                  Business
                </button>
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-neutral-900">
                Create an account
              </h2>
              <p className="mt-3 text-sm leading-6 text-neutral-600">
                Buy, sell, and keep track of your favorite finds in one place.
              </p>
            </div>

            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  className="h-12 w-full rounded-xl border border-neutral-300 bg-[#f7f7f7] px-4 text-sm text-neutral-900 outline-none transition focus:border-[#3665f3] focus:bg-white"
                  placeholder="First name"
                  name="firstname"
                />
                <input
                  type="text"
                  name="lastname"
                  className="h-12 w-full rounded-xl border border-neutral-300 bg-[#f7f7f7] px-4 text-sm text-neutral-900 outline-none transition focus:border-[#3665f3] focus:bg-white"
                  placeholder="Last name"
                />
              </div>
              <input
                type="email"
                name="email"
                className="h-12 w-full rounded-xl border border-neutral-300 bg-[#f7f7f7] px-4 text-sm text-neutral-900 outline-none transition focus:border-[#3665f3] focus:bg-white"
                placeholder="Email"
              />
              <input
                type="password"
                name="password"
                className="h-12 w-full rounded-xl border border-neutral-300 bg-[#f7f7f7] px-4 text-sm text-neutral-900 outline-none transition focus:border-[#3665f3] focus:bg-white"
                placeholder="Password"
              />
              <p className="text-xs leading-5 text-neutral-500">
                By selecting Create personal account, you agree to our{" "}
                <span className="text-[#3665f3]">User Agreement</span> and
                acknowledge reading our{" "}
                <span className="text-[#3665f3]">User Privacy Notice</span>.
              </p>
              <button
                className="w-full rounded-full bg-[#3665f3] py-3.5 text-base font-bold text-white transition hover:bg-[#2f59d1]"
                type="submit"
                formAction={signup}
              >
                Create personal account
              </button>
            </form>

            <div className="my-6 flex items-center gap-4">
              <div className="h-px flex-1 bg-neutral-200" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
                Or continue with
              </span>
              <div className="h-px flex-1 bg-neutral-200" />
            </div>

            <div className="grid gap-3">
              <OAuthButtons showLoginMessage={false} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
