import { FaArrowRight } from "react-icons/fa";
import PopularCategories from "@/components/PopularCategories/PopularCategories";
import BannerLayout from "@/components/UI/Banner/BannerLayout";
import BannerSub from "@/components/UI/Banner/BannerSub";
import BannerTitle from "@/components/UI/Banner/BannerTitle";
import EffectButton from "@/components/UI/Buttons/EffectButton";
import Carousel from "@/components/UI/Carousel/Carousel";
import { DealBanner } from "@/components/UI/DealBanner/DealBanner";
import { DealBannerContent } from "@/components/UI/DealBanner/DealBannerContent";
import DealBannerTitle from "@/components/UI/DealBanner/DealBannerTitle";
import usePopularCategoriesQuery from "@/hooks/queries/use-popular-categories-query";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import Link from "next/link";
import React from "react";
import { createClient } from "@/lib/utils/supabase/server/server";
import { cookies } from "next/headers";

const MainLayout = async () => {
  const queryClient = new QueryClient();
  const cookieStore = cookies();
  const client = createClient(cookieStore);
  await queryClient.prefetchQuery(
    usePopularCategoriesQuery({ client: client }),
  );
  return (
    <main className="mx-auto flex max-w-7xl flex-col gap-8 px-4 md:px-0">
      <Carousel />
      <DealBanner bgClr="bg-[#F7F7F7]">
        <DealBannerContent>
          <div>
            <DealBannerTitle>
              Feel special this summer with 15% off*
            </DealBannerTitle>
            <span>Save on luxury jewelry, watches and handbags for you.</span>
            <span className="mx-2 text-xs">|</span>
            <Link href="/" className="underline">
              *Min. spend $300. Max. discount $100
            </Link>
          </div>
          <EffectButton
            buttonName="Code: SikSikSik"
            theme="black"
            additionalClassName="hidden lg:block"
          />
          <button className="flex items-center gap-2 align-middle md:hidden">
            Code: SikSikSik
            <FaArrowRight />
          </button>
        </DealBannerContent>
      </DealBanner>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <PopularCategories />
      </HydrationBoundary>
      <BannerLayout
        bgProperties={{
          bgImage:
            "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1794&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          bgPosition: "center",
        }}
      >
        <BannerTitle className="text-4xl font-[700] text-white">
          Adventure awaits with parts and accessories
        </BannerTitle>
        <BannerSub className="text-lg text-white">
          Get your boat in the best shape of its life.
        </BannerSub>
        <EffectButton buttonName="Hop on board" theme="white" />
      </BannerLayout>
      <BannerLayout bgProperties={{ bgColor: "#F7F7F7" }}>
        <BannerTitle className="text-4xl font-[700] text-black">
          Adventure awaits with parts and accessories
        </BannerTitle>
        <BannerSub className="text-lg text-black">
          Get your boat in the best shape of its life.
        </BannerSub>
        <EffectButton buttonName="Hop on board" theme="black" />
      </BannerLayout>
    </main>
  );
};

export default MainLayout;
