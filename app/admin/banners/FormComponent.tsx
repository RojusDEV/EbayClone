"use client";
import useCreateBannerMutation from "@/hooks/mutations/use-create-banner-mutation";
import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface selectedParamType {
  category_id: undefined | number;
  subCategory_id: undefined | number;
}

export default function FormComponent({
  selectedParam,
}: {
  selectedParam: selectedParamType;
}) {
  const queryClient = useQueryClient();
  const bannerMutation = useCreateBannerMutation();

  const schema = z.object({
    backgroundImage_url: z.string().min(0).max(150).url(),
    heading: z.string().min(5).max(200),
    subHeading: z.string().min(5).max(200),
    buttonName: z.string().min(1).max(20),
    redirectPath: z.string().url(),
  });

  type schema = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<schema>({ resolver: zodResolver(schema) });

  const handleAddBanner: SubmitHandler<schema> = (data) => {
    const rawFormData = {
      backgroundImage_url: data.backgroundImage_url,
      heading: data.heading,
      subHeading: data.subHeading,
      buttonName: data.buttonName,
      redirectPath: data.redirectPath,
    };

    bannerMutation.mutateAsync(
      {
        ...rawFormData,
        category_id: selectedParam.category_id,
        subCategory_id: selectedParam.subCategory_id,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["banners"] });
        },
      },
    );
  };

  return (
    <div className="">
      <span className="text-2xl font-bold text-black">Add new banner</span>
      <form onSubmit={handleSubmit(handleAddBanner)} className="grid gap-2">
        <input
          type="text"
          className="rounded-lg border-2 border-black px-2 py-2"
          placeholder="Image url"
          {...register("backgroundImage_url")}
        />
        {errors.backgroundImage_url && (
          <span className="text-red-500">
            {errors.backgroundImage_url.message}
          </span>
        )}
        <input
          type="text"
          className="rounded-lg border-2 border-black px-2 py-2"
          {...register("heading")}
          placeholder="Heading"
        />
        {errors.heading && (
          <span className="text-red-500">{errors.heading.message}</span>
        )}

        <input
          type="text"
          className="rounded-lg border-2 border-black px-2 py-2"
          placeholder="Sub"
          {...register("subHeading")}
        />
        {errors.subHeading && (
          <span className="text-red-500">{errors.subHeading.message}</span>
        )}

        <input
          type="text"
          className="rounded-lg border-2 border-black px-2 py-2"
          {...register("buttonName")}
          placeholder="Button Name"
        />
        {errors.buttonName && (
          <span className="text-red-500">{errors.buttonName.message}</span>
        )}

        <input
          type="text"
          className="rounded-lg border-2 border-black px-2 py-2"
          {...register("redirectPath")}
          placeholder="Redirect Url"
        />
        {errors.redirectPath && (
          <span className="text-red-500">{errors.redirectPath.message}</span>
        )}

        <button
          type="submit"
          name="submitBtn"
          className="rounded-lg bg-green-500 py-2 font-bold text-white"
        >
          Add
        </button>
      </form>
    </div>
  );
}
