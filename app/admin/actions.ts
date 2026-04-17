"use server";

import { createClient } from "@/lib/utils/supabase/server/server";
import { cookies } from "next/headers";

const cookieStore = cookies();
const supabase = createClient(cookieStore);

async function createInvoice(prevState: any, formData: FormData) {
  const { data } = await supabase.auth.getUser();
  const rawFormData = {
    product_name: formData.get("product_name") as string,
    category_id: Number(formData.get("category_id")),
    brand_id: Number(formData.get("brand_id")),
    price: Number(formData.get("price")),
    shipping_cost: Number(formData.get("shipping_cost")),
    sold_amount: Number(formData.get("sold_amount")),
    image_src: (formData.get("image_src") as string) || null,
  };
  if (data.user != null) {
    const { error } = await supabase.from("products").insert({
      product_name: rawFormData.product_name,
      brand_id: rawFormData.brand_id,
      category_id: rawFormData.category_id,
      price: rawFormData.price,
      shipping_cost: Number.isFinite(rawFormData.shipping_cost)
        ? rawFormData.shipping_cost
        : null,
      sold_amount: Number.isFinite(rawFormData.sold_amount)
        ? rawFormData.sold_amount
        : null,
      image_src: rawFormData.image_src,
      user_id: data.user.id,
    });
    console.error(error);
  }
  return { errors: {} };
}

export default createInvoice;
