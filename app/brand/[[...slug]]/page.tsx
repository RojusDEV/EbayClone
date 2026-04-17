import React from "react";
import Banner from "./Banner";
import Products from "@/components/products/Products";

const page = async ({ params }: { params: { slug: string[] } }) => {
  return (
    <section className="flex min-w-0 flex-col gap-6">
      <Banner />
      <div className="min-w-0">
        <Products params={params} />
      </div>
    </section>
  );
};

export default page;
