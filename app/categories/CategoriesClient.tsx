"use client";

import Link from "next/link";
import React, { useMemo, useState } from "react";

type CategoryRow = {
  id: number;
  label: string | null;
};

function slugifyCategoryLabel(label: string) {
  return label
    .trim()
    .toLowerCase()
    .replace(/[&]/g, "and")
    .replace(/[_]/g, "-")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

export default function CategoriesClient({
  categories,
}: {
  categories: CategoryRow[];
}) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return categories;
    return categories.filter((c) => (c.label ?? "").toLowerCase().includes(q));
  }, [categories, query]);

  return (
    <section className="rounded-[28px] border border-neutral-200 bg-white p-5 shadow-[0_10px_40px_rgba(0,0,0,0.06)] sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <h2 className="text-xl font-bold tracking-tight text-neutral-900">
            All categories
          </h2>
          <p className="text-sm text-neutral-600">
            Browse by department and jump into subcategories.
          </p>
        </div>

        <div className="relative w-full sm:max-w-md">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search categories"
            className="h-11 w-full rounded-full border border-neutral-300 bg-[#f7f7f7] px-4 pr-10 text-sm text-neutral-900 outline-none transition focus:border-[#3665f3] focus:bg-white"
          />
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-neutral-400">
            {filtered.length}
          </span>
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((category) => {
          const label = category.label ?? "Category";
          const slug = slugifyCategoryLabel(label);
          return (
            <Link
              key={category.id}
              href={`/categories/${slug}`}
              className="group flex items-center justify-between rounded-2xl border border-neutral-200 bg-white px-4 py-4 transition hover:border-neutral-300 hover:shadow-sm"
            >
              <div className="min-w-0">
                <div className="truncate text-sm font-semibold text-neutral-900">
                  {label}
                </div>
                <div className="mt-1 text-xs text-neutral-500">
                  Shop {label.toLowerCase()}
                </div>
              </div>
              <div className="ml-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 text-neutral-500 transition group-hover:bg-[#e8efff] group-hover:text-[#3665f3]">
                <span aria-hidden>→</span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

