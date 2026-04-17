import { createClient } from "@/lib/utils/supabase/server/server";
import { cookies } from "next/headers";
import React from "react";
import ShopByBrandItem from "./ShopByBrandItem";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 360;

const ShopByBrand = async () => {
  const cookieStore = cookies();
  const client = createClient(cookieStore);
  const { data: shopByBrand } = await client
    .from("brands")
    .select()
    .neq("brand_image_url", null);

  return (
    <section className="mb-16">
      <span className="font-semibold text-2xl">Shop by Brand</span>
      {/*  */}
      <ul className="mt-8 grid grid-cols-4 gap-8 lg:grid-cols-5">
        {shopByBrand?.map((el) => (
          <li key={el.id} className=" text-center">
            <Link href={`/brand/${el.brand_name}/${el.id}`}>
              <ShopByBrandItem>
                <Image
                  alt={el.brand_name + " logo"}
                  height={120}
                  width={120}
                  src={el.brand_image_url || ""}
                />
              </ShopByBrandItem>
              <span>{el.brand_name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ShopByBrand;
