"use client";
import Link from "next/link";
import React from "react";

const Tabs = () => {
  return (
    <div>
      <ul
        className="lg:overflow-x-hidden mx-auto flex max-w-7xl justify-center gap-4 overflow-x-scroll py-2 text-xs"
      >
        <li className="text-nowrap">
          <Link href="/categories/Saved" data-attr="tab">
            Saved
          </Link>
        </li>
        <li className="text-nowrap">
          <Link href="/categories/Electronics" data-attr="tab">
            Electronics
          </Link>
        </li>
        <li className="text-nowrap">
          <Link href="/categories/Motors" data-attr="tab">
            Motors
          </Link>
        </li>
        <li className="text-nowrap">
          <Link href="/categories/Fashion" data-attr="tab">
            Fashion
          </Link>
        </li>
        <li className="text-nowrap">
          <Link href="/categories/collectibles-Art" data-attr="tab">
            Collectibles and Art
          </Link>
        </li>
        <li className="text-nowrap">
          <Link href="/categories/sports" data-attr="tab">
            Sports
          </Link>
        </li>
        <li className="text-nowrap">
          <Link href="/categories/Health-beauty" data-attr="tab">
            Health & Beauty
          </Link>
        </li>
        <li className="text-nowrap">
          <Link href="/categories/Industrial-equipment" data-attr="tab">
            Industrial equipment
          </Link>
        </li>
        <li className="text-nowrap">
          <Link href="/categories/Home-Garden" data-attr="tab">
            Home & Garden
          </Link>
        </li>
        <li className="text-nowrap">
          <Link href="/categories/Deals" data-attr="tab">
            Deals
          </Link>
        </li>
        <li className="text-nowrap">
          <Link href="/categories/Sells" data-attr="tab">
            Sell
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Tabs;
