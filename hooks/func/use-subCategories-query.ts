import getSubCategories from "../queries/get-subCategories";
import { TypedSupabaseClient } from "@/lib/utils/types";

export default function useSubCategoriesQuery({
  slug,
  client,
}: {
  slug: string | string[];
  client: TypedSupabaseClient;
}) {
  const queryFn = async () => {
    try {
      const slugString = Array.isArray(slug) ? slug[0] : slug;
      const data = await client
        .from("categories")
        .select()
        .eq("label", slugString.toLocaleLowerCase());
      if (data.data) {
        //Check if data exists
        return getSubCategories(client, data.data[0].id).then(
          (results) => results.data,
        );
      }
    } catch (error) {
      console.error(error);
    }
  };
  const queryKey = ["subCategories"];
  return { queryKey, queryFn, staleTime: 60 * 60 * 1000 * 24 };
}
