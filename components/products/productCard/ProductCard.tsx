"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaEllipsisV } from "react-icons/fa";

type ProductCardProps<K> = {
  imageSrc: string;
  product_title: string;
  product_rating: number;
  product_price: number;
  product_shipping: number;
  product_sold: number;
  product_id: K;
  clickEventFn: (key: string, value: K) => void;
};

export default function ProductCard<K>({
  imageSrc,
  product_title,
  product_rating, // Assuming this will be used later or can be removed if not needed
  product_price,
  product_shipping,
  product_sold,
  product_id,
  clickEventFn,
}: ProductCardProps<K>) {
  return (
    <div
      className=""
      onClick={() => clickEventFn("viewedItems", product_id)}
    >
      <div className="flex items-end justify-between">
        <div className="flex gap-5">
          <div className="rounded-lg bg-neutral-100">
            <Image
              alt="product image"
              src={imageSrc || "#"}
              height={200}
              width={200}
              style={{ maxWidth: "100%" }}
              className="mix-blend-multiply"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Link href="#" className="font-medium hover:underline">
              {product_title}
            </Link>
            {/* Displaying product price */}
            <span className="text-2xl font-bold">${product_price}</span>
            <span className="text-sm text-gray-500">
              ${product_shipping} shipping
            </span>
            <span className="font-medium text-red-500">
              {product_sold} sold
            </span>
          </div>
        </div>
        <button>
          <FaEllipsisV />
        </button>
      </div>
    </div>
  );
}
