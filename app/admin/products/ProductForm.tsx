"use client";
import { z } from "zod";
import { useFormState, useFormStatus } from "react-dom";
import toast from "react-hot-toast";
import createInvoice from "../actions";

const ProductSchema = z.object({
  product_name: z
    .string()
    .min(10, { message: "Product name should be atleast 10 characters long" })
    .max(100, { message: "Character length exceeded 100 characters long" }),
  category_id: z
    .number()
    .min(1, { message: "Id should contain atleast one character" })
    .max(10000, { message: "Id shouldnt contain more than 10000 characters" }),
  brand_id: z
    .number()
    .min(1, { message: "Id should contain atleast one character" })
    .max(10000, { message: "Id shouldnt contain more than 10000 characters" }),
  shipping_cost: z
    .number()
    .min(0)
    .max(1000000, { message: "Shipping cost exceeded maximum 1000000" }),
  price: z
    .number()
    .min(0)
    .max(1000000000, { message: "Price exceeded maximum 1000000000" }),
  image_src: z.string().url(),
  sold_amount: z.number().min(0).max(100000000).optional(),
});

type ProductSchema = z.infer<typeof ProductSchema>;

const ProductForm = () => {
  const [state, formAction] = useFormState(createInvoice, { errors: {} });
  const { pending } = useFormStatus();

  const clientAction = async (formData: FormData) => {
    // client-side validation

    const newProduct = {
      product_name: formData.get("product_name"),
      category_id: Number(formData.get("category_id")),
      brand_id: Number(formData.get("brand_id")),
      price: Number(formData.get("brand_id")),
      shipping_cost: Number(formData.get("brand_id")),
      sold_amount: Number(formData.get("brand_id")),
    };

    const result = ProductSchema.safeParse(newProduct);

    if (!result.success) {
      result.error.issues.forEach((issue) => {
        toast.error(issue.path[0] + ": " + issue.message);
      });
      return; //Important because it's gonna call  `createInvoice` even if errors are caught
    }

    await createInvoice(state, formData);
  };

  return (
    <div>
      <form className="flex flex-col gap-4" action={clientAction}>
        <input
          type="text"
          placeholder="product name"
          name="product_name"
          className=""
        />
        <input
          type="text"
          placeholder="category id"
          name="category_id"
          className=""
        />
        <input
          type="text"
          placeholder="brand id"
          name="brand_id"
          className=""
        />
        <input type="text" placeholder="price" name="price" className="" />
        <input
          type="text"
          placeholder="shipping cost"
          name="shipping_cost"
          className=""
        />
        <input
          type="text"
          placeholder="sold amount"
          name="sold_amount"
          className=""
        />
        <input
          type="text"
          placeholder="image URL"
          name="image_src"
          className=""
        />
        <button
          className="cursor-pointer rounded-xl bg-violet-500 px-3 py-2 font-[500] text-white"
          type="submit"
        >
          {pending ? "Submitting.." : "Add"}
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
