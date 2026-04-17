"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import bellIcon from "@/_assets/icons/BellIcon.svg";
import cartIcon from "@/_assets/icons/CartIcon.svg";
import { getSupabaseBrowserClient } from "@/lib/utils/supabase-browser";
import { IoChevronDownOutline } from "react-icons/io5";

type CountryOption = {
  code: string;
  label: string;
  flag: string;
};

const COUNTRIES: CountryOption[] = [
  { code: "LT", label: "Lithuania", flag: "🇱🇹" },
  { code: "US", label: "United States", flag: "🇺🇸" },
  { code: "GB", label: "United Kingdom", flag: "🇬🇧" },
  { code: "DE", label: "Germany", flag: "🇩🇪" },
  { code: "PL", label: "Poland", flag: "🇵🇱" },
];

export default function Banner() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [displayName, setDisplayName] = useState<string | null>(null);
  const [displayHandle, setDisplayHandle] = useState<string | null>(null);
  const [shippingOpen, setShippingOpen] = useState(false);
  const [countryCode, setCountryCode] = useState<CountryOption["code"]>("LT");

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const supabase = getSupabaseBrowserClient();
        const { data } = await supabase.auth.getUser();
        const user = data.user;
        if (cancelled) return;

        setIsLoggedIn(!!user);

        if (!user) {
          setDisplayName(null);
          setDisplayHandle(null);
          return;
        }

        const fallbackName =
          (user.user_metadata?.full_name as string | undefined) ??
          (user.email ? user.email.split("@")[0] : "User");
        setDisplayName(fallbackName);

        try {
          const { data: profile } = await (supabase as any)
            .from("users")
            .select("full_name")
            .eq("id", user.id)
            .single();

          if (!cancelled && profile?.full_name) {
            setDisplayName(profile.full_name as string);
          }
        } catch {
        }

        const handle =
          (user.user_metadata?.username as string | undefined) ??
          (user.email ? user.email.split("@")[0] : null);
        setDisplayHandle(handle);
      } catch {
        if (!cancelled) setIsLoggedIn(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const selectedCountry =
    COUNTRIES.find((c) => c.code === countryCode) ?? COUNTRIES[0];

  return (
    <>
      <div className="border-b-2 border-gray-200 bg-white">
        <div className="xl:px-0 mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-1">

          <div className="flex min-w-0 items-center gap-1 text-xs">
            {!isLoggedIn ? (
              <>
                <span className="text-slate-800">Hi!</span>
                <Link
                  href="/login"
                  className="cursor-pointer text-blue-600 underline-offset-4 hover:underline"
                >
                  Sign in
                </Link>
                <span className="text-slate-700">or</span>
                <Link
                  href="/signup"
                  className="cursor-pointer text-blue-600 underline-offset-4 hover:underline"
                >
                  register
                </Link>
              </>
            ) : (
              <div
                className="relative"
                onMouseEnter={() => setShowUserMenu(true)}
                onMouseLeave={() => setShowUserMenu(false)}
              >
                <button
                  className="inline-flex items-center gap-1 rounded-md px-1 py-0.5 text-slate-800 hover:bg-slate-100"
                  onClick={() => setShowUserMenu((v) => !v)}
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={showUserMenu ? "true" : "false"}
                >
                  <span className="truncate">
                    Hi{" "}
                    <span className="font-semibold">
                      {displayName ?? "there"}
                    </span>
                    !
                  </span>
                  <IoChevronDownOutline className="text-slate-600" />
                </button>
                {showUserMenu && (
                  <div
                    className="absolute left-0 top-full z-50 w-80 pt-2"
                    onMouseEnter={() => setShowUserMenu(true)}
                    onMouseLeave={() => setShowUserMenu(false)}
                  >
                    <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-lg">
                      <div className="mt-1 h-px bg-slate-100" />
                      <div className="grid py-1 text-sm">
                        <Link
                          href="/account"
                          className="rounded-lg px-2 py-2 text-slate-800 hover:bg-slate-50"
                        >
                          Account settings
                        </Link>
                        <form action="/auth/signout" method="post">
                          <button
                            type="submit"
                            className="w-full rounded-lg px-2 py-2 text-left text-slate-800 hover:bg-slate-50"
                          >
                            Sign out
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="hidden flex-1 items-center justify-center gap-4 text-xs text-slate-800 md:flex">
            <Link href="/deals" className="hover:underline">
              Deals
            </Link>
            <Link href="/brand" className="hover:underline">
              Brand
            </Link>
            <Link href="/outlet" className="hover:underline">
              Outlet
            </Link>
            <Link href="/gift-cards" className="hover:underline">
              Gift Cards
            </Link>
            <Link href="/help" className="hover:underline">
              Help &amp; Contact
            </Link>

            <div className="group relative">
              <Link href="/sell" className="hover:underline">
                Sell
              </Link>
              <div className="pointer-events-none absolute left-1/2 top-full z-50 mt-2 hidden w-[28rem] -translate-x-1/2 translate-y-1 opacity-0 transition group-hover:pointer-events-auto group-hover:block group-hover:translate-y-0 group-hover:opacity-100">
                <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-lg">
                  <div className="text-sm font-semibold text-slate-900">
                    Start selling in a snap
                  </div>
                  <div className="mt-1 text-sm text-slate-600">
                    Turn your pre-loved items into extra cash.
                  </div>
                  <ul className="mt-3 grid list-disc gap-1 pl-5 text-sm text-slate-700">
                    <li>Listing is easy, and faster than ever in the app</li>
                    <li>Seller protections and secure payments</li>
                    <li>Easy shipping and local pickup</li>
                  </ul>
                  <div className="mt-4 flex gap-2">
                    <Link
                      href="/sell"
                      className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white hover:bg-blue-700"
                    >
                      List an item
                    </Link>
                    <Link
                      href="/download"
                      className="inline-flex items-center justify-center rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-800 hover:bg-slate-50"
                    >
                      Download the app
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Watchlist hover */}
            <div className="group relative">
              <Link href="/watchlist" className="hover:underline">
                Watchlist
              </Link>
              <div className="pointer-events-none absolute left-1/2 top-full z-50 mt-2 hidden w-96 -translate-x-1/2 translate-y-1 opacity-0 transition group-hover:pointer-events-auto group-hover:block group-hover:translate-y-0 group-hover:opacity-100">
                <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-lg">
                  <div className="text-sm text-slate-700">
                    Looks like you are not watching any items yet.
                  </div>
                </div>
              </div>
            </div>

            {/* My eBay hover */}
            <div className="group relative">
              <button className="inline-flex items-center gap-1 hover:underline">
                My eBay <IoChevronDownOutline className="text-slate-600" />
              </button>
              <div className="pointer-events-none absolute left-1/2 top-full z-50 mt-2 hidden w-64 -translate-x-1/2 translate-y-1 opacity-0 transition group-hover:pointer-events-auto group-hover:block group-hover:translate-y-0 group-hover:opacity-100">
                <div className="rounded-xl border border-slate-200 bg-white p-2 shadow-lg">
                  {[
                    "Summary",
                    "Recently Viewed",
                    "Bids/Offers",
                    "Watchlist",
                    "Purchase History",
                    "Buy Again",
                    "Selling",
                    "Saved Feed",
                    "Saved Searches",
                    "Saved Sellers",
                    "Payments",
                    "My Garage",
                    "Preferences",
                    "My Collection",
                    "Messages",
                    "PSA Vault",
                  ].map((label) => (
                    <Link
                      key={label}
                      href="/"
                      className="block rounded-lg px-2 py-1.5 text-xs text-slate-800 hover:bg-slate-50"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: shipping + icons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShippingOpen(true)}
              className="hidden items-center gap-2 rounded-md px-2 py-1 text-xs text-slate-800 hover:bg-slate-100 sm:flex"
              aria-label="Set shipping location"
            >
              <span className="text-base leading-none">{selectedCountry.flag}</span>
              <span className="text-slate-700">Ship to</span>
              <span className="font-medium">{selectedCountry.label}</span>
              <IoChevronDownOutline className="text-slate-600" />
            </button>

            <div className="flex items-center gap-3">
              {/* Bell */}
              <div className="group relative">
                <button className="rounded-md p-1 hover:bg-slate-100">
                  <Image src={bellIcon} alt="bell icon" height={20} />
                </button>
                <div className="pointer-events-none absolute right-0 top-full z-50 mt-2 hidden w-80 translate-y-1 opacity-0 transition group-hover:pointer-events-auto group-hover:block group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-lg">
                    <div className="text-sm font-semibold text-slate-900">
                      Notifications
                    </div>
                    <div className="mt-2 text-sm text-slate-600">
                      {isLoggedIn
                        ? "No notifications yet."
                        : "Please sign in to view notifications."}
                    </div>
                    {!isLoggedIn && (
                      <div className="mt-3 flex gap-2">
                        <Link
                          href="/login"
                          className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white hover:bg-blue-700"
                        >
                          Sign in
                        </Link>
                        <Link
                          href="/signup"
                          className="inline-flex items-center justify-center rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-800 hover:bg-slate-50"
                        >
                          Register
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Cart */}
              <div className="group relative">
                <Link
                  href="/cart"
                  className="inline-flex rounded-md p-1 hover:bg-slate-100"
                  aria-label="Open cart"
                >
                  <Image
                    src={cartIcon}
                    alt="cart icon"
                    height={20}
                    className="pt-1"
                  />
                </Link>
                <div className="pointer-events-none absolute right-0 top-full z-50 mt-2 hidden w-96 translate-y-1 opacity-0 transition group-hover:pointer-events-auto group-hover:block group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-lg">
                    <div className="text-sm font-semibold text-slate-900">
                      Your cart
                    </div>
                    <div className="mt-2 text-sm text-slate-700">
                      You don&apos;t have any items in your cart.
                    </div>
                    <div className="mt-1 text-sm text-slate-600">
                      Have an account?{" "}
                      <Link
                        href="/login"
                        className="font-medium text-blue-600 underline-offset-4 hover:underline"
                      >
                        Sign in
                      </Link>{" "}
                      to see your items.
                    </div>

                    <div className="mt-4 flex gap-2">
                      <Link
                        href="/"
                        className="inline-flex flex-1 items-center justify-center rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-800 hover:bg-slate-50"
                      >
                        Start shopping
                      </Link>
                      <Link
                        href="/login"
                        className="inline-flex flex-1 items-center justify-center rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white hover:bg-blue-700"
                      >
                        Sign in
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shipping modal */}
      {shippingOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Set your shipping location"
          onClick={() => setShippingOpen(false)}
        >
          <div
            className="w-full max-w-xl rounded-2xl bg-white p-6 shadow-xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold text-slate-900">
                  Set your shipping location
                </h2>
              </div>
              <button
                className="text-sm font-medium text-blue-600 hover:underline"
                onClick={() => setShippingOpen(false)}
              >
                Done
              </button>
            </div>

            <div className="mt-6">
              <div className="text-sm font-semibold text-slate-900">
                Ship to:
              </div>
              <div className="mt-2 inline-flex items-center gap-3 border-b border-slate-200 pb-2">
                <span className="text-2xl leading-none">
                  {selectedCountry.flag}
                </span>
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="rounded-md border border-transparent bg-white py-1 pr-8 text-base font-medium text-slate-900 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                  aria-label="Select country"
                >
                  {COUNTRIES.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.label}
                    </option>
                  ))}
                </select>
                <IoChevronDownOutline className="-ml-7 text-slate-600 pointer-events-none" />
              </div>
            </div>

            <p className="mt-6 text-lg font-medium text-slate-900">
              Not all items on this page will ship to your country/region.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
