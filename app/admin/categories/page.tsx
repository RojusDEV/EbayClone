import Categories from "@/components/frontend/admin/Categories";
import { createClient } from "@/lib/utils/supabase/server/server";
import { cookies } from "next/headers";
const CategoriesPage = async () => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data: categories } = await supabase.from("categories").select().throwOnError();
  console.log(categories);


  return (
    <div className="flex max-h-screen w-full justify-between px-4 pt-4">
      <div className="grid">
        <span>Category list</span>
        <ul className="grid gap-4">
          {categories && categories?.map((category) => (
            <li className="bg-gray-300 p-2 text-white" key={category.id}>
              {category.label}
            </li>
          ))}
        </ul>
        <Categories />
      </div>
      <pre className="overflow-y-scroll">
        {JSON.stringify(categories, null, 2)}
      </pre>
    </div>
  );
};

export default CategoriesPage;
