import React from "react";
import ProductCard from "./productCard/ProductCard";
import SaveToLocalStorage from "../../hooks/func/save-to-localStorage";

const Products = ({ params }: { params?: { slug: string[] } }) => {
  // const { data: products } = await client
  //   .from("products")
  //   .select()
  //   .or(`brand_id.eq.${params.slug[1]},category_id.eq.${params.slug[1]}`);
  // //TODO
  return (
    <div className="grid gap-4">
      {/* {products?.map((product) => (
        <ProductCard
          props={{
            imageSrc: product.image_src ?? "#",
            product_price: product.price,
            product_rating: product.rating ?? 0,
            product_shipping: product.shipping_cost ?? 0,
            product_sold: product.sold_amount ?? 0,
            product_title: product.product_name,
            product_id: product.id,
            clickEventFn: SaveToLocalStorage,
          }}
        />
      ))} */}
      <ProductCard
        imageSrc={
          "https://fyawsjdhinbdsevfswgw.supabase.co/storage/v1/object/sign/Images/products/s-l960%20(1).webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvcHJvZHVjdHMvcy1sOTYwICgxKS53ZWJwIiwiaWF0IjoxNzIxNjUxODYzLCJleHAiOjIwMzcwMTE4NjN9.ExC8hcSQwNfCqFqdl4wUlq-RqSZWiJYrmepoSu0bHew&t=2024-07-22T12%3A37%3A44.740Z"
        }
        product_price={10}
        product_rating={5}
        product_shipping={5}
        product_sold={10}
        product_id={1}
        product_title="Apple iPhone 12 - 64 GB - Black (Unlocked) (Single SIM)"
        clickEventFn={SaveToLocalStorage}
      />
    </div>
  );
};

export default Products;
