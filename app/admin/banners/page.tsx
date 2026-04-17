"use client";
import { BannerCard } from "@/components/frontend/admin/Banner/BannerCard/BannerCard";
import useCategoriesQuery from "@/hooks/queries/categories/use-categories-query";
import useBannersQuery from "@/hooks/queries/use-banners-query";
import React, { useState } from "react";
import FormComponent from "./FormComponent";

type selectedParamType = {
  category_id: undefined | number;
  subCategory_id: undefined | number;
};

const Page = () => {
  const [selectedParam, setSelectedParam] = useState<selectedParamType>({
    category_id: undefined,
    subCategory_id: undefined,
  });

  const { data: banners } = useBannersQuery();
  const { data: categories } = useCategoriesQuery();

  /** Filtering banners and making sure id passed isn't null */
  const filteredBanners = banners?.filter((banner) => {
    const {
      category_id: bannerCategoryId,
      subCategory_id: bannerSubCategoryId,
    } = banner;
    return (
      (selectedParam.category_id ?? selectedParam.subCategory_id)
    );
  });

  return (
    <div className="mx-4 flex justify-center align-middle">
      <div className="">
        <div className="my-4">
          <select
            name="selectCategory"
            id=""
            className="cursor-pointer"
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setSelectedParam({
                category_id: Number((e.target as HTMLSelectElement).value),
                subCategory_id: undefined,
              })
            }
          >
            {/* loop over elements */}
            <option value="">Select Category</option>
            {categories?.map((category) => (
              <option value={category.id} key={category.id}>
                {category.label}
              </option>
            ))}
          </select>
          <select
            name="selectSubCategory"
            id=""
            className="cursor-pointer"
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setSelectedParam({
                category_id: undefined,
                subCategory_id: Number((e.target as HTMLSelectElement).value),
              })
            }
          >
            {/* loop over elements */}
            <option value="">Select Subcategory</option>
            {categories?.map((category) => (
              <option value={category.id} key={category.id}>
                {category.label}
              </option>
            ))}
          </select>
          <select name="selectCarousel" id="" className="cursor-pointer">
            <option value="">Select carousel</option>
          </select>
        </div>
        <div className="">
          {filteredBanners?.map((banner) => (
            <BannerCard
              image_path={banner.backgroundImage_url}
              title={banner.heading}
            />
          ))}
        </div>
      </div>
      <FormComponent selectedParam={selectedParam} />
    </div>
  );
};

export default Page;
