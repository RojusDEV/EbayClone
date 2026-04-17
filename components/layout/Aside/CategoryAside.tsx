import Link from "next/link";
import React from "react";
import useSupabaseServer from "@/lib/utils/supabase/supabase-server";
import { cookies } from "next/headers";
import capitalizeLetter from "@/hooks/helpers/capitalizeLetter";
const CategoryAside = async ({ params }: { params: { slug: string } }) => {
  const cookieStore = cookies();

  const client = useSupabaseServer(cookieStore);

  const { data: subCategories } = await client
    .from("subCategories")
    .select()
    .eq("brand_id", Number(params.slug[1]))
    .throwOnError();

  const pageTitle = capitalizeLetter(params.slug[0]);

  return (
    <div className="hidden lg:grid">
      <span className="text-3xl font-bold font-sans">{pageTitle}</span>
      <span className="text-sm font-bold">Shop by Category</span>
      <ul>
        {subCategories &&
          subCategories.map((subCategory) => (
            <li key={subCategory.id}>
              <Link href="#" className="text-sm text-gray-700 hover:underline">
                {subCategory.label?.replace(/[_]/g, " & ").replace(/[-]/g, " ")}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CategoryAside;
