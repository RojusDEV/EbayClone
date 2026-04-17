"use client";
import BannerLayout from "@/components/UI/Banner/BannerLayout";
import BannerSub from "@/components/UI/Banner/BannerSub";
import BannerTitle from "@/components/UI/Banner/BannerTitle";
import EffectButton from "@/components/UI/Buttons/EffectButton";
import useBannersQuery from "@/hooks/queries/use-banners-query";
import React from "react";

export default function Banner() {
  const { data: banner } = useBannersQuery();
  return (
    <div className="flex flex-col gap-6">
      {banner && (
        <BannerLayout
          bgProperties={{ bgImage: banner[0].backgroundImage_url }}
          height="lg"
          rounded={false}
        >
          <div className="max-w-2xl">
            <BannerTitle>{banner[0].heading}</BannerTitle>
            <BannerSub>{banner[0].subHeading}</BannerSub>
            <EffectButton
              buttonName={banner[0].buttonName || ""}
              theme="black"
            />
          </div>
        </BannerLayout>
      )}

      <div className="grid gap-2">
        <h2 className="text-lg font-semibold text-slate-900">
          Explore Popular Products
        </h2>
        <p className="text-sm text-slate-600">
          Browse what people are buying right now.
        </p>
      </div>

      <div className="grid gap-2">
        <h2 className="text-lg font-semibold text-slate-900">
          Limited Time Deals
        </h2>
        <p className="text-sm text-slate-600">
          Don&apos;t miss today&apos;s offers.
        </p>
      </div>

      {/* FILTER  */}
      {/* **PRODUCTS** */}

      
    </div>
  );
}
