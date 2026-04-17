"use client";
import { createClient } from "@/lib/utils/supabase/client/client";
import React, { useState } from "react";

import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const Categories = () => {
  const schema1 = z.object({
    label: z.string().min(1).max(50),
  });

  const schema2 = z
    .object({
      category_id: z.number().min(0).max(100000),
    })
    .merge(schema1);

  type Schema = z.infer<typeof schema1>;
  type Schema2 = z.infer<typeof schema2>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>({ resolver: zodResolver(schema1) });

  const {
    register: register2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
  } = useForm<Schema2>({ resolver: zodResolver(schema2) });
  const supabase = createClient();
  const handleAddCategory: SubmitHandler<Schema> = async (data) => {
    const { error } = await supabase
      .from("categories")
      .insert({ label: data.label });
    error && console.log(error);
  };

  const handleAddSubCategory: SubmitHandler<Schema2> = async (data) => {
    const multipleValues = data.label.split(" ").map((el) => ({
      category_id: data.category_id,
      label: el,
    }));
    const { error } = await supabase
      .from("subCategories")
      .insert(multipleValues);
    error && console.error(error);
  };

  return (
    <div className="grid items-center gap-2 ">
      <form className="flex gap-4" onSubmit={handleSubmit(handleAddCategory)}>
        <input type="text" placeholder="category name" {...register("label")} />
        {errors.label && <span className="text-red-500">{errors.label.message}</span>}
        <button
          className="cursor-pointer rounded-xl bg-violet-500 px-3 py-2 font-[500] text-white"
          type="submit"
        >
          Add
        </button>
      </form>
      <form
        className="flex items-center gap-4"
        onSubmit={handleSubmit2(handleAddSubCategory)}
      >
        <span>Add SubCategory</span>
        <textarea
          placeholder="Add label"
          required
          aria-labelledby="submit-btn"
          className="w-96"
          {...register2("label")}
        />
        {errors2.label && <span className="text-red-500">{errors2.label.message}</span>}

        <input
          type="text"
          placeholder="Add category_id"
          required
          aria-labelledby="submit-btn"
          {...register2("category_id")}
        />
        {errors2.category_id && <span className="text-red-500">{errors2.category_id.message}</span>}

        <button
          id="submit-btn"
          className="cursor-pointer rounded-xl bg-violet-500 px-3 py-2 font-[500] text-white"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Categories;
