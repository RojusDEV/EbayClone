import Link from "next/link";
import Banner from "@/components/layout/Banner/Banner";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";

export default function CartPage() {
  return (
    <div className="overflow-x-hidden">
      <Banner />
      <Header />

      <main className="mx-auto w-full max-w-3xl px-4 py-10">
        <h1 className="text-2xl font-bold text-slate-900">Cart</h1>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-slate-900">
            You don&apos;t have any items in your cart.
          </p>
          <p className="mt-2 text-sm text-slate-600">
            Have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-blue-600 underline-offset-4 hover:underline"
            >
              Sign in
            </Link>{" "}
            to see your items.
          </p>

          <div className="mt-5 flex flex-col gap-2 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              Start shopping
            </Link>
            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Sign in
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

