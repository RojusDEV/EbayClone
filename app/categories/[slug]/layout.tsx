import BannerLayout from "@/components/UI/Banner/BannerLayout";
import BannerSub from "@/components/UI/Banner/BannerSub";
import BannerTitle from "@/components/UI/Banner/BannerTitle";
import Header from "@/components/layout/Header/Header";
import React from "react";
import Aside from "./Aside";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import useSubCategoriesQuery from "@/hooks/func/use-subCategories-query";
import { createClient } from "@/lib/utils/supabase/server/server";
import { cookies } from "next/headers";
import Footer from "@/components/layout/Footer/Footer";

const layout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) => {
  const cookieStore = cookies();
  const client = createClient(cookieStore);

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(
    useSubCategoriesQuery({ client: client, slug: params.slug }),
  );
  const bgProperties = {
    bgImage:
      "https://images.unsplash.com/photo-1606088295735-d8148a172c0b?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bgPosition: "center",
    maxWidth: "95em",
  };

  return (
    <>
      <div className="mx-auto mb-12 max-w-[92rem] px-4">
        <Header screenDimention="fullScreen" />
        <div className="grid gap-8">
          <div className="col-span-2">
            <BannerLayout
              bgProperties={bgProperties}
              height="md"
              rounded={false}
            >
              <BannerTitle
                className="max-w-[90em] text-2xl font-bold"
                maxWidth="90"
              >
                Welcome to the world of tech
              </BannerTitle>
              <BannerSub className=" text-lg font-medium">
                Browse all the devices you need, from smartphones to PCs.
              </BannerSub>
            </BannerLayout>
          </div>
          <HydrationBoundary state={dehydrate(queryClient)}>
            <Aside params={params} />
          </HydrationBoundary>
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default layout;
