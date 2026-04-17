import Footer from "@/components/layout/Footer/Footer";
import Header from "@/components/layout/Header/Header";
import PopularCategories from "@/components/PopularCategories/PopularCategories";
import FrequentlyAskedQuestions from "@/components/layout/FrequentlyAskedQuestions";
import { createClient } from "@/lib/utils/supabase/server/server";
import usePopularCategoriesQuery from "@/hooks/queries/use-popular-categories-query";
import { cookies } from "next/headers";
import React from "react";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import CategoriesClient from "./CategoriesClient";

export default async function CategoriesIndexPage() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data: categories } = await supabase
    .from("categories")
    .select()
    .order("label", { ascending: true })
    .throwOnError();

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(usePopularCategoriesQuery({ client: supabase }));

  return (
    <>
      <div className="mx-auto max-w-[92rem] px-4">
        <Header screenDimention="fullScreen" />

        <div className="mx-auto mt-6 grid max-w-7xl gap-8 pb-12">
          <section className="relative overflow-hidden rounded-[32px] border border-neutral-200 bg-[linear-gradient(135deg,#f5f7ff_0%,#ffffff_55%,#ffffff_100%)] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.06)] sm:p-10">
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#e8efff] blur-2xl" />
            <div className="absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-[#fff3d6] blur-2xl" />
            <div className="relative grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div className="space-y-4">
                <span className="inline-flex w-fit rounded-full bg-white px-4 py-1 text-sm font-semibold text-[#3665f3] shadow-sm">
                  Categories
                </span>
                <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
                  Shop by category
                </h1>
                <p className="max-w-2xl text-base leading-7 text-neutral-600">
                  Explore popular picks, then browse all departments to find what
                  you’re looking for.
                </p>
              </div>
              <div className="rounded-3xl border border-neutral-200 bg-white/70 p-5 backdrop-blur sm:p-6">
                <div className="text-sm font-semibold text-neutral-900">
                  Quick links
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                  <a
                    href="#popular"
                    className="rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-neutral-700 transition hover:border-neutral-300 hover:bg-neutral-50"
                  >
                    Popular
                  </a>
                  <a
                    href="#all"
                    className="rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-neutral-700 transition hover:border-neutral-300 hover:bg-neutral-50"
                  >
                    All categories
                  </a>
                </div>
                <div className="mt-4 text-xs text-neutral-500">
                  Tip: Use search to filter instantly.
                </div>
              </div>
            </div>
          </section>

          <section id="popular" className="scroll-mt-28">
            <HydrationBoundary state={dehydrate(queryClient)}>
              <PopularCategories />
            </HydrationBoundary>
          </section>

          <section id="all" className="scroll-mt-28">
            <CategoriesClient categories={categories ?? []} />
          </section>

          <FrequentlyAskedQuestions />
        </div>
      </div>
      <Footer />
    </>
  );
}

