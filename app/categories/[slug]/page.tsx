import BannerLayout from "@/components/UI/Banner/BannerLayout";
import BannerSub from "@/components/UI/Banner/BannerSub";
import BannerTitle from "@/components/UI/Banner/BannerTitle";
import EffectButton from "@/components/UI/Buttons/EffectButton";
import FrequentlyAskedQuestions from "@/components/layout/FrequentlyAskedQuestions";
import ShopByBrand from "@/components/layout/ShopUiElements/ShopbyBrand/ShopByBrand";
import React from "react";

const page = () => {
  return (
    <div className="grid col-span-2 lg:col-auto gap-8">
      {/* main layout  */}
      <BannerLayout
        bgProperties={{
          bgImage:
            "https://images.unsplash.com/photo-1625463006115-09f08489f591?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          bgPosition: "center",
        }}
        rounded={false}
        height="lg"
      >
        <BannerTitle>Reconditioned tech</BannerTitle>
        <BannerSub>See the savings on refurb devices</BannerSub>
        <EffectButton buttonName="View the deal" theme="black" />
      </BannerLayout>
      {/* TODO: IF BRAND SELECTED DONT SHOW IT  */}
      <div className="grid gap-8 px-0 sm:px-2 lg:px-8">
        {/* ===Shop by category==== */}
        <ul className=""></ul>
        {/* Shop by Brand  */}
        <ShopByBrand />
        <FrequentlyAskedQuestions />
      </div>
    </div>
  );
};

export default page;
