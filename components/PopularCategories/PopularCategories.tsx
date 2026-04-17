"use client";
import React from "react";
import { Card } from "../UI/Card/Card";
import CardTitle from "../UI/Card/CardTitle";
import CardImage from "../UI/Card/CardImage";
import Image from "next/image";
import usePopularCategoriesQuery from "@/hooks/queries/use-popular-categories-query";
import { useQuery } from "@tanstack/react-query";
import useSupabaseBrowser from "@/lib/utils/supabase-browser";
const PopularCategories = () => {
  const supabaseClient = useSupabaseBrowser();
  const { data: popularCategories } = useQuery(
    usePopularCategoriesQuery({ client: supabaseClient }),
  );

  return (
    <div className=" mx-auto max-w-7xl">
      <span className="text-2xl font-[700]">Explore Popular Categories</span>
      <div className="mt-8  grid grid-flow-row grid-cols-3 gap-4 overflow-x-scroll last:in-range:hidden md:flex lg:flex-nowrap xl:overflow-x-hidden ">
        {popularCategories?.map((popularCategory, index) => (
          <Card
            className="relative min-h-20 min-w-20 max-w-40 cursor-pointer text-center"
            key={popularCategory.id}
            isLast={index === popularCategories.length - 1}
            popularCategory={popularCategory}
          >
            <CardImage>
              <Image
                alt="category image"
                src={popularCategory.image_url || ""}
                width={190}
                height={190}
                className="min-h-20 min-w-20 cursor-pointer rounded-full"
              />
            </CardImage>
            <CardTitle>{popularCategory.label || ""}</CardTitle>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PopularCategories;
